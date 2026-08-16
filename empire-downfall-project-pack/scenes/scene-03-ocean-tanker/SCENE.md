# Scene 03 — Ocean / Oil ($116)

**Beat(s):** 3, 4  ·  **VO window:** 7.15–19.30s  ·  **Duration:** 364 frames  ·  **Component:** `BrollOceanTankerScene`

> "…held the Strait of Hormuz hostage. Oil prices skyrocketed to $116 a barrel."

## Layers
- **Background:** `background.png` — locked shared paper texture (full-cover + soft-light wash).
- **Midground:** Tanker-ship cut-out sailing in over a **keyed ocean** video (`keyed-ocean.webm`, alpha) rendered with `<OffthreadVideo transparent>`.
- **Foreground:** Oil-price counter that counts up to **$116** + an oil-barrel icon, rising on a foreground occlusion band. Timed so $116 lands on the spoken word.

## Assets in this folder
- `background.png`
- `tanker-ship.png`
- `keyed-ocean.webm`
- `oil-barrel.png`
- `OceanTankerScene.tsx` — reference Remotion component (detailed spec for layout + animation)

## Animation
Ship travels X with a bob/drift; ocean loops; counter rises + counts (counterStartFrame 195, dur 55 → $116); outro slide-out 336–364f.

## Key tuned props
counterEndValue 116, counterStartFrame 195; showBarrel true, barrelHeight 140; shipWidth 1420.

---
See `../../SPEC.md` for the shared visual system, the red-marker-stroke technique, VO timing, and assembly.
