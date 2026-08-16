# Empire Downfall — Handoff Package

A self-contained handoff to rebuild a 47-second, voiceover-synced motion-graphics B-roll sequence in **Remotion**. Give this folder to a coding agent (e.g. Claude Code) and point it at **`SPEC.md`** — that's the complete build spec.

## Start here
1. Read **[`SPEC.md`](SPEC.md)** — the full spec (stack, visual system, VO timing, scene mapping, techniques, assembly, render).
2. Each scene's **`SCENE.md`** has its layers, assets, animation, and tuned prop values; the `.tsx` next to it is the reference implementation.
3. See **SPEC.md §10** to reassemble the by-scene layout back into a runnable Remotion `src/` + `public/` project.

## Folder map
```
empire-downfall-handoff/
├─ SPEC.md                      ← complete build spec (read this first)
├─ README.md
├─ audio/
│  ├─ vo.mp3                    ← narration stem (drives all timing)
│  └─ music-tense-docu.mp3      ← score stem (ducked under VO)
├─ shared/                      ← project glue + config
│  ├─ EmpireDownfallSequence.tsx  ← master <Series> assembly + audio
│  ├─ Root.reference.tsx          ← composition registration (inline defaultProps)
│  ├─ package.json / remotion.config.ts / tsconfig.json / .prettierrc.json
├─ scenes/                      ← one folder per built scene (7)
│  ├─ scene-01-peace-deal/
│  ├─ scene-02-downfall-newspaper/
│  ├─ scene-03-ocean-tanker/
│  ├─ scene-04-inflation-debt/
│  ├─ scene-05-debt-military/
│  ├─ scene-06-dollar-yuan/
│  └─ scene-07-empire-bill/
│     each contains: background.png + its image/video assets + <Name>Scene.tsx + SCENE.md
├─ website/                     ← the "how I built it" blog + infographics
│  ├─ how-to-remotion-broll.html   ← the blog post (open in a browser)
│  ├─ scene-breakdown-table.html   ← the layer/prompt breakdown table
│  └─ infographics/                ← 01-script-timeline.svg · 02-three-layers.svg
└─ final-output/                ← the finished deliverable
   ├─ empire-downfall_video.mp4    ← plain video, no audio (47.3s, 1080p)
   ├─ empire-downfall_VO.mp3       ← narration stem
   └─ empire-downfall_music.mp3    ← score stem
```

## Key facts
- Output: **1920×1080 · 30fps · 1419 frames (47.3s)**, composition id `EmpireDownfallSequence`.
- **10 narration beats → 7 scenes** (some scenes carry 2–3 beats). Full mapping in SPEC.md §5.
- Every scene = **background → midground cut-out (red marker stroke) → foreground**.
- Audio ships as **separate stems**; the comp renders silent by default (`BAKE_AUDIO = false`).
- `background.png` is the same locked paper texture in every scene folder (already optimized to 1080p).
