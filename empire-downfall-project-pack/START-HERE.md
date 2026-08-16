# 🎬 Empire Downfall — Full Project Pack

Everything from the video: the finished animation, every asset, the code, the complete build spec, and the "how I built it" write-up. You can study it, remix it, or hand it to Claude Code and rebuild the whole thing from scratch.

## Three ways to use this pack

### 1. Just watch / study it
- Open **`final-output/empire-downfall_video.mp4`** — the finished 47-second sequence (video only; the narration and music are separate files in the same folder so you can remix the mix).
- Open **`website/how-to-remotion-broll.html`** in your browser — the full step-by-step write-up of the method, with infographics and the scene-breakdown table.

### 2. Rebuild it with Claude Code (the fun one)
1. Install [Node.js](https://nodejs.org) and [Claude Code](https://claude.com/claude-code).
2. Unzip this pack into a folder and open a terminal there.
3. Start Claude Code and say:

   > Read SPEC.md and rebuild this Remotion project from scratch. Use the scene folders for assets and reference code, and SPEC.md §10 for how to assemble it into a runnable project. Then render the EmpireDownfallSequence composition.

4. Preview with `npx remotion studio`, render with `npx remotion render`.

Everything Claude Code needs is in here — no other downloads required.

### 3. Make your own version
Swap the script, swap the assets, keep the system:
- Write your own 10-beat narration (one idea per line — the script IS the timeline).
- Follow the layer model from `SPEC.md` §3: locked background → cut-out midground with the red marker stroke → foreground anchor.
- Use the per-scene `SCENE.md` files as templates for briefing your own scenes.
- The scene-breakdown table (`website/scene-breakdown-table.html`) shows the asset prompts I used — reuse the pattern for your topic.

## What's inside

| Folder | Contents |
|---|---|
| `SPEC.md` | The complete build spec — read this first if rebuilding |
| `scenes/` | 7 scene folders: assets + background + reference code + a per-scene brief |
| `shared/` | The master sequence, composition registration, and project config |
| `audio/` | Narration stem + music stem (the timing source for every cut) |
| `website/` | The "how I built it" blog post, infographics, and scene table |
| `final-output/` | The finished video + separated audio stems |

## Quick facts
- **Output:** 1920×1080 · 30fps · 47.3s · Remotion (React for video)
- **10 narration beats → 7 scenes**, every cut timed to the spoken word
- **No After Effects.** All animation is AI-written code you direct.

Questions? Drop them in the community — and post what you build with it. 🔥
