# Vox-Style Charts — Practice Kit

Everything you need to build the three charts from the video yourself. No
finished code in here — you build it, that's the point.

## 1. Build it (start here)

Open `prompts.md`. It has the three prompts from the video, word for word, with
every number baked in — colors, textures, timings, even the real chart data.

1. Install Claude Code and make an empty folder.
2. Paste **Prompt 1**. It sets up the whole Remotion project and builds the bar chart.
3. Paste **Prompt 2** (the parliament), then **Prompt 3** (the line chart with
   the boil) into the same session.
4. Preview each chart in Remotion Studio as it lands (`npm run dev` if it isn't
   already running).

You don't need to write any code. You DO need to read what Claude builds, poke
the props panel, and tune the charts until they match the references.

## 2. Read and play: the build guide

Open `build-guide/how-to-vox-charts.html` in your browser (just double-click it).
It breaks each chart down to its underlying dynamics, with three live playgrounds:

- Flip a chart between clean digital and the full paper look, layer by layer
- Play with the parliament seat wave: the lattice, the pop, the sweep
- Toggle the boil on a finished line chart and see why you blend noise, never swap it

## 3. Check your work

`reference-renders/` has the three finished MP4s from the video. Your builds
should match them — same data, same colors, same feel. If yours drifts, the
numbers in the prompts and the explanations in the build guide are the way back.

Requires Node 18+ for the Remotion project Claude builds for you.

## The rules that make the look (memorize these)

- The look is layers: paper base, wobbly marker edges, grain in the fills, one
  grain dusting over the whole frame.
- Wobble has a budget: a little on data, more on decorations, none on axes or words.
- Blend noise, never swap it. Crossfading noise breathes; regenerating it buzzes.
- No random numbers, ever. All noise derives from the frame number, so renders
  never flicker.
- Real, cited data argues harder than fake data.
