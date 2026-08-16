# Scene 06 — Leaving the Dollar

**Beat(s):** 9  ·  **VO window:** 35.30–40.25s  ·  **Duration:** 148 frames  ·  **Component:** `BrollDollarDeclineScene`

> "And the world is quietly leaving the dollar behind."

## Layers
- **Background:** `background.png` — locked shared paper texture (full-cover + soft-light wash).
- **Midground:** B&W **Xi + Putin handshake** cut-out (red marker stroke), rising; with **comic speech bubbles** (Bangers font over keyed doodle PNGs): Xi says "Let's trade in Yuan ¥", Putin replies "Ok, deal!".
- **Foreground:** Tiananmen gate cut-out spanning the foreground base.

## Assets in this folder
- `background.png`
- `putin-xi.png`
- `china-building.png`
- `bubble-round.png`
- `bubble-rect.png`
- `DollarYuanScene.tsx` — reference Remotion component (detailed spec for layout + animation)

## Animation
Building rises 2–30f; people rise 16f+; Xi bubble pops ~56f, Putin bubble ~88f (each a spring pop + float).

## Key tuned props
peopleWidth 1378, buildingWidth 1871, buildingBottom -212; xiBubbleTilt/putinBubbleTilt -17; bubble assets round (Xi) / rect (Putin).

---
See `../../SPEC.md` for the shared visual system, the red-marker-stroke technique, VO timing, and assembly.
