---
name: film-look
description: Build a reusable aged-film look wrapper for Remotion scenes (scan lines, grain/grunge textures, vignette, colour grade, gate-weave) with per-layer toggles and per-scene grade props. Use when the user asks for film look, film treatment, look and feel, vintage grade, grain, vignette, gate-weave, or to wrap scenes in a film overlay; also when implementing a beat-sheet continuity look.
---

# Film look

Build (or adapt) a **reusable wrapper** around scene content so the picture reads like aged film. The look **can be custom for each script** — start from the default treatment below, then change textures, grade, or which layers are on to match that reel’s beat-sheet continuity look.

Put the component in the reel’s Remotion tree as `src/FilmLook.tsx`. Wrap every scene’s root (and Main if the whole timeline should share the look). Do not duplicate overlay CSS inside individual scenes.

Textures: `staticFile` from that reel’s assets folder (`grain.jpg`, `grunge.jpg`). If paths differ, ask or glob `**/grain.jpg` and `**/grunge.jpg`.

Motion: gate-weave uses **`usePosterizeFrame()` / `posterizeFrame` from `engine.ts`** (12fps steps on a 30fps timeline). Do not animate overlays with CSS `transition` / `animation`.

## Default treatment (verbatim spec)

Build the film-treatment look — a reusable wrapper I can wrap any scene in so it reads like aged film. The textures are in my assets folder (grain.jpg, grunge.jpg). Layer these top to bottom with exactly these settings:

Scan lines: vertical lines — a 1.6px black line at 16% opacity repeating every 8px, blurred by 0.7px.

Texture sandwich: grain.jpg on multiply, inverted with brightness 1.35 and contrast 1.02, at 55% opacity; then grunge.jpg on colour-burn at 16% opacity.

Vignette: a radial gradient — ellipse 92% by 82% centred at 50% / 48%, clear until 55%, fading to black at 50% opacity by the edge.

Grade: a colour filter of saturate 0.86, contrast 1.08, sepia 0.16, brightness 0.95 — expose those four as props so I can tweak per scene.

Gate-weave: jitter the whole frame with a stepped wiggle at 12fps, about 5px of travel, and scale everything up 1.012 so the weave never reveals an edge.

Everything rides the engine's 12fps posterize step. Put a toggle on each layer so I can switch parts off.

## Layer stack (top → bottom)

Paint **later DOM siblings on top**. Outer wrapper is gate-weave + scale; then scene children (graded); then overlays from bottom to top:

| Order (top = closest to camera) | Layer | Default on |
|---|---|---|
| 1 | Scan lines | yes |
| 2 | Grain (`multiply`, inverted) | yes |
| 3 | Grunge (`color-burn`) | yes |
| 4 | Vignette | yes |
| 5 | Grade (CSS `filter` on the picture) | yes |
| 6 | Gate-weave + scale `1.012` | yes |

Toggles (boolean props, default `true`): `scanLines`, `grain`, `grunge`, `vignette`, `grade`, `gateWeave`.

Grade props (numbers, defaults as spec): `saturate`, `contrast`, `sepia`, `brightness`.

## Implementation

```tsx
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {usePosterizeFrame} from './engine';

export type FilmLookGrade = {
  saturate?: number;
  contrast?: number;
  sepia?: number;
  brightness?: number;
};

export type FilmLookProps = {
  children: React.ReactNode;
  scanLines?: boolean;
  grain?: boolean;
  grunge?: boolean;
  vignette?: boolean;
  grade?: boolean;
  gateWeave?: boolean;
} & FilmLookGrade;

const GRAIN = staticFile('grain.jpg');
const GRUNGE = staticFile('grunge.jpg');

export const FilmLook: React.FC<FilmLookProps> = ({
  children,
  scanLines = true,
  grain = true,
  grunge = true,
  vignette = true,
  grade = true,
  gateWeave = true,
  saturate = 0.86,
  contrast = 1.08,
  sepia = 0.16,
  brightness = 0.95,
}) => {
  const p = usePosterizeFrame();
  const t = p * 0.37;
  const weaveX = gateWeave ? Math.sin(t * 1.7) * 5 : 0;
  const weaveY = gateWeave ? Math.cos(t * 1.3) * 5 : 0;
  const scale = gateWeave ? 1.012 : 1;

  return (
    <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#000'}}>
      <AbsoluteFill
        style={{
          scale,
          translate: `${weaveX}px ${weaveY}px`,
        }}
      >
        <AbsoluteFill
          style={{
            filter: grade
              ? `saturate(${saturate}) contrast(${contrast}) sepia(${sepia}) brightness(${brightness})`
              : undefined,
          }}
        >
          {children}
        </AbsoluteFill>
        {vignette ? (
          <AbsoluteFill
            style={{
              pointerEvents: 'none',
              background:
                'radial-gradient(ellipse 92% 82% at 50% 48%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        ) : null}
        {grunge ? (
          <AbsoluteFill style={{pointerEvents: 'none', mixBlendMode: 'color-burn', opacity: 0.16}}>
            <Img src={GRUNGE} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </AbsoluteFill>
        ) : null}
        {grain ? (
          <AbsoluteFill style={{pointerEvents: 'none', mixBlendMode: 'multiply', opacity: 0.55}}>
            <Img
              src={GRAIN}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'invert(1) brightness(1.35) contrast(1.02)',
              }}
            />
          </AbsoluteFill>
        ) : null}
        {scanLines ? (
          <AbsoluteFill
            style={{
              pointerEvents: 'none',
              backgroundImage:
                'repeating-linear-gradient(to right, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 1.6px, transparent 1.6px, transparent 8px)',
              filter: 'blur(0.7px)',
            }}
          />
        ) : null}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
```

Place `grain.jpg` and `grunge.jpg` in Remotion `public/` (or adjust `staticFile` to the actual public-relative path).

## Usage

```tsx
<FilmLook>
  {/* scene layers */}
</FilmLook>

<FilmLook saturate={0.8} sepia={0.22} scanLines={false}>
  {/* colder / dirtier beat */}
</FilmLook>
```

## Per-script look

1. Read that reel’s `beat-sheet.md` continuity / look notes if they exist.
2. Keep the same **wrapper + toggles + grade props** API.
3. Change only what the script needs (texture files, default grade, which layers start off).
4. Do not invent extra overlays (light leaks, scratches, chromatic aberration) unless the user or beat sheet asks.

## Checklist

- [ ] `FilmLook` wraps scene content; overlays are `pointerEvents: 'none'`
- [ ] Stack order matches the spec (scan lines on top)
- [ ] Grade values are props with the listed defaults
- [ ] Each layer has a boolean toggle
- [ ] Gate-weave uses posterized time, ~5px, scale `1.012`, overflow hidden
- [ ] Textures load via `staticFile`
- [ ] Studio transform shorthands (`scale`, `translate`) not a `transform` string
