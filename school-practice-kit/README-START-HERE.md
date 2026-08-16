# Collage Animation Practice Kit — Start Here

Welcome! This kit gives you everything you need to build a professional-looking
paper-collage animation with Claude Code — the same one from the video.

## What's in the box

| Folder / file | What it is |
|---|---|
| `PROMPTS.md` | The 4 mega-prompts that build the whole animation, in order, with the quality gates between them |
| `assets/` | The full cutout pack: torn-paper ocean strips, the dollar-bill boat, pilgrims, lighthouse, clouds, sun — all transparent PNGs, ready to layer |
| `audio/` | The music bed and foley clips (paper unroll, water lap, gull cry) so you can score without any audio API keys |
| `website/how-to-collage-boat.html` | The full written walkthrough — open it in your browser and read it before you start |

## How to practice

1. **Read the explainer first** (`website/how-to-collage-boat.html`). Ten minutes,
   and you'll know why every step exists.
2. **Open a fresh Claude Code session** in an empty folder and drop `assets/` and
   `audio/` into it.
3. **Work through `PROMPTS.md` one prompt at a time.** Don't paste all four at
   once — each prompt ends with a gate. Look at what you got, give notes like a
   director, and only move on when it looks right. That review loop IS the skill
   you're practicing.
4. Since you already have the assets, Prompt 2's generation step is optional —
   you can skip straight to layout, or bring your own Replicate API key and
   generate a fresh pack in your own theme (a space scene? a jungle? same recipe).

## The three techniques to watch for

- **Torn edges belong in the generation prompt**, not in postprocessing.
- **The sandwich:** a character "inside" a boat/car/window is just the container
  layered twice with the character in between.
- **Uneven stop-motion holds:** if your stepped motion feels robotic, don't make
  it faster — make the hold lengths irregular.

Build something, post it in the community, and tag what you changed. Good luck!
