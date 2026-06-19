# orgchart.md framework

*Current canonical reference. Language aligned to the live site at orgchart.md as of 2026-05-13. Earlier framework iterations preserved in `framework_v2_archive.md`.*

---

## The headline

The new org chart for agents. Three-part framework: diagnosis, skills, infrastructure.

Agents work vertically; integrating increasingly sophisticated tasks from idea to deployment, while our organisations remain stubbornly horizontal; task distribution, reviews, sign-offs, and steercos. This mismatch is the biggest blocker organisations face when trying to absorb the exponential capability of agents.

But there are organisations integrating agents successfully; by using kanban and kaizen, building skills in delegation and discernment, running root-cause analysis, and growing organisational memory from conversations and actions. The new org chart for agents dusts off the practices of lean, agile, and well-established leadership principles.

---

## Layer 1 — Diagnosis: vertical capability, horizontal organisation

### The claim (matches live site)

Human work flows sideways: across people, review loops, teams, and steercos. Each handoff in those horizontal workflows was designed for human speed and manual oversight. What used to require multiple steps, and handoffs to other apps, colleagues or teams, agents have collapsed into integrated, vertical tasks.

The mismatch creates an AI absorption and coordination "tax" now that agents transform AI into a *capability* that's producing more coherently, and faster than organisations can process, and integrate. People in existing horizontal workflows carry a new burden: reviewing, validating, and integrating agent output.

Can organisations adapt? Coordination, context, judgment, and organisational memory all need to land where horizontal work meets vertical agent capability.

The diagnostic instrument is **People Per Process (PPP)**: count the number of people a piece of work touches before completion. Low PPP signals vertical-ready work. High PPP reveals the horizontal organisation. Decompose participation into load-bearing (core function, real expertise, real approval rights) versus sediment (awareness, CYA, legacy inclusion). Agents' vertical task integration will increasingly expose these tensions.

### Empirical anchors (for feed triage)

- **Ramp customer data, 2026:** top-quartile AI spenders have more than doubled revenue since 2023; bottom quartile is flat. Suggests the absorption gap is compounding, not just a deployment-readiness lag.
- **Microsoft 2026 Work Trend Index:** ~67% of variance in AI impact attributed to organisational factors, ~32% to individual mindset. 20,000 workers, 10 markets, large-N.
- **Asana 2025 research:** 90% of "super productive" AI users report more coordination work.
- **Aaron Levie capability overhang (March 2026):** cloud diffusion calibration — 1,000× in 15 years for cloud — as the timeline anchor for AI absorption. Names context/permissions/access-control plus 18-month-obsolete enterprise architectures as the binding constraints.
- **Tobi Lutke / Shopify River (May 2026):** 5,938 employees, 4,450 channels, agent merge rate climbed 36% to 77% over two months. Production-scale evidence at firm scale.
- **Yu et al. EntCollabBench (arXiv 2605.08761):** eleven role-specialised agents struggle with delegation, context transfer, and workflow closure under realistic enterprise constraints.

### Counter-evidence to engage

