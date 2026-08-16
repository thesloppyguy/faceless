# Scene 02 — Downfall (Newspaper)

**Beat(s):** 2  ·  **VO window:** 3.35–7.15s  ·  **Duration:** 114 frames  ·  **Component:** `BrollDownfallBeginScene`

> "But the downfall of the American empire has already begun."

## Layers
- **Background:** `background.png` — locked shared paper texture (full-cover + soft-light wash).
- **Midground:** *The Nation* op-ed page — **built entirely in code** (no image assets): PlayfairDisplay masthead, real article headline/byline/columns (Julia Gledhill, Apr 8 2026). An **amber highlighter sweeps** the phrase *Empire Collapse*.
- **Foreground:** — (typographic; the newspaper card springs in over the background).

## Assets in this folder
- `background.png`
- `DownfallNewspaperScene.tsx` — reference Remotion component (detailed spec for layout + animation)

## Animation
Newspaper card `spring()` rises in with a slight tilt + slow push-in; highlighter `scaleX` sweep ~42–70f.

## Key tuned props
mastheadText 'The Nation', highlightPhrase 'Empire Collapse', highlightColor #F5C518.

---
See `../../SPEC.md` for the shared visual system, the red-marker-stroke technique, VO timing, and assembly.
