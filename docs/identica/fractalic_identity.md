
# Fractalic Studio — Brand Identity System

Version: 0.9 (working spec)  
Language: English  
Scope: Visual and verbal identity for Fractalic Studio as an AI-focused strategic advisory.

---

## 1. Brand Fundamentals

### 1.1. Brand role

Fractalic Studio exists to help founders and leadership teams bring AI under control — structurally, politically, and operationally.

The brand should signal:

- **Authority** — clear ownership, decisions, responsibility.
- **Structure** — systems thinking, recursion, legibility.
- **Practicality** — no hype, no abstraction for its own sake.
- **Calm** — a clear head in an overheated AI environment.

No part of the identity should compete with this role. Design is in service of clarity, not spectacle.

---

### 1.2. Core idea: Fractalic

A fractal is a pattern repeated at different scales. In the Fractalic Studio brand this means:

- The same logic holds at every level of communication:
  - tagline, landing page, deck, email, diagram.
- Big-picture statements and micro-level details must align:
  - the way we frame AI at board level = the way we design a single workflow.

The identity must feel **self-similar**:
- same structural principles,
- same tone,
- same discipline,
across touchpoints.

---

### 1.3. Brand attributes (visual + verbal)

**Primary attributes**

- Structural
- Intentional
- Precise
- Sober

**Secondary attributes**

- Composed
- Analytical
- Human, but not sentimental

**Negative space (what we avoid)**

- Futurism clichés (neon, circuit boards, robots, brains).
- Marketing fluff (“reimagine”, “unlock potential”, “supercharge”).
- Playful/quirky elements that undermine authority.
- Messy UI, random icons, trendy noise.

---

## 2. Logo System

### 2.1. Core mark

**Concept**

- A solid square representing the frame of power and ownership.
- One corner subdivided into a 2×2 grid, representing fractal detail, recursion and analysis.

This expresses:
- stability and control (solid area),
- targeted decomposition where it matters (subdivided area).

**Geometry (spec)**

- Outer shape: perfect square.
- Subdivided corner: 0.5 × 0.5 of the square, split into four 0.25 × 0.25 squares.
- Recommended stroke width (outline version): 1/24 of side length.
- The subdivided corner should be clearly legible at favicon size.

**Variants**

1. **Primary (Filled Base, Negative Corner)**
   - Big square: filled.
   - Subdivided corner: negative space (background shows through).
