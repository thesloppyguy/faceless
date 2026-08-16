---
name: build-scene
description: Implement a Remotion scene from written camera/layer directions (assets, compose, zoom-through, weld/detach, motion blur, captions, character boil). Use when the user says Build Scene, implement a scene, code a shot from directions, or paste scene timings at 30fps.
---

# Build Scene

Turn the user’s **scene directions** into one Remotion scene file. Do not invent a different shot. Follow numbers, asset names, and copy **verbatim**.

If Remotion is not set up in the reel folder, follow the `remotion-reel-setup` skill first. Wrap the scene in `FilmLook` (`film-look` skill). Load Remotion markup best practices when writing JSX.

## When this applies

- User says **Build Scene N** (or “the opener”, a named beat)
- User pastes layer/camera directions with frame timings
- User points at assets and asks to compose a shot in code

## Workflow

1. Read the directions. Copy asset filenames, plaque/caption strings, and frame numbers exactly.
2. Glob the reel’s `assets/` / `public/` for those files. Copy or `staticFile` them so Remotion can load them. Do not substitute a different image.
3. Create `src/scenes/SceneNNName.tsx` (one file, one default export). Register a `<Composition>` in `Scenes` and append a `<Sequence>` on `Main` (`remotion-reel-setup` layout).
4. Implement layers, then camera, then blur/fades, then captions. Wrap root in `<FilmLook>`.
5. Preview in Studio. Do not render unless asked.

## Timeline vs posterize

Composition is **30fps**. Direction frame numbers are **real** `useCurrentFrame()` values unless the user says otherwise.

| Motion | Time source |
|---|---|
| Camera push, zoom-through, weld/detach, blur ramps, fades, caption in/out | `useCurrentFrame()` — hit the given frames |
| Character boil, sway, looping ambient (clouds if they should stutter) | `usePosterizeFrame()` / `posterizeFrame` (12fps step) |

Do not CSS-`transition` anything. Use `interpolate` / `Easing`. Studio shorthands: `scale`, `translate`, `rotate` — not a `transform` string.

## Parse the directions

Map the user’s language to this stack:

| Phrase | Meaning |
|---|---|
| **Compose** / hanging on the wall | Still layout: background plate, framed unit, plaque |
| **Slow push** | Ease wall (or whole set) scale over a range |
| **Zoom-through** / fly through the frame | Accelerate scale so the camera enters the picture |
| **Weld** | Two or more layers share **one** parent scale until a frame. Child scale is a **constant × parent scale** (or a locked ratio). They must not ease apart before detach |
| **Detach** | After that frame, layers get **separate** interpolations (frame flies out; photo settles) |
| **Cross-fade B&W → colour** | Drive `grayscale` (or dual stacked imgs) on the photo only |
| **Motion blur** / full-frame blur burst | `filter: blur()` on a wrapper; keyframes 0 → peak → 0 |
| **Wall exit** | Blur + fade the wall (and plaque) while zoom continues |
| **Parallax** / 0.6× speed | Same path, multiply distance |
| **Character boil** | Tiny scale sine + rotate sine on posterized time |
| **Then reveal captions** | After settle (post-detach / photo at 1.0), serif-italic lines in sequence |
| **Film-look** / 12fps posterize | `<FilmLook>` + boil/ambient on 12fps step |

Weld rule: until the detach frame, **one** `interpolate` for the parent; inner content scale = `ratio * parentScale`. Never two independent eases on photo vs gold frame before detach.

## Layout (vertical 1080×1920)

- Wall fills the frame; framed photo is a unit on the wall; plaque sits **under** the frame.
- Inside the frame: building plate, drifting clouds **behind** the building, character cut-out in front of the building.
- After zoom-through, the photo (now full-bleed colour) is the world; wall/plaque/gold frame leave.

Safe area: captions ≥80px from sides, ≥100px from top/bottom.

## Captions

Serif italic, on after the photo has settled. Sequence lines as written (e.g. first line, then second). Do not rewrite copy.

## Engine

Import motion helpers from `src/engine.ts` (`usePosterizeFrame`, `boilWobble` only if it matches the spec). Scene-specific camera math stays in the scene file.

## Checklist

- [ ] Asset filenames match the directions
- [ ] Frame ranges match (push / zoom / weld / detach / blur / wall exit)
- [ ] Weld uses a locked ratio until detach
- [ ] Boil/sway uses posterized time; camera uses real frames
- [ ] Captions are verbatim, after settle
- [ ] `<FilmLook>` wraps the scene
- [ ] Composition + Main sequence registered
- [ ] No CSS transitions

## Reference directions (Scene 1 opener)

Treat the following as the **canonical example** of how the user writes a scene. Implement it when they ask for Scene 1 / the opener. For other scenes, follow the same grammar.

Build Scene 1, the opener. In the assets folder: hq-building.png (a photo of the Netflix HQ), reed-portrait.png (a young Reed cut-out), gold-frame.png (an ornate gold frame), wall.jpg (a paper museum wall). Compose a black-and-white framed photo — Reed in front of the Netflix building, inside the gold frame — hanging on the wall, with a small serif plaque reading "In 2000" beneath it. Then do a zoom that flies THROUGH the frame, with these timings (30fps):

Slow push: ease the wall from scale 1.0 to 1.16 over frames 0–46.

Zoom-through: from frame 46, accelerate the wall scale up to about 6.8x by frame 76 so the camera flies into the frame.

Weld: until frame 62, lock the photo + gold frame together as one unit — content scale = 0.369 × the wall scale. They must never ease apart before the detach.

Detach: after frame 62, keep accelerating the gold frame out past the edges while the photo settles from 0.75 to 1.0 scale by frame 72, and cross-fade it from black-and-white to full colour.

Motion blur: a full-frame blur burst ramping 0 → ~9px → 0 across frames 54 / 61 / 72, peaking at the fastest point.

Wall exit: blur the wall and plaque 0 → 8px over frames 52–72 and fade them out as the zoom takes over.

Drifting clouds: behind the building put cloud1.png and cloud2.png sliding slowly left — cloud1 travels from 0 to about −525px across the whole scene, cloud2 at roughly 0.6× that speed so they parallax.

Character boil: keep the reed-portrait subtly alive — breathe its scale by ±0.5% on a slow sine, and sway it ±0.5° back and forth over ~140 frames, both snapped to the 12fps step so it stutters like stop-motion rather than gliding.

Then reveal serif-italic captions over the settled building — "a small startup" then "called Netflix". Wrap the whole scene in the film-look treatment and run it on 12fps posterize step.
