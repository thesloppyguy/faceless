---
name: sound-mix
description: >-
  Adds voiceover, music, and SFX to a Remotion documentary reel with Studio mix
  buses, preferring existing audio files. Use when the pipeline reaches sound-mix
  or the user asks to score / mix the reel.
---

# Sound mix

Words always win the mix. Prefer finished files already in the reel or kit over regenerating.

## Sources

- VO / SFX generation intent: `Netflix-practice-kit/prompts/09-voiceover-elevenlabs.txt`, `10-sfx-elevenlabs.txt`
- Collage gate: `school-practice-kit/PROMPTS.md` prompt 4 (music options first; listen without watching; cut sounds that announce themselves)
- Studio buses: `skool-map-practice-kit/BUILD-PROMPTS.md` Prompt 6

## Procedure

1. **Music direction first** — propose a few options; do not generate until the user picks (collage).
2. **Voiceover** — one take of the locked script when generating; cut scene durations to pauses between lines (Netflix). If `<slug>/public/audio/` or kit audio already has VO, use it.
3. **SFX** — tied to picture (whooshes, hits, alarms). Trim to attack so hits land on beat. Keep sparse.
4. Wire Remotion `<Audio>` (or equivalent) with Studio props:
   - Voiceover level (allow >100% if useful)
   - Music level
   - Master SFX + per-type SFX sliders
   - Nudge controls for VO start frames per line/scene
5. Preview the mix. Cut anything you notice as *a sound* rather than part of the scene.

### Netflix VO settings (when generating)

Copied from `Netflix-practice-kit/prompts/09-voiceover-elevenlabs.txt`; if that file changes, update this block too.

- Voice example in kit: calm documentary narrator
- Model: Multilingual v2
- Stability 50, similarity 75, style 11

### Netflix SFX prompts (when generating)

Copied from `10-sfx-elevenlabs.txt` examples: fast cinematic whoosh; vintage shutter; cha-ching; neon buzz — adapt names to this reel’s actions.

## After write (pipeline)

`waiting_for_review` on `sound-mix`. Stop. Render only after Approve (conductor render appendix).
