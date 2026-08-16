# Empire Downfall — Build Spec

A complete, self-contained spec to rebuild a **47.3-second, voiceover-synced motion-graphics B-roll sequence** in [Remotion](https://remotion.dev) (React for video). Hand this folder to a coding agent; everything needed to rebuild from scratch is here.

---

## 1. What it is

A cinematic, paper-textured explainer on the decline of the U.S. economy/empire. Ten narration beats, built as **7 Remotion scene compositions**, chained into one master sequence, each cut timed to the word against a British-narrator voiceover, scored with a tense documentary track.

- **Output:** `1920×1080`, `30fps`, `1419 frames` (47.3s)
- **Master composition id:** `EmpireDownfallSequence`
- **Audio:** delivered as separate stems (VO + music); the comp renders silent by default (see §8)

---

## 2. Tech stack

| Package | Version | Use |
|---|---|---|
| `remotion` + `@remotion/cli` | 4.0.397 | core |
| `react` / `react-dom` | 19.2.3 | — |
| `typescript` | 5.9 | — |
| `zod` | 3.22.3 | scene prop schemas |
| `@remotion/google-fonts` | 4.0.397 | PlayfairDisplay, PTSerif, Bangers, SpecialElite |
| `@remotion/transitions`, `@remotion/shapes`, `@remotion/tailwind-v4` | 4.0.397 | available; scenes mostly use inline styles |

`shared/package.json`, `remotion.config.ts`, `tsconfig.json`, `.prettierrc.json` are the real project config — copy them verbatim.

> **Note on Studio "Save props":** Remotion Studio can only write prop edits back if (a) `defaultProps` in each `<Composition>` is an **inline object literal** (not an imported variable) and (b) a **Prettier config exists** (`.prettierrc.json`, included). Both are required.

---

## 3. The locked visual system

Decide this once; every scene is a variation on it.

- **Background:** one shared paper/photoshop texture — `background.png` (1920×1080, present in every scene folder). Rendered full-cover (`objectFit: cover`, `zIndex 0`) with a soft-light wash overlay on top.
- **Palette:**
  - Paper base `#DAD9D5`
  - Ink / near-black `#1A1A1A` (`#16110D` in newspaper)
  - **Red marker accent** `#E04329` (the signature stroke)
  - Orange chart accents `#E85D24` / `#E8741E`
- **Type:** heavy `Arial Black` for headlines/numbers; `Montserrat` for the price counter; serif `PlayfairDisplay`/`PTSerif` for the newspaper; `Bangers` for comic bubbles; `SpecialElite` for the typewriter.
- **Layer model (every scene):**
  1. **Background** — locked, continuous across all scenes.
  2. **Midground** — the subject(s), dropped in as transparent cut-outs, each with an offset **red marker stroke**.
  3. **Foreground** — an element that occludes the subject's lower body and anchors the shot.
- **Signature motion:** elements `spring()` up into place; charts/strokes `interpolate()`-draw; the red stroke is a duplicated, offset silhouette.

### The red marker stroke (reused everywhere)
Render a solid-colour silhouette of the cut-out behind the image, offset a few px (mostly horizontal so it reads on one side):

```tsx
// stroke layer (behind the <Img>)
<div style={{
  ...sameBoxAsImg,
  backgroundColor: "#E04329",
  maskImage: `url(${assetUrl})`, WebkitMaskImage: `url(${assetUrl})`,
  maskSize: "100% 100%", WebkitMaskSize: "100% 100%",
  transform: `translate(calc(-50% + ${strokeX}px), ${strokeY}px)`, // e.g. -26 / 8
}}/>
<Img src={assetUrl} style={{ ...sameBoxAsImg }} />
```

---

## 4. The narration (source of all timing)

The VO drives everything. Transcribe it with word-level timestamps (Whisper / faster-whisper) and time each scene to its line window. Exact lines + timings (`audio/vo.mp3`, 47.3s):

| Beat | VO line | VO window (s) |
|---|---|---|
| 1 | "The U.S. and Iran are signing a peace deal," | 0.00–3.3 |
| 2 | "but the downfall of the American empire has already begun," | 3.7–6.8 |
| 3 | "and it started when a far weaker nation held the Strait of Hormuz hostage." | 7.4–12.8 |
| 4 | "Oil prices skyrocketed to $116 a barrel," | 13.7–19.0 |
| 5 | "pushing American inflation to a three-year high," | 19.0–22.2 |
| 6 | "and it hit a nation already owing nearly $39 trillion," | 22.8–26.7 |
| 7 | "a debt now bigger than its entire economy," | 26.7–30.8 |
| 8 | "where the interest alone costs more than its entire military," | 31.6–34.9 |
| 9 | "and the world is quietly leaving the dollar behind." | 35.7–39.8 |
| 10 | "Empires don't end with a war. They end with a bill they can no longer pay." | 40.7–46.6 |

---

## 5. Beat → scene mapping (10 beats → 7 scenes)

Some scenes carry multiple beats. (Beat 7's line plays over the held end-state of the inflation scene; there is **no** separate bar-chart scene in the final cut.)

| Scene folder | Beats | Duration (frames) | Window (s) |
|---|---|---|---|
| `scene-01-peace-deal` | 1 | 100 | 0.00–3.35 |
| `scene-02-downfall-newspaper` | 2 | 114 | 3.35–7.15 |
| `scene-03-ocean-tanker` | 3, 4 | 364 | 7.15–19.30 |
| `scene-04-inflation-debt` | 5, 6, 7 | 357 | 19.30–31.20 |
| `scene-05-debt-military` | 8 | 123 | 31.20–35.30 |
| `scene-06-dollar-yuan` | 9 | 148 | 35.30–40.25 |
| `scene-07-empire-bill` | 10 | 213 | 40.25–47.31 |
| **Total** | | **1419** | **47.3s** |

Each scene folder has a `SCENE.md` with its layers, assets, animation, and the tuned prop values; the `.tsx` is the reference implementation.

---

## 6. Per-scene summary

| # | Scene | Midground | Foreground | Notable |
|---|---|---|---|---|
| 01 | Peace deal | Trump + Khamenei halftone cut-outs (red stroke), rise in staggered | White House facade cut-out | classic 3-layer build |
| 02 | Downfall (newspaper) | *The Nation* op-ed page — **built in code** (PlayfairDisplay masthead, real article text), amber highlighter sweeps "Empire Collapse" | — | no image assets; fonts only |
| 03 | Ocean / oil | Tanker cut-out sailing over a **keyed ocean** `.webm` (`OffthreadVideo transparent`) | Oil-price counter that counts to **$116** + oil-barrel icon, rising on a foreground band | counter lands on the word "$116" |
| 04 | Inflation / debt | Self-drawing CPI line chart (code) + isometric US map | "$39 TRILLION" headline pop | chart draws via stroke interpolation |
| 05 | Debt → military | US map; worker cut-out (labour) vs. soldier + tank cut-outs (military) | "Interest: $1 trillion" label | tightest beat (~4s) — compressed entrances |
| 06 | Dollar / Yuan | B&W Xi + Putin handshake cut-out (red stroke) + **comic speech bubbles** (Bangers): "Let's trade in Yuan" / "Ok, deal!" | Tiananmen gate cut-out | bubbles are keyed doodle PNGs |
| 07 | Empire bill (punchline) | Burning $100 bill — transparent `.webm` (`OffthreadVideo transparent`) | **Typewriter** text reveal (SpecialElite) + closing vignette | two sentences typed to the two VO halves |

---

## 7. Asset production techniques

- **Transparent PNG cut-outs:** key the background out with PIL — flood-fill from the four corners (tolerance ~55), then **keep only the largest connected opaque component** (scipy `ndimage.label`) so interior fills (collars, etc.) survive. Don't seed flood-fill from mid-edges — it can leak into a wide subject's fill.
- **Transparent video:** transcode source to **VP9 with alpha** — `ffmpeg -i in.mov -c:v libvpx-vp9 -pix_fmt yuva420p -vf scale=1920:-2 -b:v 0 -crf 32 out.webm` — then `<OffthreadVideo transparent />`. (The "keyed-ocean" and "burning-bill" clips already shipped with alpha.)
- **Background must be light:** the original paper bg was 3000×4000 / 28 MB and made the Studio preview stutter (dropped frames drag the audio). Crop/resize to the visible **1920×1080** (~4 MB). `background.png` here is already optimized.

---

## 8. Assembly & audio (`shared/EmpireDownfallSequence.tsx`)

- All 7 scenes chained with `<Series>`, each `<Series.Sequence durationInFrames={…}>` set to its VO window (see §5).
- Per-scene props are passed explicitly from prop objects that **mirror the tuned `defaultProps`** in `shared/Root.reference.tsx` (Studio writes there). **Timing props** (start/end/duration frames) are retimed in the sequence so each scene fits its (often shorter) VO window.
- **Audio stems** (`audio/vo.mp3`, `audio/music-tense-docu.mp3`) are gated behind `const BAKE_AUDIO = false` → the comp renders **silent video** by default, and the stems ship separately for external mixing. Set `BAKE_AUDIO = true` to mix in:
  - VO at full volume.
  - Music ducked to ~`0.2` with a fade-in (24f) and fade-out (last 50f).

---

## 9. Build & render

```bash
npm install
npx remotion studio                                   # preview + tune
npx remotion render src/index.ts EmpireDownfallSequence out/final.mp4
```

To deliver clean stems (as in the reference): keep `BAKE_AUDIO = false`, render, then strip the silent track: `ffmpeg -i final.mp4 -c:v copy -an video.mp4`, and ship `vo.mp3` + `music-tense-docu.mp3` alongside.

---

## 10. Reassembling into a standard Remotion project

The folder is split **by scene** for clarity. To turn it back into a runnable project:

1. `npm install` against `shared/package.json`.
2. For each `scenes/scene-XX/…Scene.tsx` → place at `src/<SceneName>/index.tsx`; put its images + `background.png` under `public/<scene-folder>/` and fix the `staticFile()` paths.
3. Copy `shared/EmpireDownfallSequence.tsx` → `src/EmpireDownfallSequence/index.tsx`; use `shared/Root.reference.tsx` as the registration reference (`src/Root.tsx`), keeping each `<Composition>`'s `defaultProps` **inline**.
4. Put `audio/*.mp3` under `public/audio/`.
5. Copy `remotion.config.ts`, `tsconfig.json`, `.prettierrc.json` to the project root.

> Import paths in the `.tsx` files assume the original `src/` layout — adjust them when you relocate the files.
