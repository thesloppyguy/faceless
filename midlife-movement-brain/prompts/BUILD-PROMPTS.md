# BUILD-PROMPTS — midlife-movement-brain

Plain-English director prompts for a ~60s vertical documentary reel (1080×1920, 30fps). Describe the *result*; the agent chooses Remotion details later. Do not write scene code until this pack is approved.

**Script:** `script.md`  
**Storyboard:** `storyboard.md`  
**Treatment:** stop motion · posterize judder on all motion · vintage film (`FILTER-CLINIC`)  
**Scenes:** 14 (one per storyboard beat)  
**Continuity rule:** Scene N+1 opens on the exact last frame of scene N.

---

## Asset drops (gather before Remotion)

Drop or generate into `assets/` (transparent PNG / SVG preferred for cutouts):

| ID | File suggestion | Notes |
|---|---|---|
| `BG-DESK` | `bg-desk.png` | Warm taupe paper desk, soft vignette corners |
| `BG-CITY` | `bg-city.png` | Flat San Antonio skyline strip, no tourist detail |
| `PROP-HEART` | `prop-heart.png` | Cardboard-cutout red heart |
| `PROP-BRAIN` | `prop-brain.png` | Matching cutout brain |
| `PROP-WALK` | `prop-walk.png` | Walking silhouette or sneakers mid-step |
| `PROP-GLUCOSE` | `prop-glucose.png` | Blood-drop / meter card language |
| `PROP-COHORT` | `prop-cohort-402.png` | Big `402` stamp card |
| sit icon | `prop-sit.png` | Chair/sofa silhouette |
| clipboard | `prop-clipboard.png` | Heart-health checklist board |
| meter face | `prop-meter.png` | Fasting glucose dial |
| US silhouette | `prop-us-map.png` | Flat US outline, no state lines |
| cure-all | `prop-cureall.png` | Generic pill/bottle for crossed stamp |
| type cards | (can be Remotion text) | `NOW`, `+10`, `+20`, `+30`, `HALF`, `~58`, `ANY MOVEMENT`, `FASTING GLUCOSE`, `≤ 126`, `mg/dL`, `6.7M`, `ONE CITY`, `ONE COHORT`, `YEARS LATER`, `≠`, `1`–`4` |

Filter stack is code later (`FILTER-CLINIC`): grain, vignette, edge blur, dust, mild underexposure.

---

## Prompt 0 — Remotion setup (later stage)

Scaffold a Remotion project for this reel: vertical 1080×1920, 30fps, zod pinned if required by the kit, ANGLE GL config for grain. One composition per scene plus a `Main` sequence. Shared camera / still positions live in one module. Expose every tunable as a Studio control with **inline default object literals**.

## Prompt F — Film look (later stage)

Reusable `FilmLook` wrapper matching `FILTER-CLINIC`: scan lines, grain, grunge, vignette, grade, gate-weave. Grain on map/desk layers only if a full-frame grain overlay exists; never smother crisp type. Toggles in Studio.

## Prompt S — Sound (later stage)

VO from the locked script, light underscore, sparse paper/stamp SFX. Mix buses in Studio. Prefer existing `assets/audio/` if present; otherwise placeholder slots.

---

## Scene prompts

Pasteable copies also live in `scene-01.txt` … `scene-14.txt`.

### Scene 01 — Heart now, brain later

See `scene-01.txt`.  
**VO:** What you do for your heart in midlife may shape your brain later.  
**Duration:** ~4.0s  
**Ends:** heart left, dashed arrow mid-span (3 steps done), brain right smaller/faded.

### Scene 02 — Decades later

See `scene-02.txt`.  
**VO:** Not next year. Decades later, when thinking starts to fade.  
**Duration:** ~4.0s  
**Ends:** calendar on `+30`, brain dimmed with soft fog, heart still sharp.

### Scene 03 — San Antonio cohort

See `scene-03.txt`.  
**VO:** A San Antonio team followed four hundred two adults into later life.  
**Duration:** ~4.5s  
**Ends:** `BG-CITY` + centered `402` + timeline ribbon complete.

### Scene 04 — Two groups, mean age

See `scene-04.txt`.  
**VO:** Half Hispanic, half non-Hispanic white. Mean age: almost fifty eight.  
**Duration:** ~4.5s  
**Ends:** split panels + `HALF`/`HALF` + `~58` badge.

### Scene 05 — Scored then tested

See `scene-05.txt`.  
**VO:** They scored midlife heart health, then tested thinking up to four times.  
**Duration:** ~4.5s  
**Ends:** clipboard with 3 ticks + quiz cards `1`–`4` fanned.

### Scene 06 — Move + sugar, slower decline

See `scene-06.txt`.  
**VO:** Move more, keep blood sugar in check, and decline ran slower.  
**Duration:** ~4.0s  
**Ends:** walk left, glucose right, shallow decline slope between.

### Scene 07 — Not the same for every group

See `scene-07.txt`.  
**VO:** But the strongest link was not the same for every group.  
**Duration:** ~3.5s  
**Ends:** split with walk ring left, glucose ring right, `≠` stamped center.

### Scene 08 — Hispanic: any movement

See `scene-08.txt`.  
**VO:** For Hispanic adults, especially Mexican Americans, any movement beat sitting.  
**Duration:** ~4.5s  
**Ends:** walk mid-step, sit greyed, `ANY MOVEMENT` card.

### Scene 09 — White adults: glucose

See `scene-09.txt`.  
**VO:** For non-Hispanic white adults, fasting glucose was the standout.  
**Duration:** ~4.0s  
**Ends:** enlarged glucose + meter needle in green + `FASTING GLUCOSE`.

### Scene 10 — ≤ 126

See `scene-10.txt`.  
**VO:** A reading of one twenty six or lower tracked with slower fade.  
**Duration:** ~4.0s  
**Ends:** big `≤ 126` / `mg/dL` + brain one notch brighter.

### Scene 11 — Alzheimer's stake

See `scene-11.txt`.  
**VO:** Alzheimer's already affects six point seven million people in America.  
**Duration:** ~4.0s  
**Ends:** US silhouette + counter `6.7M`.

### Scene 12 — One city caveat

See `scene-12.txt`.  
**VO:** This is one city, one cohort. Not a universal prescription.  
**Duration:** ~4.0s  
**Ends:** `BG-CITY` + `ONE CITY` / `ONE COHORT` + crossed cure-all.

### Scene 13 — Heart work is brain work

See `scene-13.txt`.  
**VO:** The through line: midlife heart work is also brain work.  
**Duration:** ~3.5s  
**Ends:** equal heart + brain with solid link bar.

### Scene 14 — A little movement now

See `scene-14.txt`.  
**VO:** A little movement now may pay off years later.  
**Duration:** ~3.5s  
**Ends:** final still — walk + linked heart/brain + `YEARS LATER`.

---

## Timing budget

~56s spoken. Scene durations above sum ~56.5s; trim holds in Studio to match VO gaps after recording.
