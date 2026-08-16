---
name: remotion-reel-setup
description: Scaffold a Remotion project for a vertical documentary reel (1080×1920, 30fps) with one composition and one file per scene, plus a shared engine of posterize-time, boil wobble, slow drift, pingpong, and spring-entrance helpers so finished scenes can drop onto one main timeline. Use when the user asks to set up Remotion, a vertical reel, scene-per-file compositions, a shared motion engine, posterize/stop-motion helpers, or to start building a faceless/VOX documentary video in code.
---

# Remotion documentary reel setup

Scaffold (or extend) a Remotion project for a **vertical documentary reel**: **1080×1920**, **30fps**. One **file** and one **composition** per scene so each scene can be built and previewed alone. Every scene imports a shared **engine** for stop-motion motion. Finished scenes drop onto one **main timeline** later.

Follow [Remotion create](https://www.remotion.dev/docs/cli/create) for scaffolding. After setup, follow Remotion markup and multi-scene guidance from the Remotion skills.

## Defaults (do not change unless the user overrides)

| Setting | Value |
|---|---|
| Width × height | `1080` × `1920` |
| FPS | `30` |
| Posterize rate | `12` fps (snap motion to 12fps steps on a 30fps timeline) |
| Tailwind | Off unless asked |
| Format | One narrator documentary reel, not landscape YouTube |

Safe area for 1080-wide: keep key text ≥80px from sides, ≥100px from top/bottom.

## Scaffold

If no Remotion project exists in the target folder:

```bash
npx create-video@latest --yes --blank --no-tailwind <project-name>
cd <project-name>
npm i
```

Use the existing project folder name when the reel already has `script.md` / `beat-sheet.md` (e.g. `why-wine-looked-safer-than-beer-here`). Put Remotion **inside that folder** or a `remotion/` subfolder only if the user asks; default is a sibling or the named reel folder as the Remotion root.

Then:

1. Delete placeholder demo compositions that are not 1080×1920.
2. Add the layout below.
3. Start Studio: `npx remotion studio --no-open` and give the user the URL.

Do **not** render unless asked.

## Layout

```
src/
  Root.tsx              # register Main + every scene composition
  Main.tsx              # timeline: Sequence of finished scenes
  engine.ts             # shared motion helpers — every scene imports this
  scenes/
    Scene01Intro.tsx    # one file, one default export component
    Scene02….tsx
```

- **One scene = one file = one `<Composition>`.** IDs match the filename (`Scene01Intro`).
- Register scenes in a `<Folder name="Scenes">` so Studio can preview each alone.
- Also register the same component on **Main** via `<Sequence>` (or `TransitionSeries` later). Double-clicking a sequence in Main should jump to that scene composition (same `component` reference).
- Inline `durationInFrames` on each Composition and Sequence (editable in Studio). Redundant numbers are OK.
- Scene files import **only** from `engine.ts` for motion math — do not copy helper bodies into scenes.

`Root.tsx` pattern:

```tsx
import {Composition, Folder} from 'remotion';
import {COMP_HEIGHT, COMP_WIDTH, FPS} from './engine';
import {Main} from './Main';
import {Scene01Intro} from './scenes/Scene01Intro';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Scenes">
        <Composition
          id="Scene01Intro"
          component={Scene01Intro}
          durationInFrames={90}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
        />
      </Folder>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={90}
        fps={FPS}
        width={COMP_WIDTH}
        height={COMP_HEIGHT}
      />
    </>
  );
};
```

`Main.tsx` pattern (drop scenes here as they finish):

```tsx
import {Sequence} from 'remotion';
import {Scene01Intro} from './scenes/Scene01Intro';

export const Main: React.FC = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={90} name="Scene01Intro">
        <Scene01Intro />
      </Sequence>
    </>
  );
};
```

When adding a scene: new file → new Composition in `Scenes` → append a `Sequence` on `Main` and bump Main `durationInFrames`. Do not nest unrelated scenes inside one file.

Placeholder scene: solid background + one labeled still is enough. Do not invent full beat visuals unless the user asked to implement a beat sheet.

## Engine (`src/engine.ts`)

Export constants and these helpers. Scenes call `usePosterizeFrame()` (or pass `posterizeFrame(frame)`) **before** boil / drift / pingpong so movement **stutters** (stop-motion), not glides.

```ts
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const COMP_WIDTH = 1080;
export const COMP_HEIGHT = 1920;
export const FPS = 30;
export const POSTERIZE_FPS = 12;

/** Snap a 30fps frame onto 12fps steps (2.5-frame holds). */
export const posterizeFrame = (
  frame: number,
  fps: number = FPS,
  posterizeFps: number = POSTERIZE_FPS,
): number => {
  const step = fps / posterizeFps;
  return Math.floor(frame / step) * step;
};

export const usePosterizeFrame = (): number => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return posterizeFrame(frame, fps);
};

/** Tiny looping jitter (film boil). Use posterized frame. */
export const boilWobble = (
  frame: number,
  ampPx: number = 1.5,
  ampDeg: number = 0.35,
  speed: number = 0.37,
): {x: number; y: number; rotate: number} => {
  const t = frame * speed;
  return {
    x: Math.sin(t * 1.7) * ampPx,
    y: Math.cos(t * 1.3) * ampPx,
    rotate: Math.sin(t * 0.9) * ampDeg,
  };
};

/** Very slow pan/translate. Use posterized frame. */
export const slowDrift = (
  frame: number,
  from: number,
  to: number,
  durationFrames: number,
): number => {
  return interpolate(frame, [0, durationFrames], [from, to], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

/** Oscillate 0→1→0… Use posterized frame. */
export const pingpong = (
  frame: number,
  periodFrames: number,
): number => {
  const cycle = periodFrames * 2;
  const t = ((frame % cycle) + cycle) % cycle;
  if (t <= periodFrames) {
    return interpolate(t, [0, periodFrames], [0, 1]);
  }
  return interpolate(t, [periodFrames, cycle], [1, 0]);
};

/** Pop-into-place. Uses real frame (spring needs continuous time); apply posterize to the *result* if the object should hitch. */
export const springEntrance = ({
  frame,
  fps,
  delay = 0,
  from = 0,
  to = 1,
}: {
  frame: number;
  fps: number;
  delay?: number;
  from?: number;
  to?: number;
}): number => {
  const p = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {damping: 14, mass: 0.6, stiffness: 120},
  });
  return from + (to - from) * p;
};
```

Usage in a scene:

```tsx
const frame = useCurrentFrame();
const {fps} = useVideoConfig();
const p = usePosterizeFrame();
const boil = boilWobble(p);
const driftX = slowDrift(p, 0, 24, 200);
const pulse = pingpong(p, 18);
const enter = springEntrance({frame, fps, delay: 4});
```

Apply boil/drift as `translate` / `rotate` on layers. Do not use CSS `transition` or un-posterized `interpolate` for camera or prop moves.

## Motion rules

- Default treatment: **stop-motion**, **posterize judder**, **vintage hold**. Stepped moves, not fluid B-roll.
- All looping/ambient motion (boil, drift, pingpong) must run on **posterized** time.
- Spring entrance may use the real frame; posterize the visual output if a pop should hitch like a cutout.
- Do not add `@remotion/transitions` until the user asks for transitions on the main timeline.

## After setup

1. Confirm Studio lists `Main` and each scene at 1080×1920 / 30fps.
2. Tell the user they can preview a scene by its composition id (`/Scene01Intro`) and assemble on `Main` when a scene is done.
3. Stop. Do not implement beat-sheet art unless asked.