- **Azhar / Citadel data (Exponential View #573):** jobs in highly AI-exposed occupations rising, not falling. Software engineering postings +18% YoY. Three mechanisms named: complementarity, supervision overhead, demand expansion. Meaningful pushback on the simple substitution narrative.

---

## Layer 2 — Skills: 3D Skills (with the atrophy paradox)

### The claim (matches live site)

Three skills have emerged to make this work: *delegation*, *discernment*, *debugging*.

**Delegation**: knowing what to hand off, and how. Verifiable, well-scoped work; keep enough context to evaluate the result. The more you delegate, the less you learn what you're handing off; understanding that asymmetry is what makes delegation work.

**Discernment**: taste, judgment, and context become premium because Agents can produce so much. You can't evaluate what you don't understand. Domain expertise and context become increasingly valuable; without depth, Agents expose the gap in the output.

**Debugging**: root-cause analysis on failed output. Where was the instruction ambiguous? What context was missing? Which inputs were wrong? AI failures usually reveal problems in the horizontal work.

Debugging agent output is usually debugging your thinking, and increasingly your organisation's.

Effective debugging needs the context delegation erodes. Outsource your contextual knowledge and you can't root-cause. You'll know something's wrong; you won't know why.

Each 3D skill carries an erosion risk; together they compound. Junior professionals who delegate before they learn the context become brilliant at getting Agents to produce, but unable to tell when it's wrong. Is the solution *deliberate friction*? Rotate people through AI-heavy and AI-light work, preserve mentorship on tasks agents could handle, build "show your work" checkpoints that slow throughput but preserve learning.

### Empirical anchors (for feed triage)

- **Anthropic internal research:** engineers use AI in 60% of their work yet can fully delegate only 0-20% of tasks. The variable was task selection, not prompting skill. Accountability does not transfer to the agent.
- **Microsoft 2026 WTI four modes** (Delegation, Collaboration, Asking, Exploration): Frontier Professionals are distinguished by reading the task first; the mode follows. Manager-modelling produces 17/22/30-point lifts in AI value, critical thinking, and trust in agentic AI.
- **Bret Taylor (Sierra):** senior engineering executive on craft loss as identity-level, not technical. Proposes documentation as the new craft surface.
- **Tobi Lutke / Shopify River, Lehrwerkstatt frame:** public-channel deployment reasserts apprenticeship dynamics; juniors learn by watching the agent work alongside seniors. Organisational-architecture mitigation for individual-level atrophy.

### Counter-evidence to engage

- None yet. Actively looking for evidence that heavy delegation has not produced skill decay, or that the predicted mid-career hollowing reverses under specific practices.

---

## Layer 3 — Infrastructure: management as infrastructure

### The claim (matches live site)

What's unlocking the latest agent capabilities? Kanban boards. Explicit handoff protocols. Delegation with scope and boundaries. Root-cause analysis. Memory and learning loops. Specs and skill files as durable operating protocols.

None of this is new. Frontier firms are rediscovering and applying late-20th-century management practices that many organisations let atrophy.

Of course, lean and agile weren't invented to manage agents. They were invented to manage work across people and machines under uncertainty, where production was faster than coordination could keep up; the very conditions agent-infused work now operates in. Visible work-in-progress on a board. Root-cause analysis when something fails. Memory that survives the task that generated it. With an operational substrate, agent throughput compounds into capability that can connect across the horizontal work of an organisation.

The signature phrase: **the forgotten operating system**.

### Empirical anchors (for feed triage)

- **Mario Hayashi, *The Factory Must Grow Part III* (May 2026):** developer applies TPS principles (Jidoka, Poka yoke, Andon, Five Whys) by name to AI agent failures. Practitioner-level evidence of the rediscovery thesis.
- **David Rice, People Managing People (April 2026):** "AI is the reward for operational discipline, but it won't create it." Independent arrival at the same conclusion via a data-governance framing.
- **Tianxiao Li et al., Constraint Drift (arXiv 2605.10481):** safety-critical constraints degrade through delegation, communication, audit. Accountability infrastructure must be load-bearing, not decorative. Research-side underwriting of the claim.
- **Tobi Lutke principle:** "The speed of an organisation is set by the speed of its lowest-bandwidth communication channel and rhythm." Systems-level governor on organisational throughput.

### Counter-evidence to engage

- **Masters & Albrecht et al., *Orchestrating Human-AI Teams* (arXiv 2510.02557):** Assign-All baseline (no managerial intervention) outperformed Chain-of-Thought management 0.502 to 0.313 across twenty enterprise workflows, with 17× runtime advantage. *"Managerial interventions can sometimes be actively detrimental."* Sharpens rather than refutes Layer 3: naïve "more management" prescriptions can backfire; the right operational substrate depends on the work.
- **John deVadoss, CEAD (arXiv 2605.08258):** 10K-task benchmark. Design quality dominates governance: CEAD (capability-aligned design) 70.6% safe success vs control-heavy/design-poor configuration 50.8% (fourth of five). Pulls in same direction as Masters/Albrecht: governance should support good design, not substitute for it.
- **Panny et al., *Too Many Specialists* (arXiv 2605.08540):** specialist's dilemma — rigid role assertion generates bottlenecks and workload inequality in multi-agent systems. Failure mode is over-structured, not under-managed.

---

## The headline prediction

**Capital-C Capability is a system. It is not a tool deployment.**

Firms that solve for capital-C Capability (skills + agents + management competence + operational practices) compound durable advantages. Firms treating agent deployment as a tooling-and-talent exercise will plateau within 18 months.

Falsifiable claim: if a firm achieves durable agent advantage through pure tooling and talent without visible operational redesign, the framework is wrong. The site tracks the evidence either way.

Empirical shape-evidence for the prediction:
- Ramp compounding gap (top quartile doubling revenue, bottom flat)
- Microsoft WTI five-zone typology (Frontier 19%, Blocked agency 10%, Stalled 16%, Unclaimed capacity 5%, Emergent 50%)
- Shopify River (5,938 employees, 36→77% merge rate from people watching the agent work, not from model upgrades)
- Ahmed Wharton field study: only 3 of 20 game studios achieved team-wide AI workflow adoption; all 3 were AI-first from founding.

---

## Frameworks the rediscovery thesis incorporates

Load-bearing research references the framework builds on:

- **Manager Agent / POSG formalism** (Masters & Albrecht, DAI '25). Formal research-side grounding for multi-agent workflow management.
- **Moral Crumple Zone** (Madeleine Clare Elish, 2019). Names the failure mode the framework's Layer 3 prescription must design against: blame for systemic failure falls disproportionately on human operators rather than on designers and architects.
- **Kerr's Folly: Rewarding A While Hoping for B** (Steven Kerr, 1975/1995). Management-science foundation for incentive-misalignment claims. Sharper in the AI-redesign register because agents optimise rewarded metrics without the social inhibitions that moderate human gaming of incentive systems.
- **Owned Intelligence / Frontier Firm framework** (Microsoft 2026 WTI). Operating-model vocabulary for the Layer 3 endpoint: organisations in which work continuously produces insight and insight continuously reshapes how work gets done.
- **Three Horizons, H2+ versus H2-** (Jennifer Pahlka). Diagnostic for distinguishing transforming reform from sustaining reform. Most enterprise "AI transformation" is recognisably H2-.
- **Copy-Paste / Read-Write / AI-First maturity ladder** (Zimran Ahmed, Wharton 2026). Maturity-stage diagnostic for any organisation; only AI-first organisations from founding achieved team-wide adoption in his twenty-studio sample.

---

## Why named orgchart.md

The chart of an AI-augmented organisation is no longer boxes and lines. It is markdown text in version control; specs, runbooks, kanban states, memory stores. The medium of agentic coordination is markdown. The brand is the thesis.

---

## Open questions

- **Case studies still missing.** Need three or more concrete cases of operationally-disciplined firms outperforming tooling-and-talent firms on agent deployment. Shopify River is a strong single-firm anchor; need comparative cases.
- **Vocabulary still settling.** Whether "management as infrastructure" lands with readers who think they already understand "operating model" remains untested.
- **Prescription still general.** Concrete CLO-facing asks (diagnostic questions, maturity assessment, hiring profile) still developing.
- **The Counter-evidence to engage list under Layer 2 is empty.** This is a structural absence the framework needs to address; finding a case where heavy delegation has not produced skill decay is a priority for the feed.
