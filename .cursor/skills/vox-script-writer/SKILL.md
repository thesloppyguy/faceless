---
name: vox-script-writer
description: Generate a short VOX-style explainer script with a single narrator from a URL, document, or pasted text, including intro and outro (user-provided or auto-generated). Write for stop-motion, posterize-judder motion, and vintage film. Write the script to a markdown file in a new project directory. Use when the user asks for a VOX script, explainer narration, voiceover script, faceless video script, intro/outro, or to turn an article/link/doc into spoken copy.
---

# VOX Explainer Script

Turn a source into a **single-narrator** VOX-style spoken script. Default length: **60–90 seconds** (~150–225 words at ~160 wpm). Do not write interview, two-host, or “guest clip” formats unless the user explicitly asks.

## When this applies

- User pastes a **URL**, **document**, or **text block** and wants a script
- User asks for VOX, explainer, narrator, voiceover, or faceless-video copy
- User wants “what’s actually going on” narration, not a news readout

## Ingest the source

1. **URL**: fetch the page. Prefer the article body over nav, ads, and comments. If fetch fails, ask for a paste.
2. **Document**: read the file. Use headings and lede; skip boilerplate.
3. **Text block**: use it as the source of truth. Do not invent facts not in the source (or clearly marked as general knowledge).

Extract before writing:

- The **puzzle** (what looks confusing, surprising, or incomplete)
- The **mechanism** (how it actually works — the VOX “here’s what’s going on”)
- **Stakes** (who is affected, why it matters now)
- **1–3 concrete facts** (numbers, names, dates) worth saying out loud
- What to **leave out** (side plots that blow the runtime)

If the source is thin or contradictory, say so briefly, then write the strongest honest script you can.

## VOX voice (single narrator)

Write for the ear, not the page.

- Conversational, informed, slightly dry. Smart friend, not professor, not hype YouTuber.
- Open on tension or a counterintuitive beat, not “today we’re going to talk about…”
- Explain the **system**, not just the headline. Prefer “so / here’s the thing / which means” over slogans.
- Second person is fine when it clarifies (“you pay…”, “your feed…”). Do not overuse it.
- Attribute in passing: “according to the report”, “researchers found”. No footnote voice.
- Humanize numbers (“about one in five”, “roughly $2 billion”) unless precision is the point.
- Each spoken **line is at most 15 words**. Split at natural breath points, not mid-phrase.
- No “in this video”, “like and subscribe”, “smash that”, or host banter.
- No fake dialogue. One voice the whole way.
- End on implication or the next beat to watch — not a TED recap of everything you just said.

Avoid: listicle cadence, press-release adjectives, both-sides padding, and stacking more than two statistics in a row.

## Picture lock (how this gets shot)

The VO is cut against **stop motion**, **posterize judder on all motion**, and a **vintage film** grade. Write for stills that snap, not for smooth B-roll.

- Treat **each spoken line as one hold** (a tableau, a cut, a stepped move). Prefer nouns you can put in front of a camera: bottles, receipts, maps, headlines, hands.
- Do not write camera grammar that assumes fluid motion: no “as we glide”, “the camera drifts”, “watch it unfold in real time”.
- If motion is implied, make it **stepped**: a jump, a snap, a frame-by-frame shift. One idea per line so judder has somewhere to land.
- Vintage film: slightly analog, held, a little dusty. Not glossy tech-startup VO. Short declarative lines over stacked clauses.
- Use `[PAUSE]` when the picture needs an extra hold (title card, a still that has to read, a snap-cut). Do not sprinkle pauses on every line.
- Intro and outro should also be hold-friendly: a cold-open still, then a last still that lands.

## Intro and outro

Every script has an **intro** and an **outro**. The user may supply one, both, or neither.

- **User provided:** use their copy **verbatim** (same words, same order). Still split to **≤ 15 words per line**. Do not rewrite, soften, or add lines inside their copy unless they ask.
- **Not provided:** auto-generate it.
- Mix is allowed (e.g. custom intro + generated outro).

