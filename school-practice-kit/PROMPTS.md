# Collage Animation — The Whole Build in 4 Prompts

The entire project distilled into four mega-prompts. Each one is a single paste into
Claude Code, followed by a round of art direction before moving to the next. Swap the
bracketed parts for any collage scene.

---

## 1 · Decode the original and plan the shot

> Take a look at this collage-style animation [link]. Download it if you need to and
> step through it frame by frame. Break down how the effect is made — the asset
> ingredients AND the motion recipe — and make me a master sheet of every asset I'd
> need to reproduce [the scene I want]: every cutout, every layer. Then, before we
> build anything, mock up a visual storyboard of the animation as panels using
> whatever assets we have, with timings and motion notes under each beat. I'll sign
> off on the board before we generate or animate anything.

**Gate:** don't move on until the storyboard looks like the video in your head.
Notes here cost seconds; the same notes after the build cost hours.

## 2 · Generate the asset pack

> Now generate every cutout from the master sheet as a transparent PNG with the
> collage treatment baked into the image itself — torn ragged edges with visible
> white paper fibers, thin white sticker borders around silhouettes, visible paper
> grain. No postprocessing step. Use [image model] through the [Replicate] API and
> put each prompt in a script so I can regenerate any single piece with one command.
> If I supply my own files [paper textures, clip-art, photos], match any new
> characters to their style by passing my asset as a style reference. Show me the
> pack on a contact sheet before we build.

**Gate:** kill weak assets now — regenerating one piece is one command, but every
scene tweak downstream inherits the pack.

## 3 · Build the living scene

> Build this in [Remotion]: layer the cutouts back to front, give every layer its
> own looping drift (front layers faster than back for parallax), and open with
> [the reveal from the storyboard]. Then three things that make it feel handmade.
> One: any character riding inside a container [boat, car, window] — split the
> container into two layers cut from the same image along its fold line and
> sandwich the character between them. Two: stepped stop-motion movement on the
> characters, but with uneven hold lengths like a human placed each frame — keep
> the big background layers smooth so the stepped pieces pop. Three: give me full
> prop control for every individual piece — position, size, timing, wobble — so I
> can fine-tune the whole scene myself in the live preview and save my values back
> into the project.

**Gate:** tune in the live preview until the motion feels right at 1x speed.
If stepped motion feels choppy, make holds more uneven before making them shorter.

## 4 · Score it and finish

> Let's add sound. First give me a few music direction options with your thoughts —
> don't generate anything yet. [Pick one.] Now generate two takes of the winner,
> and 3–4 foley sounds tied to what's on screen [paper unrolling, water lapping, a
> gull cry], each as its own layer with volume and trigger-frame controls in the
> same props panel. Preview the full mix over the video. If a sound distracts, cut
> it — a ten-second piece carries a music bed and about three foley cues, no more.
> Then render the final MP4 with everything mixed in.

**Gate:** listen once without watching. Anything you notice as a *sound* rather
than as part of the scene gets cut.

---

**The meta-lesson:** each prompt describes the result and the working order
(analyze → sign off → generate → approve → build → tune → score → cut), never the
implementation. The only rounds that needed re-doing in the original build were the
ones that skipped a reference image or a sign-off gate.
