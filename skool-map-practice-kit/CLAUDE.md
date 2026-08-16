# Project conventions — read before building

You are helping rebuild a news-documentary style animated map film in Remotion, by following
the six prompts in `BUILD-PROMPTS.md`. Follow these rules throughout.

## The stack (set this up in Prompt 1)

- **Remotion** (React + TypeScript video) as the project.
- Map from real data: **world-atlas** country shapes, unpacked with **TopoJSON**, projected and drawn
  with **d3-geo** (`geoMercator`). The map is generated per frame, never hand-drawn.
- Pin **zod to 4.3.6** (newer versions break the render).
- Add a `remotion.config.ts` that sets the ANGLE GL renderer, and always render with `--gl=angle`
  (the film-grain shader needs it headlessly).

## How to work

- **Expose every parameter as a Remotion Studio control** (a schema with sliders/colors) so the user
  tunes visually and Saves back to code. Default props must be **inline object literals**, not
  variable references, or Save-to-code breaks.
- **Build scene by scene, and make every scene start on the exact camera frame the previous scene
  ends on.** This continuity rule is what makes the three cuts seamless. Keep named camera positions
  in one shared module.
- **Render once, at the end.** Don't render individual scenes while iterating — tune in Studio, then
  do one master render.
- **Grain belongs on the map layer only**, never over the foreground assets (jets, flags,
  explosions). The full-frame film-grain overlay is a separate, render-only layer.

## Assets

The image and clip assets are already in the project's asset folder (`trump2.png`, `f35.png`,
`missile.png`, `tanker.png`, `vfx.mp4`, `filmgrain.mp4`, plus flag SVGs). The finished voiceover,
music, and SFX are in `assets/audio/` — use those for the sound step rather than regenerating.
When an asset needs cleanup, use ImageMagick (transparent PNG, white-key with `-fuzz`) and ffmpeg
(transcode/ downscale clips).

## Voice / style

- **No em-dashes** anywhere. Use commas, colons, or "to".
- Keep explanations plain. The only technical words worth teaching are world-atlas, TopoJSON, d3-geo,
  and two motion ideas: **easeOut** (an easing = a one-line function for how speed spreads across a
  move) and **screen blend** (keys a black background by only adding light).
