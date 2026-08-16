# Scene 01 — Peace Deal

**Beat(s):** 1  ·  **VO window:** 0.00–3.35s  ·  **Duration:** 100 frames  ·  **Component:** `BrollPeaceDealScene`

> "The U.S. and Iran are signing a peace deal."

## Layers
- **Background:** `background.png` — locked shared paper texture (full-cover + soft-light wash).
- **Midground:** Trump (left) + Khamenei (right) halftone cut-out portraits, each with an offset **red marker stroke** (`#E04329`), rising in staggered.
- **Foreground:** White House facade cut-out, settles in front and occludes the portraits' lower bodies.

## Assets in this folder
- `background.png`
- `trump-halftone.png`
- `iran-halftone.png`
- `white-house-foreground.png`
- `PeaceDealScene.tsx` — reference Remotion component (detailed spec for layout + animation)

## Animation
`spring()` rise for each element. White House 6–30f, Trump 28–54f, Khamenei 52–84f (compressed to fit the 100f window).

## Key tuned props
whiteHouseScale 2, whiteHouseY -469; trumpX -430 / khameneiX 430; portraitStrokeColor #E04329, strokeX ±28 / strokeY 10.

---
See `../../SPEC.md` for the shared visual system, the red-marker-stroke technique, VO timing, and assembly.
