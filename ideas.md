# Website Cleanup Dashboard — Design Ideas

## Response 1
<response>
<text>
**Design Movement:** Neo-Brutalism meets Command Center

**Core Principles:**
- Raw, unpolished grid structure with bold borders and stark contrast
- Data density as a design feature — every pixel earns its place
- Monochrome base with electric accent pops for status signals
- Typography as structure — headings are architectural elements

**Color Philosophy:**
Near-black (#0f0f0f) background with off-white text. Status colors are vivid and unambiguous: electric green (#00ff88) for Keep, amber (#ffb800) for Combine, crimson (#ff3b3b) for Delete. These are not soft pastels — they are signals.

**Layout Paradigm:**
Left sidebar with project group navigation. Main area is a dense data table with sticky header. No cards — rows with thick left-border color coding. Stats bar pinned at top.

**Signature Elements:**
- Thick 3px left-border on each row indicating recommendation
- Monospace font for URLs
- Bold uppercase section labels

**Interaction Philosophy:**
Instant, no-frills filtering. Click a group in the sidebar, the table updates. Search is always visible.

**Animation:**
Minimal — only row highlight on hover (background shift). No page transitions.

**Typography System:**
- Display: Space Grotesk Bold for headers
- Body: IBM Plex Mono for URLs, Inter for descriptions
</text>
<probability>0.07</probability>
</response>

## Response 2
<response>
<text>
**Design Movement:** Warm Editorial Dashboard

**Core Principles:**
- Warm cream/sand tones with deep espresso text — feels like a printed report
- Generous whitespace with clear typographic hierarchy
- Status badges are pill-shaped with muted but distinct colors
- Sidebar navigation with project group icons

**Color Philosophy:**
Background: warm cream (#faf7f2). Text: deep brown (#2c1810). Keep = sage green (#4a7c59), Delete = dusty rose (#c0504d), Combine = warm amber (#d4860a). The palette feels considered and editorial, not clinical.

**Layout Paradigm:**
Fixed left sidebar (240px) with collapsible project groups. Main area uses a card-per-group layout with a compact table inside each card. Stats summary at top in a horizontal band.

**Signature Elements:**
- Pill badges for recommendations with soft fill colors
- Thin horizontal rules between groups
- Project group icons in sidebar

**Interaction Philosophy:**
Smooth accordion-style group expansion. Search filters in real time. Recommendation filter buttons at top of table.

**Animation:**
Gentle fade-in for filtered results. Sidebar items have a subtle left-slide on hover.

**Typography System:**
- Display: Playfair Display for section titles
- Body: Source Sans Pro for table content
</text>
<probability>0.06</probability>
</response>

## Response 3
<response>
<text>
**Design Movement:** Precision Ops Dashboard — Dark Mode Intelligence

**Core Principles:**
- Dark slate background with crisp white type — feels like a mission control center
- Color is reserved exclusively for meaning: green/red/amber for recommendations
- Sidebar with project group filters and live stat counters
- Dense but breathable — rows have enough padding to scan quickly

**Color Philosophy:**
Background: deep slate (#0d1117). Surface cards: (#161b22). Text: (#e6edf3). Keep = emerald (#3fb950), Delete = red (#f85149), Combine = amber (#d29922). This is GitHub's dark palette — trusted, readable, professional.

**Layout Paradigm:**
Persistent left sidebar with project group list and counts. Top bar with search + filter chips. Main area is a virtualized table with sticky column headers. Stats donut chart in sidebar.

**Signature Elements:**
- Colored dot + text recommendation badges
- Monospace font for URLs with copy-on-click
- Live count badges next to each group in sidebar

**Interaction Philosophy:**
Keyboard-navigable. Click any row to expand details. Filter chips stack horizontally and can be combined.

**Animation:**
Table rows fade in on filter change. Sidebar counts animate on load. Hover states use a subtle blue glow.

**Typography System:**
- Display: Inter 700 for headings
- Body: Inter 400 for content, JetBrains Mono for URLs
</text>
<probability>0.09</probability>
</response>

---

## Chosen Design: Response 3 — Precision Ops Dashboard (Dark Mode Intelligence)

This design is chosen for its clarity, professional feel, and strong visual hierarchy. The dark slate palette with semantic color coding makes it immediately clear which sites to keep, combine, or delete at a glance. The sidebar with live counts and the dense-but-breathable table layout are ideal for navigating 106 entries efficiently.