**Auto intro** (about 8–15s, 2–5 lines): cold-open energy that sets the puzzle, then a one-line series/show ident if a show name exists; otherwise skip the ident. No “hey guys”, “welcome back”, or “today we’re talking about”.

**Auto outro** (about 8–12s, 2–4 lines): land the implication, then a light close (what to watch next, or a calm sign-off). No subscribe/like/smash. Do not recap the whole explainer.

If the user gives an intro/outro that already includes a hook or sign-off, do not duplicate that beat in the body.

## Structure and runtime

Spoken order: **intro → body → outro**. Do not label beats inside the body.

1. **Intro** — provided or generated (see above)
2. **Hook** (8–15s) — skip or shorten if the intro already is the hook
3. **Frame** (10–15s) — name the story in one clear sentence
4. **Mechanism** — how it works; the “actually” of the piece (longest beat)
5. **Stakes** — why it matters / who feels it
6. **Land** — implication; keep this short if the outro will land it
7. **Outro** — provided or generated (see above)

**Default (no time given):** body about 60–90 seconds; intro and outro are extra bookends.

**If the user gives a time limit:** that limit is the **total** spoken runtime. Intro, body, and outro must all fit inside it. Count words at ~160 wpm.

- Scale the **body** (especially mechanism) first.
- Shrink **generated** intro/outro to match (tight limit → 2 lines each; never drop them).
- **User-provided** intro/outro stay verbatim. Put the remaining time into the body. If their copy already blows the limit, keep it verbatim, write the shortest honest body that still explains the mechanism, and note the overrun in the chat reply.

Keep the same beat order. Do not cut the hook to save the recap.

## Output

Write the script to disk. Do not treat the chat reply as the deliverable.

**Title** — 6–12 words, VOX-explainer energy (curious, not clickbait all-caps).

### Project directory

1. Create a **new** directory for this piece: `<slug>/`
2. `<slug>` is lowercase kebab-case from the title (max ~50 chars, letters/numbers/hyphens only). If that folder already exists, append `-2`, `-3`, etc. Never overwrite another project.
3. If the user names a folder, use that name (still kebab-case it).

### Markdown file

Write `<slug>/script.md` using this template:

```markdown
# <Title>

**Angle:** <one sentence>
**Runtime:** <total seconds> (intro + body + outro) · <word count> words
**Limit:** <user limit, or “none”>
**Intro:** provided | generated
**Outro:** provided | generated
**Treatment:** stop motion · posterize judder on all motion · vintage film

## Intro

<lines, ≤ 15 words each>

## Body

<lines, ≤ 15 words each>

## Outro

<lines, ≤ 15 words each>

## Sources

- <URL or pasted text / filename>
- Inferred: <anything not in the source, or “none”>
```

Spoken lines stay one per line, **max 15 words**. Split a longer thought across consecutive lines. Do not pack two sentences onto one line. Optional `[PAUSE]` on its own line only where a breath is structurally needed.

If the user only wants the script, still include title, runtime, intro, body, and outro in the file. Never include on-screen notes.

### Chat reply

After writing the file, reply with:

- Path to `script.md`
- Title and total runtime (and the limit, if any)
- Whether intro/outro were provided or generated

Do not paste the full script in chat unless the user asks.

## Quality check (before writing the file)

- [ ] Sounds spoken, not written (no “moreover”, “aforementioned”, “in conclusion”)
- [ ] One narrator, one through-line
- [ ] Hook is concrete; mechanism is the longest beat
- [ ] If a time limit was given, intro + body + outro fit inside it (~160 wpm); otherwise body is 60–90s
- [ ] Every factual claim is in the source or labeled
- [ ] Ending does not restart the explanation
- [ ] Every script line is ≤ 15 words (count hyphenated terms as one word)
- [ ] Intro and outro are present; user copy is verbatim when provided
- [ ] Generated intro/outro do not duplicate the body’s hook or landing
- [ ] File written to `<slug>/script.md` in a new directory
- [ ] Lines work as stop-motion holds; no fluid-camera language; pictureable nouns