2. **Inverse (Outlined Base, Filled Corner)**
   - Outer square: outline only.
   - Subdivided corner: filled accent (e.g. #059669).

Both are permissible; pick one as the official primary after visual tests.

---

### 2.2. Wordmark

Text: `Fractalic Studio`

**Typography**

- Typeface: modern, neutral grotesk (e.g. Inter / SF Pro / similar).
- “Fractalic”: SemiBold.
- “Studio”: Regular or Medium.

**Capitalization**

- Primary: Title Case – `Fractalic Studio`.
- Secondary (for small contexts, footers, favicons): `FRACTALIC` or `FS`.

**Letterspacing**

- Slightly tightened tracking for “Fractalic”.
- Normal tracking for “Studio”.
- No custom ligatures or experimental shapes.

---

### 2.3. Lockups

**Horizontal primary lockup**

- [Icon] + fixed gap + `Fractalic Studio` on one baseline.
- Icon height ≈ x1.1–1.2 of capital height in “Fractalic”.

**Vertical lockup**

- Icon centered on top.
- `Fractalic` on next line.
- `Studio` smaller beneath or right-aligned under `Fractalic`.

Use rules:
- Default online: horizontal lockup (navbar, hero).
- Square spaces / avatars: icon only or vertical lockup.

---

### 2.4. Clear space and minimum size

**Clear space**

- Minimum clear space around logo = 0.5× icon size on all sides.
- No text, lines, or graphics intruding into this zone.

**Minimum sizes**

- Screen:
  - Horizontal lockup: min width ~ 160 px.
  - Icon alone: min 24×24 px.
- Print:
  - Horizontal lockup: min width ~ 35 mm.
  - Icon alone: min 8 mm.

If the subdivided corner becomes illegible at very small sizes, switch to a simplified icon (full square, no subdivisions) for favicons and app icons.

---

### 2.5. Logo misuse (do not)

- Do not alter proportions between icon and wordmark.
- Do not rotate the icon.
- Do not change colors outside the defined palette.
- Do not apply gradients, glows, shadows, or 3D effects.
- Do not place the logo on noisy, high-contrast backgrounds.
- Do not add taglines or additional text inside the clear-space area.

---

## 3. Color System

### 3.1. Core palette

**Working anchor accent (candidate):**

- **Fractalic Green**  
  HEX: `#059669`  
  Use: accent, icon detail, primary buttons.

This green signals:
- decisiveness,
- health of systems,
- financial rationality (but not “finance blue”).

**Neutrals**

- **Ink** – main text / logo  
  HEX: `#0B1120` (or similar very dark blue-black)
- **Graphite** – secondary text, UI lines  
  HEX: `#4B5563`
- **Fog** – borders, dividers  
  HEX: `#E5E7EB`
- **Paper** – background  
  HEX: `#F9FAFB` or `#F3F4F6`

**Support accents (minimal)**

Use only if necessary for highlighting warnings / errors:

- **Warning**: `#B45309` (muted amber)  
- **Error**: `#B91C1C` (muted red)

Keep these strictly functional, not decorative.

---

### 3.2. Color usage ratios

On a typical page:

- Background neutrals: 70–80%.
- Text (Ink / Graphite): 15–20%.
- Fractalic Green accent: 5–10%.

Fractalic Green should:

- Primarily appear in:
  - buttons,
  - key links,
  - icon corner,
  - important diagram nodes.
- Not be used as:
  - bulk background,
  - large text blocks,
  - gradients.

---

### 3.3. Accessibility

- All primary text on Paper background should meet WCAG AA contrast standards.
- Primary button:
  - Fractalic Green background, white text (check contrast).
  - On hover: slightly darker variant (e.g. `#047857`).
- Ensure focus states are clearly visible, possibly using a darker outline or drop in brightness of surrounding elements.

---

## 4. Typography System

### 4.1. Typefaces

**Primary typeface**

- Inter (or similar system-friendly grotesk).
- Weights:
  - Regular (400)
  - Medium (500)
  - SemiBold (600)
  - Bold (700)

**Fallback stack (CSS example)**

```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", sans-serif;
```

---

### 4.2. Hierarchy

Suggested base:

- H1: 40–54 px, SemiBold
- H2: 28–36 px, SemiBold
- H3: 22–26 px, Medium
- Body: 16–18 px, Regular
- Small / meta: 12–14 px, Regular

Line height:

- Headings: 1.15–1.2
- Body: 1.5–1.7

---

### 4.3. Usage

- Titles and navigation: SemiBold / Bold.
- Body text: Regular; avoid overusing Medium/SemiBold.
- Emphasis in running text: use italics or single bold words, not color.

Avoid:

- More than 3 weights on one screen.
- Multiple typefaces; keep one family.

---

## 5. Layout & Grid

### 5.1. Grid system

**Web**

- 12-column grid for desktop.
- Max content width: 1080–1200 px.
- Side margins: 24–32 px on mobile, 40–80 px on desktop.

**Spacing scale (8-pt system)**

- Base unit: 8 px.
- Common steps: 8 / 12 / 16 / 24 / 32 / 48 / 64 px.

Use consistent vertical rhythm:
- Section spacing (top/bottom): 64–96 px desktop, 40–56 px mobile.

---

### 5.2. Composition patterns

**Hero**

- Left: primary text block (headline, subheadline, CTA).
- Right: diagram / abstract graphic referencing structure or a sample deliverable.

**Content sections**

- Use 2-column layout:
  - left: text,
  - right: visual or supporting bullets.
- Alternate text/visual sides down the page to maintain flow.

**Cards**

- Services, steps, and principles shown in simple cards:
  - subtle border (`Fog`),
  - rounded corners small (4–8 px),
  - minimal shadow, if any (soft and shallow).

---

## 6. Iconography & Graphics

### 6.1. Icon style

- Line-based or simple geometric.
- Stroke width consistent with logo stroke and UI lines.
- Prefer minimalistic icons:
  - process,
  - decision,
  - document,
  - owner,
  - metrics.

No:

- robot heads,
- brains with circuits,
- “magic wand” AI icons.

---

### 6.2. Diagrams

Diagrams are key assets and should:

- Be simple:
  - 2–4 main blocks,
  - arrows,
  - short labels.
- Use:
  - Ink for main text,
  - Graphite for secondary elements,
  - Fractalic Green to highlight key node or flow.

Examples of recurring diagram themes:

- “From noise to system”:
  - left: cloud of items,
  - right: 3–4 aligned blocks with clear labels.
- “Authority and flow”:
  - top: leadership node (owner),
  - middle: processes,
  - bottom: outcomes / metrics.

---

### 6.3. Imagery

If you use photos:

- Black-and-white or slightly desaturated.
- Real-world work environments (screens, documents, whiteboards).
- Avoid staged corporate stock imagery.

Optional: no photography at all; rely on diagrams and abstract geometric patterns.

---

## 7. Motion & Interaction

### 7.1. Motion principles

- Purposeful: every animation explains or supports orientation.
- Slow and subtle: 150–300 ms transitions.
- No infinite looping effects that steal attention from content.

Examples:

- Hover: light lift or outline change on cards.
- Anchor scroll: smooth but not exaggerated (200–400 ms).
- Diagram: simple step animation from “chaos” to “structure” on scroll.

Avoid:

- Parallax overload.
- Full-screen “AI particle” backgrounds.
- Overlapping animated elements.

---

## 8. Verbal Identity (Tone & Copy)

### 8.1. Tone

- Direct.
- Analytical.
- Calm.
- Concrete.

We speak to people who make decisions and own P&L.

---

### 8.2. Language principles

- Prefer short sentences.
- Use specific verbs: decide, map, design, measure, govern, de-risk.
- Avoid:
  - “transform”, “redefine”, “unlock”, “reimagine”,
  - “cutting-edge”, “revolutionary”, “next-gen”.

Example microcopy:

- “We map your processes and show where AI can move the numbers.”
- “If we can’t see a measurable effect, we recommend not doing it.”

---

### 8.3. Key messaging pillars

1. **Authority & ownership**
   - “AI should live under clear ownership, not as orphaned experiments.”
2. **Process & structure**
   - “We design workflows, not demos.”
3. **Measurement & realism**
   - “We tie initiatives to metrics you already care about.”
4. **Exit**
   - “We design systems you can run without us.”

---

## 9. Applications

### 9.1. Website

- Use full identity system as described.
- Strong hero, then clean sections.
- Design tokens aligned with this document.

### 9.2. Presentations (Decks)

- Background: Paper.
- Titles: Ink, H1/H2 styles.
- Highlight key phrases in Fractalic Green or via simple underline.
- Diagrams following established graphic style.

Never:

- mix random colors per slide,
- use “fun” fonts,
- add stock images that conflict with the brand.

---

### 9.3. Documents (PDF / Notion / Docs)

- Logo in corner or header; small.
- Headings consistent with web typography.
- Use color sparingly: primarily for headings, links, and key callouts.

---

### 9.4. Social & Avatars

- LinkedIn / X profile:
  - Icon only (square with corner subdivision).
- Banners:
  - simple; one short line (tagline) and logo on a clean background.

No noisy collage-style banners.

---

## 10. Design Tokens (dev-facing)

Example (can be adapted to code):

```json
{
  "colors": {
    "bg": "#F9FAFB",
    "bg-alt": "#F3F4F6",
    "ink": "#0B1120",
    "graphite": "#4B5563",
    "fog": "#E5E7EB",
    "accent": "#059669",
    "accent-hover": "#047857",
    "warn": "#B45309",
    "error": "#B91C1C"
  },
  "font": {
    "family": "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
    "size-base": "16px",
    "line-height-base": 1.6
  },
  "radius": {
    "none": "0px",
    "sm": "4px",
    "md": "8px"
  },
  "shadow": {
    "card": "0 8px 20px rgba(15, 23, 42, 0.06)"
  },
  "spacing": {
    "xs": "8px",
    "sm": "12px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "xxl": "48px"
  }
}
```

---

## 11. Governance of the Identity

- One owner (you or a delegated designer) approves any non-trivial change to:
  - logo usage,
  - color additions,
  - typography changes.
- Any new visual element must answer:
  - Does it increase clarity?
  - Does it align with the structural, sober, precise feel?
  - Does it avoid hype and visual noise?

If not, it should not enter the system.

Fractalic Studio’s identity is a practical tool: a frame that keeps communication coherent and under control while the business and AI landscape evolve.
