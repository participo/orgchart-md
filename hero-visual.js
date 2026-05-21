/*
 * hero-visual.js — generative framework heroes for orgchart.md
 *
 * The triangle framework is rendered as dot fields composed so the SHAPE
 * expresses each side's meaning:
 *   Vertical   — dense, continuous column (agent capability, integrated)
 *   Horizontal — clusters separated by visible gaps (org, non-integrated)
 *   Diagonal   — three dense circular clusters strung on a faint guide
 *                (the 3D skills bridging V and H)
 *
 * Every page shows the full triangle; emphasis shifts per page via opacity.
 * Monochrome ink + terracotta accent only.
 * Small Caveat labels integrated, fading in last.
 * Intro animation once, then static.
 */
(function () {
  'use strict';

  var BUF_W = 1280, BUF_H = 512;
  var INTRO_S = 2.4;

  // Triangle anchors in the buffer
  var TRI = {
    apex:   { x: 300, y:  85 },
    corner: { x: 300, y: 425 },
    end:    { x: 1080, y: 425 }
  };

  // Horizontal clusters — varying widths, with visible gaps between them.
  // The breaks ARE the visual story for the horizontal.
  var H_CLUSTERS = [
    { cx: 378,  rx: 34, ry: 16, n: 38 },
    { cx: 522,  rx: 26, ry: 13, n: 22 },
    { cx: 678,  rx: 20, ry: 10, n: 14 }, // sparser — a weaker handoff
    { cx: 828,  rx: 30, ry: 14, n: 28 },
    { cx: 980,  rx: 30, ry: 13, n: 24 }
  ];

  // Diagonal clusters — three dense circular knots along the hypotenuse
  var D_CLUSTERS = [0.22, 0.50, 0.78];

  // Per-page emphasis: opacity for each element + accent type
  var PAGES = {
    index: {
      vAlpha: 1.0, hAlpha: 1.0, dAlpha: 1.0,
      vGuide: 1.0, hGuide: 1.0, dGuide: 0.9,
      accents: 'd_focal',
      label: 'index'
    },
    diagnosis: {
      vAlpha: 1.0, hAlpha: 1.0, dAlpha: 0.20,
      vGuide: 1.0, hGuide: 1.0, dGuide: 0.4,
      accents: 'none',
      label: 'diagnosis'
    },
    skills: {
      vAlpha: 0.22, hAlpha: 0.22, dAlpha: 1.0,
      vGuide: 0.4, hGuide: 0.4, dGuide: 1.0,
      accents: 'd_focal_connect',
      label: 'skills'
    },
    infrastructure: {
      vAlpha: 0.85, hAlpha: 0.85, dAlpha: 0.85,
      vGuide: 0.85, hGuide: 0.85, dGuide: 0.85,
      accents: 'fabric',
      label: 'infrastructure'
    }
  };

  // ── helpers ───────────────────────────────────────────────────────────
  function hash01(i) {
    var x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function lp(p, s, e) { return Math.max(0, Math.min(1, (p - s) / (e - s))); }
  function readVar(name, fb) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fb;
  }
  function toRgb(color) {
    // Robust: paint 1×1 with the color and read the pixel. Works for any
    // CSS color the browser understands (hex, rgb, hsl, oklch, named).
    try {
      var c = document.createElement('canvas');
      c.width = c.height = 1;
      var cx = c.getContext('2d');
      cx.fillStyle = '#000';            // baseline
      cx.fillRect(0, 0, 1, 1);
      cx.fillStyle = color || '#000';
      cx.fillRect(0, 0, 1, 1);
      var d = cx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2]];
    } catch (e) {
      return [26, 26, 26];
    }
  }
  function rgba(rgb, a) {
    return 'rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + a + ')';
  }

  // ── drawing primitives ────────────────────────────────────────────────

  function drawGuides(ctx, e, ink) {
    // V: solid thin line — V is continuous, integrated
    ctx.strokeStyle = rgba(ink, 0.25 * e.vGuide);
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(TRI.corner.x, TRI.corner.y);
    ctx.lineTo(TRI.apex.x, TRI.apex.y);
    ctx.stroke();

    // H: short-dash, faint — wants to be a line but is broken in practice
    ctx.strokeStyle = rgba(ink, 0.20 * e.hGuide);
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 7]);
    ctx.beginPath();
    ctx.moveTo(TRI.corner.x, TRI.corner.y);
    ctx.lineTo(TRI.end.x, TRI.end.y);
    ctx.stroke();

    // D: long-dash, faint — the aspirational connector
    ctx.strokeStyle = rgba(ink, 0.20 * e.dGuide);
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(TRI.apex.x, TRI.apex.y);
    ctx.lineTo(TRI.end.x, TRI.end.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function drawVertical(ctx, p, alpha, ink) {
    if (alpha < 0.02) return;
    // Sparser column — fewer dots, but still continuous
    var N = 58;
    for (var i = 0; i < N; i++) {
      var u = i / (N - 1);
      var y = TRI.corner.y + (TRI.apex.y - TRI.corner.y) * u;
      var jitter = (hash01(i * 7.1 + 1) - 0.5) * 9;
      var x = TRI.apex.x + jitter;
      var start = u * 0.40;
      var a = easeOut(lp(p, start, start + 0.28)) * alpha;
      if (a < 0.02) continue;
      var r = 1.4 + hash01(i * 13.3) * 0.7;
      ctx.fillStyle = rgba(ink, a * 0.88);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    // Subtle integration bow-loops along the V, alternating sides
    var loopYs = [TRI.corner.y - 70, TRI.corner.y - 165, TRI.corner.y - 260];
    for (var j = 0; j < loopYs.length; j++) {
      var yc = loopYs[j];
      var sign = (j % 2 === 0) ? 1 : -1;
      var startL = 0.55 + j * 0.08;
      var al = easeOut(lp(p, startL, startL + 0.3)) * alpha;
      if (al < 0.02) continue;
      ctx.strokeStyle = rgba(ink, al * 0.45);
      ctx.lineWidth = 1;
      var x0 = TRI.apex.x;
      var off = 18 * sign;
      var h = 22;
      ctx.beginPath();
      ctx.moveTo(x0, yc - h);
      ctx.bezierCurveTo(x0 + off * 1.7, yc - h, x0 + off * 1.7, yc + h, x0, yc + h);
      ctx.stroke();
    }
  }

  function drawHorizontal(ctx, p, alpha, ink) {
    if (alpha < 0.02) return;
    H_CLUSTERS.forEach(function (cl, idx) {
      var start = 0.05 + idx * 0.10;
      var a = easeOut(lp(p, start, start + 0.32)) * alpha;
      if (a < 0.02) return;
      for (var i = 0; i < cl.n; i++) {
        var angle = hash01(idx * 200 + i * 3.1) * Math.PI * 2;
        var radial = Math.sqrt(hash01(idx * 200 + i * 5.7));
        var dx = Math.cos(angle) * radial * cl.rx;
        var dy = Math.sin(angle) * radial * cl.ry;
        var r = 1.3 + hash01(idx * 200 + i * 11) * 0.6;
        ctx.fillStyle = rgba(ink, a * 0.85);
        ctx.beginPath();
        ctx.arc(cl.cx + dx, TRI.corner.y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  function drawDiagonal(ctx, p, alpha, ink, mark, accentClusters) {
    if (alpha < 0.02) return;
    D_CLUSTERS.forEach(function (t, idx) {
      var cx = TRI.apex.x + (TRI.end.x - TRI.apex.x) * t;
      var cy = TRI.apex.y + (TRI.end.y - TRI.apex.y) * t;

      var start = 0.30 + idx * 0.13;
      var a = easeOut(lp(p, start, start + 0.4)) * alpha;
      if (a < 0.02) return;

      var n = 52;
      var radius = 30;
      for (var i = 0; i < n; i++) {
        var angle = hash01(idx * 300 + i * 3.7) * Math.PI * 2;
        var rr = Math.sqrt(hash01(idx * 300 + i * 7.1)) * radius;
        var x = cx + Math.cos(angle) * rr;
        var y = cy + Math.sin(angle) * rr;
        var dotR = 1.2 + hash01(idx * 300 + i * 11.3) * 0.6;
        ctx.fillStyle = rgba(ink, a * 0.82);
        ctx.beginPath();
        ctx.arc(x, y, dotR, 0, Math.PI * 2);
        ctx.fill();
      }

      // Terracotta focal dot at each cluster centre
      if (accentClusters) {
        ctx.fillStyle = rgba(mark, a);
        ctx.beginPath();
        ctx.arc(cx, cy, 3.6, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  // Connecting arcs between the 3 skill clusters — thin terracotta arcs
  // bowing above the diagonal between clusters, with tiny arrowheads.
  function drawSkillConnectors(ctx, p, mark) {
    var pts = D_CLUSTERS.map(function (t) {
      return {
        x: TRI.apex.x + (TRI.end.x - TRI.apex.x) * t,
        y: TRI.apex.y + (TRI.end.y - TRI.apex.y) * t
      };
    });
    for (var i = 0; i < pts.length - 1; i++) {
      var P1 = pts[i], P2 = pts[i + 1];
      var start = 0.78 + i * 0.05;
      var a = easeOut(lp(p, start, start + 0.22));
      if (a < 0.02) continue;
      var dx = P2.x - P1.x, dy = P2.y - P1.y;
      var len = Math.hypot(dx, dy);
      var nx = dy / len, ny = -dx / len;
      var off = 42;
      var cpx = (P1.x + P2.x) / 2 + nx * off;
      var cpy = (P1.y + P2.y) / 2 + ny * off;
      ctx.strokeStyle = rgba(mark, a * 0.55);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(P1.x, P1.y);
      ctx.quadraticCurveTo(cpx, cpy, P2.x, P2.y);
      ctx.stroke();
      // Tiny arrowhead at P2 along the tangent (from cp toward P2)
      var tx = P2.x - cpx, ty = P2.y - cpy;
      var tlen = Math.hypot(tx, ty) || 1;
      var ux = tx / tlen, uy = ty / tlen;
      var sz = 5;
      ctx.fillStyle = rgba(mark, a * 0.7);
      ctx.beginPath();
      ctx.moveTo(P2.x, P2.y);
      ctx.lineTo(P2.x - ux * sz - uy * sz * 0.5, P2.y - uy * sz + ux * sz * 0.5);
      ctx.lineTo(P2.x - ux * sz + uy * sz * 0.5, P2.y - uy * sz - ux * sz * 0.5);
      ctx.closePath();
      ctx.fill();
    }
  }

  // Operating-system fabric: horizontal threads inside the triangle, each
  // a row of small ink dots running from just-right-of-V to just-left-of-D.
  // Terracotta accents at intervals — the woven operational substrate.
  function drawInfraFabric(ctx, p, ink, mark) {
    var N = 11;
    var yTop = TRI.apex.y + 28;
    var yBot = TRI.corner.y - 18;
    for (var i = 0; i < N; i++) {
      var u = i / (N - 1);
      var y = yTop + (yBot - yTop) * u;
      var tD = (y - TRI.apex.y) / (TRI.corner.y - TRI.apex.y);
      var xLeft = TRI.apex.x + 10;
      var xRight = TRI.apex.x + (TRI.end.x - TRI.apex.x) * tD - 10;
      if (xRight - xLeft < 30) continue;
      var start = 0.45 + i * 0.035;
      var a = easeOut(lp(p, start, start + 0.32));
      if (a < 0.02) continue;
      var dotCount = Math.max(3, Math.floor((xRight - xLeft) / 16));
      for (var j = 0; j < dotCount; j++) {
        var tx = xLeft + (j / (dotCount - 1)) * (xRight - xLeft);
        var tjit = (hash01(i * 31 + j * 7.1) - 0.5) * 2.5;
        ctx.fillStyle = rgba(ink, a * 0.85);
        ctx.beginPath();
        ctx.arc(tx, y + tjit, 1.4 + hash01(i * 11 + j) * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
      if (i % 3 === 1) {
        var mx = xLeft + (xRight - xLeft) * 0.5;
        ctx.fillStyle = rgba(mark, a * 1.0);
        ctx.beginPath();
        ctx.arc(mx, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawLabels(ctx, p, kind, ink, mark) {
    var a = easeOut(lp(p, 0.72, 1.0));
    if (a < 0.05) return;

    function setFont(size, weight, italic) {
      ctx.font = (italic ? 'italic ' : '') + (weight || '') + ' ' + size + 'px Caveat, cursive';
    }
    function multiline(lines, x, y, lineHeight) {
      // y is the CENTRE of the text block
      var totalH = (lines.length - 1) * lineHeight;
      var startY = y - totalH / 2;
      for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, startY + i * lineHeight);
      }
    }

    // Diagonal direction (for "above diagonal" perpendicular offset)
    var dx = TRI.end.x - TRI.apex.x;
    var dy = TRI.end.y - TRI.apex.y;
    var dlen = Math.hypot(dx, dy);
    var nx = dy / dlen;
    var ny = -dx / dlen;
    var vMidY = (TRI.apex.y + TRI.corner.y) / 2;
    var hMidX = (TRI.corner.x + TRI.end.x) / 2;

    if (kind === 'index') {
      // V label — horizontal, multi-line, right-aligned to the left of V
      ctx.fillStyle = rgba(ink, a * 0.7);
      setFont(28, '500');
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      multiline(['integrated', 'agent capability'], TRI.apex.x - 24, vMidY, 32);

      // H label — below the horizontal
      ctx.fillStyle = rgba(ink, a * 0.7);
      setFont(28, '500');
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('horizontal organisation', hMidX, TRI.corner.y + 32);

      // D label — terracotta, mid-diagonal, perpendicular off
      var midX = (TRI.apex.x + TRI.end.x) / 2;
      var midY = (TRI.apex.y + TRI.end.y) / 2;
      var off = 80;
      ctx.fillStyle = rgba(mark, a * 0.95);
      setFont(36, '600');
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('3D skills', midX + nx * off, midY + ny * off);

    } else if (kind === 'diagnosis') {
      // V label — horizontal, multi-line
      ctx.fillStyle = rgba(ink, a * 0.7);
      setFont(22, '500');
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      multiline([
        'agent capabilities',
        'increasingly integrated',
        'tasks and learning loops'
      ], TRI.apex.x - 24, vMidY, 26);

      // H label
      ctx.fillStyle = rgba(ink, a * 0.7);
      setFont(28, '500');
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('organisations remain horizontal', hMidX, TRI.corner.y + 32);

    } else if (kind === 'skills') {
      // Three cluster labels above the diagonal
      var names = ['delegation', 'discernment', 'debugging'];
      var lblOff = 62;
      D_CLUSTERS.forEach(function (t, idx) {
        var cx = TRI.apex.x + (TRI.end.x - TRI.apex.x) * t;
        var cy = TRI.apex.y + (TRI.end.y - TRI.apex.y) * t;
        ctx.fillStyle = rgba(mark, a * 0.95);
        setFont(28, '600');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(names[idx], cx + nx * lblOff, cy + ny * lblOff);
      });

    } else if (kind === 'infrastructure') {
      // Label closer in — nested in the empty space above the diagonal,
      // anchored near the end point so it feels part of the composition.
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      ctx.fillStyle = rgba(ink, a * 0.75);
      setFont(30, '600');
      ctx.fillText('the operating system', 1080, 160);
      ctx.fillStyle = rgba(ink, a * 0.55);
      setFont(22, '400', true);
      ctx.fillText('kanban, kaizen, memory', 1080, 196);
    }
  }

  // ── mount ─────────────────────────────────────────────────────────────

  function mount(node) {
    var kind = node.getAttribute('data-hero');
    var emphasis = PAGES[kind];
    if (!emphasis) return;

    var dpr = Math.min(2, window.devicePixelRatio || 1);
    var canvas = document.createElement('canvas');
    canvas.width = BUF_W * dpr;
    canvas.height = BUF_H * dpr;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var ink = toRgb(readVar('--ink', '#1a1a1a'));
    var mark = toRgb(readVar('--mark', '#b14a2f'));

    function paint(p) {
      ctx.clearRect(0, 0, BUF_W, BUF_H);
      drawGuides(ctx, emphasis, ink);
      drawVertical(ctx, p, emphasis.vAlpha, ink);
      drawHorizontal(ctx, p, emphasis.hAlpha, ink);
      drawDiagonal(ctx, p, emphasis.dAlpha, ink, mark,
        emphasis.accents === 'd_focal' || emphasis.accents === 'd_focal_connect');
      if (emphasis.accents === 'd_focal_connect') drawSkillConnectors(ctx, p, mark);
      if (emphasis.accents === 'fabric') drawInfraFabric(ctx, p, ink, mark);
      drawLabels(ctx, p, emphasis.label, ink, mark);
    }

    function place() {
      if (node.tagName.toLowerCase() === 'canvas') {
        node.parentNode.replaceChild(canvas, node);
      } else {
        node.appendChild(canvas);
      }
    }

    var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Wait for Caveat to load before drawing so labels use the right font
    var ready = (document.fonts && document.fonts.ready)
      ? document.fonts.ready
      : Promise.resolve();

    ready.then(function () {
      place();
      if (reduced) { paint(1); return; }
      var t0 = 0;
      function frame(now) {
        if (!t0) t0 = now;
        var elapsed = (now - t0) / 1000;
        var pp = Math.min(elapsed / INTRO_S, 1);
        paint(pp);
        if (elapsed < INTRO_S + 0.1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }

  function init() {
    var els = document.querySelectorAll('[data-hero]');
    for (var i = 0; i < els.length; i++) mount(els[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
