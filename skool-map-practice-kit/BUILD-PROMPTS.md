# US–Iran map animation: the 6-prompt build (for the video)

Plain-English prompts. The only technical terms are the three concepts taught in the video (world-atlas, TopoJSON, d3-geo) — everything else describes the *result*, and Claude makes the technical choices. Drop the supplied assets into the project between prompts when asked.

---

## Prompt 1 — Project + the map itself
> Set up a new Remotion project for a documentary-style animated map video. Build the world map from real geographic data: get the country shapes from world-atlas, unpack them with TopoJSON, and draw them with d3-geo.
> Style it like a news documentary: deep navy ocean that darkens at the edges, flat light-grey countries, a subtle film grain baked into the map, and tilt the whole map back slightly so it feels like a table-top war map.
> I also need: the ability to highlight any country with a glowing colored outline that draws itself on, smooth camera moves between any two places on the map, and sliders in Remotion Studio for every setting so I can tweak everything visually without touching code.
> One rule for the entire film: this will be built scene by scene, and every scene must start on the exact frame the previous scene ends on, so when they're cut together the camera never jumps and the whole thing feels like one continuous shot.

## Prompt 2 — Scene 1 (US / Trump)
> Build Scene 1, about 8 seconds. The camera starts on the full world map, zooms into the US, and holds. The US gets a white glowing outline, then a solid red circle pops up in the middle of the country. There's a transparent full-body photo of Trump already in the assets folder — make him black and white, and have him rise up out of that red circle like it's a hole in the ground: his lower body stays hidden inside the circle. Use an **easeOut** on the rise so he decelerates into place — smooth settle, not a jarring pop.
> End the scene with a fast pan across the map that lands already zoomed in on Israel. Scene 2 will pick up from that exact frame so the cut is invisible.
> Give me sliders for all of it: the timing of each beat, the circle's color, size and glow, and Trump's size, position and how much of him emerges.

## Prompt 3 — Scene 2 (Israel → Iran air campaign)
> Build Scene 2, about 8 seconds, starting on the exact Israel frame Scene 1 ended on. Outline Israel in its flag blue and Iran in its flag red, and have each country's flag spring up from the map and stay planted.
> The top-down fighter jet image is already in the assets folder: three jets take off from Israel and fly toward Iran while the camera pans along with them. When they hit their targets, play the explosion video from the folder — it's on a black background, so use a **screen blend** to key it out and only the fireball shows — and leave a glowing red mark on each spot. The jets should fly through the explosions and keep going east until they leave the frame.
> At the very end, spring the Iran flag back out of the map so the next scene starts clean. Sliders for everything: jet size and speed, flight curve, explosion size, flag positions, outline colors, all the timings.

## Prompt 4 — Scene 3 (Strait of Hormuz)
> Build Scene 3, about 15 seconds, starting on the Iran frame Scene 2 ended on. Zoom in tight on the Strait of Hormuz so the strait is clearly the star of the shot.
> Iran fires a barrage of at least 20 missiles (the missile image is already in the folder) at slightly random intervals, all streaking west out of the frame. Then a dotted line draws itself across the strait to show the blockade, an oil tanker (also in the folder) slowly glides in and gets stuck behind the line, and a flashing warning triangle appears at the blockade.
> Sliders for everything: how tight the zoom is, missile count / size / speed and when the barrage starts, the blockade line's position, angle, length, color and dash style, the tanker's size, position, rotation and glide speed, and the warning sign's size, position and flash rate.

## Prompt 5 — Stitch the scenes + the film look
> Combine the three scenes into one master timeline. They already start and end on matching frames, so the cuts should be seamless — the whole film should play like one continuous shot.
> Then the film look: there's a film-grain-and-dust video already in the assets folder. Blend it over the entire film — same trick as the explosion: it's bright grain on a black background, so a blend mode keys it out. Give me sliders for the grain's opacity and blend style so I can dial in the look, and keep the overlay out of the live preview so scrubbing in Studio stays fast — only bake it into the final render.

## Prompt 6 — Sound + the mix
> Now the audio. Generate a dark, slow-building tension music bed for the full runtime. Add the three voiceover lines, one per scene, with natural dead air between them. Then layer in the sound effects: whooshes on the camera moves, a riser as Trump emerges, jet roars, explosion booms, missile launches, a sonar ping when the blockade line draws itself, an alarm on the flashing warning, and a foghorn when the tanker stops.
> Mixing controls in Studio: one slider for the voiceover (let me push it above 100%), one for the music, one master slider for all sound effects, plus an individual slider for every effect type, and controls to nudge when each voiceover line starts. Then render the final video.

---

## Asset drops (between prompts)
- After Prompt 1: nothing — the map is pure data.
- Before Prompt 2: `trump.png` (transparent full body).
- Before Prompt 3: jet image, explosion video (black background).
- Before Prompt 4: missile image, tanker image.
- Before Prompt 5: film-grain overlay video.
- Before Prompt 6: voiceover files (or let Claude generate the VO).

Claude handles the messy file formats automatically (EPS/PSD → transparent PNG, ProRes → mp4, trimming silence off VO takes) — worth mentioning on camera but not worth a prompt.
