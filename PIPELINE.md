# Documentary pipeline (HITL)

Human-in-the-loop Cursor Agent pipeline for short vertical documentary reels. Skills live under `.cursor/skills/`. Practice kits in this repo are the source of truth for look and prompt grammar — do not rewrite them to “match” the skills.

## Start

In Agent chat:

> Start a documentary from \<URL or paste\>. ~60 seconds.

The agent creates `<slug>/brief.md` + `<slug>/pipeline.md`, then stops.

## Gates

Reply **Approve** or **Revise: …** after each gate. Stages:

1. brief  
2. script (`vox-script`)  
3. storyboard  
4. scene-prompts (whole pack first)  
5. asset-pack (per asset)  
6. remotion-setup  
7. film-look  
8. build-scene (one scene per gate)  
9. sound-mix  
10. render (once, at the end)

`pipeline.md` tracks `(current_stage, active_item_id)` and nested `items[]` for assets and scenes.

## Rules of thumb

- Voiceover is locked before picture.
- Scene prompts are written and approved before Remotion scene code.
- Tune in Remotion Studio; render once at the end (`--gl=angle` when grain/shaders need it).
- Backward jumps (reopen an earlier stage) are manual in v1.

## Skills

| Skill | Role |
|---|---|
| `documentary-pipeline` | Conductor |
| `vox-script` | Spoken script |
| `storyboard` | Picture lock |
| `scene-prompts` | BUILD-PROMPTS-style director pack |
| `asset-pack` | Assets checklist / drops |
| `remotion-setup` | Project + engine |
| `film-look` | Aged-film wrapper |
| `build-scene` | One scene implementation |
| `sound-mix` | VO / music / SFX |
