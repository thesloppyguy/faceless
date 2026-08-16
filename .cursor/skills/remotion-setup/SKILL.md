---
name: remotion-setup
description: >-
  Scaffolds a Remotion vertical documentary reel (1080×1920, 30fps) with
  per-scene compositions and a shared posterize/boil/drift engine. Use when the
  pipeline reaches remotion-setup or the user asks to set up a Remotion reel project.
---

# Remotion setup

Scaffold (or extend) Remotion for a **vertical documentary reel**. Do not implement full scenes here.

Intent copied from `Netflix-practice-kit/prompts/01-setup-remotion.txt`; if that file changes, update this block too:

> Set up a new Remotion project for a vertical documentary reel — 1080×1920 at 30fps, with one composition and one file per scene so I can build and preview each on its own, plus a shared engine file that every scene imports. In that shared file, give me the motion helpers I'll reuse everywhere: a posterize-time helper that snaps the current frame to 12fps steps so movement stutters like stop-motion instead of gliding; a boil wobble; a slow drift; a pingpong oscillator; and a spring entrance for things popping into place. Set it up so I can drop each finished scene onto one main timeline later.

## Defaults

| Setting | Value |
|---|---|
| Width × height | 1080 × 1920 |
| FPS | 30 |
| Posterize | 12 fps steps on the 30fps timeline |
| Tailwind | Off unless asked |

Safe area: key text ≥80px from sides, ≥100px from top/bottom.

## Scaffold

If no Remotion project in the reel folder:

```bash
npx create-video@latest --yes --blank --no-tailwind <project-name>
cd <project-name>
npm i
```

Prefer the reel `<slug>/` as Remotion root (or as user asks).

Also ensure:

- **Inline `defaultProps`** object literals on each `<Composition>` (not imported variables) so Studio Save-to-code works — `empire-downfall-project-pack/SPEC.md` §2.
- A `.prettierrc.json` exists (required for Save props).
- **Never `Math.random` for look/noise** — derive from frame number (`vox-charts-practice-kit/README.md` / prompts). Every tunable visual is a Studio prop.

## Layout

```
src/
  Root.tsx
  Main.tsx
  engine.ts
  scenes/
    Scene01….tsx   # placeholders OK until build-scene
```

- One scene = one file = one `<Composition>` under Folder `Scenes`.
- `Main` sequences finished scenes; bump `durationInFrames` as scenes land.
- Placeholder: solid + label. Do not invent full beat art in this stage.

## engine.ts helpers

Export `COMP_WIDTH`, `COMP_HEIGHT`, `FPS`, `POSTERIZE_FPS`, `posterizeFrame`, `usePosterizeFrame`, `boilWobble`, `slowDrift`, `pingpong`, `springEntrance`. Ambient motion must use posterized time. No CSS `transition` for camera/prop moves.

## After setup

1. Start Studio: `npx remotion studio --no-open` (or `npm run dev`); give the user the URL.
2. Confirm Main + scene comps at 1080×1920 / 30fps.
3. Pipeline: `waiting_for_review` on `remotion-setup`. Stop. Do not add film-look or scenes until approved.
