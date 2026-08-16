# Scene 04 — Inflation / Debt ($39T)

**Beat(s):** 5, 6, 7  ·  **VO window:** 19.30–31.20s  ·  **Duration:** 357 frames  ·  **Component:** `BrollInflationDebtScene`

> "…inflation to a three-year high. A nation owing nearly $39 trillion — a debt now bigger than its entire economy."

## Layers
- **Background:** `background.png` — locked shared paper texture (full-cover + soft-light wash).
- **Midground:** Self-drawing **CPI line chart** (code/SVG) that draws via stroke interpolation, then an isometric **US map** pops in.
- **Foreground:** "$39 TRILLION" headline pops to the front; chart slides out as the map+debt take center.

## Assets in this folder
- `background.png`
- `us-map.png`
- `InflationDebtScene.tsx` — reference Remotion component (detailed spec for layout + animation)

## Animation
graph draws 30–150f; graph moves left 150–185f; map pops 165–210f; debt text 190–240f; closer 270–300f then holds to 357f.

## Key tuned props
debtAmountText '$39 TRILLION', blueLineColor #E8741E, orangeAccentColor #E85D24.

---
See `../../SPEC.md` for the shared visual system, the red-marker-stroke technique, VO timing, and assembly.
