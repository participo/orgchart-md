# Explanatory-power rubric

*Working draft v1. The decision rules for tagging every item published on orgchart.md, designed to keep the curation honest and the framework's falsification mechanism visible.*

---

## What this rubric does

Every item published on orgchart.md as evidence or illustration carries three tags. This rubric defines each one and gives the decision rules for assigning them.

The point of the rubric is not bureaucratic. It is to keep the site's stated stance, *build in public, stress-test the framework rather than defend it*, structurally enforced. Without a written rubric, "strengthening" and "weakening" drift into "items I like" and "items I disagree with." With one, the tags mean something a reader can audit.

---

## Tag 1: Type — illustration or evidence

**Illustration** shows the pattern in practice. A blog post by a developer applying TPS to their agent orchestration is an illustration of Layer 3. A firm running kanban for agents is an illustration. A think-piece articulating the rediscovery thesis in different vocabulary is an illustration. Illustrations confirm that the pattern exists in the wild. They do not test the framework's predictions.

**Evidence** tests the predictive claim. Outcomes data comparing operationally-disciplined firms to others is evidence. A case study where the framework's 18-month plateau prediction succeeded or failed is evidence. Empirical results on agent coordination patterns (the Assign-All paradox, the Microsoft WTI 67/32 organisational/individual split) are evidence. Evidence either corroborates or weakens a specific claim the framework makes.

The distinction matters because the framework's strong-form prediction (that firms treating AI as a tooling-and-talent exercise plateau within 18 months while firms that solve for management-as-infrastructure compound) is testable only against evidence, not illustration. A site full of illustrations with no evidence is a site that has never been stress-tested.

**Decision rule:** if removing this item left the framework's predictions unaffected (no claim either supported or weakened), it is an illustration. If it would change how confidently a reader could trust a specific prediction, it is evidence.

---

## Tag 2: Power at publication — strengthening, weakening, new, holding

The initial assessment when the item is first added. Four states, in order of decision difficulty.

**Strengthening** corroborates the layer's claim with a new mechanism, a sharpened argument, or fresh empirical data. Re-stating the claim in different words is *not* strengthening; only items that add a mechanism, sharpen an argument, or supply evidence beyond what the framework already has qualify. The confirmation check: would the item rate equally if it argued the opposite? If not, it is probably just agreement, not strengthening.

**Weakening** contradicts, complicates, or scope-limits a claim. The Assign-All paradox is the canonical example: it does not refute Layer 3, but it forces the framework to specify *which* practices transfer to which work shapes. First-class. The site's stated stance is that counter-evidence is editorially equal to confirmation; weakening items get surfaced inline with strengthening ones, not in a separate footer.

