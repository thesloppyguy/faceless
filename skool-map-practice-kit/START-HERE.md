# Build a Documentary-Style War Map with Claude Code — Practice Kit

This is the practice-along kit for the MoSidd video. By the end you'll have rebuilt the whole
31-second animated map film — three seamless scenes, voiceover, music, and sound effects — by
typing **six plain-English prompts** into Claude Code. No After Effects, no $300 plugin.

## What's in the box

```
START-HERE.md            ← you are here
CLAUDE.md                ← house rules; keep it in your project root so Claude behaves
BUILD-PROMPTS.md         ← the six prompts, in order. This is the walkthrough.
assets/                  ← drop these into your project so the prompts can find them
  trump2.png, f35.png, missile.png, tanker.png, vfx.mp4, filmgrain.mp4, flags/
  audio/                 ← the finished voiceover, music, and SFX (see "About the audio")
reference/master.mp4     ← the finished film — your target
step-by-step-guide/      ← the tutorial website: open step-by-step-tutorial.html in a browser
```

## Before you start (one-time setup)

You need a few free tools installed:

1. **Node.js** (v18+) — https://nodejs.org
2. **Claude Code** — https://claude.com/claude-code
3. **ffmpeg** and **ImageMagick** — for prepping assets (`brew install ffmpeg imagemagick` on a Mac).

That's it. The map data and animation libraries install automatically when Claude sets up the project.

## How to practice along

1. Make an empty folder and open Claude Code in it. Copy `CLAUDE.md` and `BUILD-PROMPTS.md` into it.
2. Copy everything from this kit's `assets/` folder into your project's asset folder when Claude asks
   (or up front — the prompts assume the images are "already in the folder").
3. Open `BUILD-PROMPTS.md` and paste **Prompt 1**. Let Claude build. Then Prompt 2, and so on.
4. After each scene, run `npm run dev` to open Remotion Studio and tune anything you like with the
   sliders, then Save. When you're happy, render with the flag below.
5. Compare against `reference/master.mp4`.

### The one render command that matters

```
npx remotion render Master out/master.mp4 --gl=angle
```

The `--gl=angle` flag is required — the film grain uses a graphics shader that needs it to render.

## About the audio (important)

The film's **music, voiceover, and sound effects were generated with AI services** (ElevenLabs for
voices + effects, Magnific for music) using paid accounts. So that you can reproduce the film
**without any API keys or accounts**, the finished audio files are included in `assets/audio/`.
When Claude gets to Prompt 6 (sound), point it at these files instead of regenerating.

If you *want* to generate your own, you'll need your own accounts for those services — and because AI
generation is never identical twice, your version will sound a little different. That's expected.

## Watch the teaching version

Open `step-by-step-guide/step-by-step-tutorial.html` in any browser — just double-click it. It walks
through all six phases with the real frames and four interactive demos (easings, keying, film grain,
and a sound board). All images, video, and sound effects load from this folder, so it works offline;
only the fancy fonts and the narrator voice previews stream from the internet (offline you'll get
system fonts and silent voice buttons — everything else still works).

## Licensing — please read

The images and clips in `assets/` (the Trump cutout, the fighter jet, missile, tanker, the explosion
clip, the grain plate) and the generated audio are provided **for personal practice only**. They are
third-party or AI-generated assets — do not resell or redistribute them, and swap in your own assets
before publishing anything you make. The *technique* is yours to keep; the *media* is for learning.

Have fun. Tag @MoSidd with what you build.