**New** covers two situations the framework should track but cannot yet evaluate as evidence. First, the first encounter with a pattern, framing, or vocabulary (Cutler's *legible variety* on first publication; the Manager Agent / POSG formalism on first encounter). Second, a live signal worth tracking but not yet evidence (the WSJ IT unemployment figures are the example: they may turn into Layer 1 evidence one way or the other once the cuts cluster). Either way, *New* carries an implicit "revisit at next quarterly review" instruction.

**Holding** confirms what the framework already says without adding mechanism, sharpening, or evidence. Low value but trackable. Use sparingly; most items that feel like *Holding* are actually *off-thesis* and should not have been published. The discipline of using *Holding* honestly is what stops the site degrading into confirmation theatre.

**Decision rule order:**
1. Does the item add a new mechanism, argument, or empirical anchor? If yes, *Strengthening* or *Weakening* based on direction.
2. Does the item complicate or contradict any layer? If yes, *Weakening*.
3. Is this a first encounter with a pattern, or a live signal not yet resolved? If yes, *New*.
4. Otherwise, *Holding*, and reconsider whether to publish at all.

---

## Tag 3: Trajectory — up, holding, down

The metadata-as-feature mechanism. This tag updates over time as the framework's evidence base grows. Each item carries:

- **Original publication date** (when the article was first published in the world).
- **Initial power tag** (from Tag 2 above, set when the item was added to orgchart.md).
- **Current trajectory** (↑, ↔, ↓), updated on review.
- **One-sentence rationale** linking from the trajectory tag to a short explanation page.

**↑ (increasing explanatory power):** subsequent evidence or events have strengthened the item's claim or made its prediction look better-aimed. Example: an article predicting that operationally-disciplined firms would outperform on agent deployment, where the Microsoft WTI 2026 data subsequently corroborates the prediction's shape.

**↔ (holding):** subsequent evidence has neither strengthened nor weakened the item materially. Default when the item is fresh; should be reassessed at quarterly reviews.

**↓ (decreasing explanatory power):** subsequent evidence or events have weakened the item's claim or made its prediction look poorly-aimed. Example: a confident prediction that failed to materialise within its stated time horizon, where the framework had taken it as strengthening evidence.

**Review cadence:** every item gets reassessed at minimum quarterly. Items tagged *Watching* get reassessed when the signal they were watching resolves. Items tagged *New* get either promoted to *Strengthening / Weakening* or reassessed for fit within six months of first publication.

---

## Cross-layer tagging

Some items belong to more than one layer. Each item carries a *primary layer* designation plus optional *secondary layer(s)*. Resist forcing items into a single layer when they genuinely span; the cross-layer designation is what the framework's *capital-C Capability* claim depends on.

---

## Counter-evidence stays in the mix

Items tagged *Weakening* are listed in the per-layer evidence section alongside strengthening items. The power tag (strengthening / weakening / new / holding) is visible inline so readers can scan the mix without leaving the layer. Aggregating weakening items into a separate section or footer would create a visual hierarchy that contradicts the framework's stated editorial stance; the site is structurally a falsification record, and a reader scanning any layer should see what supports and what challenges the claim in one view.

---

## Source-quality hierarchy

Two items can fit the framework equally well and still differ in editorial weight because their sources differ. When choosing between candidates of similar topical relevance, prefer this order.

**Tier 1 — Primary sources from frontier firms.** Anthropic, OpenAI, DeepMind, Microsoft AI announcements with substance (not bare product launches). CEO and executive interviews where they speak to operational deployment specifics: Lutke, Levie, Krieger, Rao, Wu, Altman on deployment. These carry the most weight: current, in-the-field, primary.

**Tier 2 — Established practitioner voices on platforms with editorial quality.** Lenny's Newsletter, John Cutler, Marc Ramos, Max Schoening, Elena Verna, and similar practitioner voices with framework-shaped writing. Accessible reads with concrete claims. Often more current than academic work and more useful for a working-leadership audience.

**Tier 3 — Sharp academic papers with all three of:** central to the thesis, recent (within 6 months), and surfacing a specific empirical finding or formal result. Not just another agentic-systems paper saying agents need governance. The bar is high; one academic paper per week is usually plenty.

**Tier 4 — Institutional research** (Brookings, MIT Sloan, government statistics) when the analysis adds depth beyond the bare data point. Single-data-point news items rarely make the cut unless paired with strong commentary.

**Items that fail the bar by default:** news data points without trend analysis or commentary depth; press releases without independent secondary analysis; polemics or blog posts riffing on news without primary evidence; established academic foundations (pre-2024) unless directly tied to a current observation that explicitly references the older work; single-blogger observations without independent corroboration.

---

## Editorial rules

Four rules that override the tagging logic above.

**No big-4 firm mentions in commentary.** EY, KPMG, Deloitte, PwC. Items *about* big-4 firms can be promoted only with an explicit flag for editorial decision; never auto-promote. The Anthropic × PwC press release is a borderline case promotable on the Anthropic side, not the PwC side.

**No items from The Leverage.** Unsubscribed. Skip if encountered.

**Primary over quoter.** When an item is someone summarising another person's argument (Reid Hoffman discussing what Person X said), find the primary source and consider promoting that instead. If the primary cannot be found in one search attempt, mark TBD and hold for the next review.

**Over-fitting check.** If the same source appears as evidence across multiple layers, that is evidence of forcing the thesis. Choose the one strongest layer placement, not multiple.

---

## Promotion bar

A high-bar empty week is a healthy week. The weekly cap of six is a ceiling, not a target. Tie-breakers go to *do not promote*, not *promote to fill the cap*.

Four exclusions sit alongside the editorial rules above. Each has cost editorial trust in past curation runs.

**Polemic exclusion.** Practitioner reputation is not a bar-clearer. Opinion-strong, evidence-light, sharp-take-without-mechanism pieces do not clear the bar regardless of who wrote them. The bar is mechanism, sharpening, or empirical anchor.

**Single-incident exclusion.** A single firm's experience, a single process failure, a single layoff round, a single news event is anecdote until it shows otherwise. It clears the bar only when both (a) there is causal evidence tracking it to a named framework claim, and (b) multiple corroborating instances are visible. A vivid narrative does not make an isolated incident framework-relevant.

**Tier-4 falsification is a flag, not a promotion.** When a tier-4 institutional or news item directly contradicts an existing on-site claim, the editorial move is to flag the existing claim as *contested* with the new data noted inline. It is not a promotion. The falsification record gets stronger through flag discipline, not through promoting weak sources because they happen to push against something already published.

**Empty slots stay empty.** Where a layer has a structural gap (e.g. Layer 2 counter-evidence), the gap stays open until a refutation-shaped candidate surfaces. A sharpening dressed as a refutation makes the gap less visible without resolving it.

---

## What this rubric is not

This rubric is for individual-article assessment, not for the framework's overall standing. The site's overall position (is the framework holding up, evolving, or being undermined?) is a question the *framework_vN_draft.md* documents address through their *Refinements since v(N-1)* sections. Individual articles feed that meta-assessment; they do not perform it.
