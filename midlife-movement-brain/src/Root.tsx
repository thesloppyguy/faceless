import React from "react";
import { Composition, Folder } from "remotion";
import { z } from "zod";
import { COMP_HEIGHT, COMP_WIDTH, FPS } from "./engine";
import { MAIN_DURATION, Main, SCENE_DURATIONS } from "./Main";
import {
  Scene01,
  Scene02,
  Scene03,
  Scene04,
  Scene05,
  Scene06,
  Scene07,
  Scene08,
  Scene09,
  Scene10,
  Scene11,
  Scene12,
  Scene13,
  Scene14,
} from "./scenes";

const lookSchema = z.object({
  deskOpacity: z.number().min(0).max(1).step(0.01),
  scanLines: z.boolean(),
  grain: z.boolean(),
  grunge: z.boolean(),
  vignette: z.boolean(),
  grade: z.boolean(),
  gateWeave: z.boolean(),
  gradeSaturate: z.number().min(0).max(2).step(0.01),
  gradeContrast: z.number().min(0).max(2).step(0.01),
  gradeSepia: z.number().min(0).max(1).step(0.01),
  gradeBrightness: z.number().min(0).max(2).step(0.01),
  gateTravelPx: z.number().min(0).max(20).step(0.5),
  gateScale: z.number().min(1).max(1.05).step(0.001),
});

const mixSchema = z.object({
  enableVo: z.boolean(),
  enableMusic: z.boolean(),
  enableSfx: z.boolean(),
  voLevel: z.number().min(0).max(2).step(0.01),
  musicLevel: z.number().min(0).max(1).step(0.01),
  sfxMaster: z.number().min(0).max(2).step(0.01),
  sfxStamp: z.number().min(0).max(2).step(0.01),
  sfxTick: z.number().min(0).max(2).step(0.01),
  sfxWhoosh: z.number().min(0).max(2).step(0.01),
  voStartFrame: z.number().min(0).max(300).step(1),
  musicStartFrame: z.number().min(0).max(300).step(1),
  voNudgeFrames: z.number().min(-60).max(60).step(1),
});

const mainSchema = lookSchema.merge(mixSchema);
const scene01Schema = lookSchema.extend({
  emptyHoldFrames: z.number().min(0).max(60).step(1),
  heartLandFrame: z.number().min(0).max(120).step(1),
  arrowStepFrames: z.number().min(1).max(30).step(1),
  brainPopFrame: z.number().min(0).max(120).step(1),
  heartScale: z.number().min(0.1).max(1.2).step(0.01),
  brainScale: z.number().min(0.1).max(1.2).step(0.01),
  brainOpacity: z.number().min(0).max(1).step(0.01),
  heartX: z.number().min(0).max(1080).step(1),
  brainX: z.number().min(0).max(1080).step(1),
  arrowY: z.number().min(0).max(1920).step(1),
  heartY: z.number().min(0).max(1920).step(1),
  brainY: z.number().min(0).max(1920).step(1),
  deskTint: z.string(),
});

const scene02Schema = lookSchema.extend({
  continuityHoldFrames: z.number().min(0).max(30).step(1),
  calendarStartFrame: z.number().min(0).max(60).step(1),
  cardHoldFrames: z.number().min(1).max(40).step(1),
  calendarY: z.number().min(0).max(1920).step(1),
  calendarTypeSize: z.number().min(24).max(120).step(1),
  calendarTracking: z.number().min(0).max(20).step(0.5),
  brainStartOpacity: z.number().min(0).max(1).step(0.01),
  brainDimOpacity: z.number().min(0).max(1).step(0.01),
  crossOpacity: z.number().min(0).max(1).step(0.01),
  crossStroke: z.number().min(4).max(48).step(1),
  crossScale: z.number().min(0.4).max(1.8).step(0.01),
  crossColor: z.string(),
  heartScale: z.number().min(0.1).max(1.2).step(0.01),
  brainScale: z.number().min(0.1).max(1.2).step(0.01),
  heartX: z.number().min(0).max(1080).step(1),
  brainX: z.number().min(0).max(1080).step(1),
  arrowY: z.number().min(0).max(1920).step(1),
  heartY: z.number().min(0).max(1920).step(1),
  brainY: z.number().min(0).max(1920).step(1),
  deskTint: z.string(),
});

const scene03Schema = lookSchema.extend({
  stampFrame: z.number().min(0).max(120).step(1),
  stampScale: z.number().min(0.3).max(2).step(0.01),
  stampSettle: z.number().min(1).max(1.5).step(0.01),
  timelineStartFrame: z.number().min(0).max(120).step(1),
  timelineStepFrames: z.number().min(1).max(30).step(1),
  timelineDotCount: z.number().min(2).max(6).step(1),
  cityBrightness: z.number().min(0.5).max(1.5).step(0.01),
  cohortTypeSize: z.number().min(40).max(200).step(1),
  cityY: z.number().min(0).max(1920).step(1),
  stampY: z.number().min(0).max(1920).step(1),
  timelineY: z.number().min(0).max(1920).step(1),
  deskTint: z.string(),
});

const scene04Schema = lookSchema.extend({
  splitStartFrame: z.number().min(0).max(60).step(1),
  splitStepFrames: z.number().min(1).max(30).step(1),
  panelGap: z.number().min(0).max(48).step(1),
  silhouetteScale: z.number().min(0.5).max(2.5).step(0.05),
  silhouetteFrame: z.number().min(0).max(120).step(1),
  halfBadgeFrame: z.number().min(0).max(120).step(1),
  ageBadgeFrame: z.number().min(0).max(135).step(1),
  ageBadgeY: z.number().min(0).max(1920).step(1),
  labelSize: z.number().min(16).max(48).step(1),
  ageSize: z.number().min(28).max(96).step(1),
  leftLabel: z.string(),
  rightLabel: z.string(),
  deskTint: z.string(),
});

const scene05Schema = lookSchema.extend({
  continuityHoldFrames: z.number().min(0).max(10).step(1),
  clipboardFrame: z.number().min(0).max(60).step(1),
  tickStartFrame: z.number().min(0).max(120).step(1),
  tickIntervalFrames: z.number().min(1).max(30).step(1),
  cardFanStartFrame: z.number().min(0).max(120).step(1),
  cardFanIntervalFrames: z.number().min(1).max(30).step(1),
  clipboardX: z.number().min(0).max(800).step(1),
  clipboardY: z.number().min(0).max(1600).step(1),
  clipboardScale: z.number().min(0.4).max(1.5).step(0.01),
  cardsX: z.number().min(0).max(1000).step(1),
  cardsY: z.number().min(0).max(1600).step(1),
  cardArcRadius: z.number().min(0).max(200).step(1),
  tickColor: z.string(),
  deskTint: z.string(),
});

const scene06Schema = lookSchema.extend({
  iconsFrame: z.number().min(0).max(60).step(1),
  slopeStartFrame: z.number().min(0).max(90).step(1),
  slopeStepFrames: z.number().min(1).max(40).step(1),
  walkX: z.number().min(0).max(800).step(1),
  walkY: z.number().min(0).max(1600).step(1),
  walkScale: z.number().min(0.2).max(1.2).step(0.01),
  glucoseX: z.number().min(0).max(1000).step(1),
  glucoseY: z.number().min(0).max(1600).step(1),
  glucoseScale: z.number().min(0.2).max(1.2).step(0.01),
  slopeY: z.number().min(0).max(1600).step(1),
  slopeAngleStart: z.number().min(0).max(45).step(0.5),
  slopeAngleMid: z.number().min(0).max(45).step(0.5),
  slopeAngleEnd: z.number().min(0).max(45).step(0.5),
  deskTint: z.string(),
});

const scene07Schema = lookSchema.extend({
  continuityHoldFrames: z.number().min(0).max(20).step(1),
  panelsFrame: z.number().min(0).max(40).step(1),
  walkRingFrame: z.number().min(0).max(90).step(1),
  glucoseRingFrame: z.number().min(0).max(90).step(1),
  neqStampFrame: z.number().min(0).max(105).step(1),
  neqSettle: z.number().min(1).max(1.4).step(0.01),
  neqScale: z.number().min(0.5).max(2).step(0.01),
  ringPulse: z.number().min(0).max(2).step(0.05),
  panelDim: z.number().min(0).max(1).step(0.01),
  panelGap: z.number().min(0).max(48).step(1),
  walkScale: z.number().min(0.2).max(1.2).step(0.01),
  glucoseScale: z.number().min(0.2).max(1.2).step(0.01),
  deskTint: z.string(),
});

const scene08Schema = lookSchema.extend({
  walkStartFrame: z.number().min(0).max(60).step(1),
  walkStepFrames: z.number().min(1).max(30).step(1),
  sitOpacity: z.number().min(0).max(1).step(0.01),
  captionFrame: z.number().min(0).max(135).step(1),
  captionY: z.number().min(0).max(1920).step(1),
  captionSize: z.number().min(20).max(72).step(1),
  walkScale: z.number().min(0.2).max(1.5).step(0.01),
  walkY: z.number().min(0).max(1600).step(1),
  sitScale: z.number().min(0.2).max(1.5).step(0.01),
  sitY: z.number().min(0).max(1600).step(1),
  deskTint: z.string(),
});

const scene09Schema = lookSchema.extend({
  meterFrame: z.number().min(0).max(40).step(1),
  needleStartFrame: z.number().min(0).max(90).step(1),
  needleStepFrames: z.number().min(1).max(30).step(1),
  needleAngleStart: z.number().min(-90).max(90).step(1),
  needleAngleMid: z.number().min(-90).max(90).step(1),
  needleAngleEnd: z.number().min(-90).max(90).step(1),
  greenZoneStart: z.number().min(-90).max(90).step(1),
  greenZoneEnd: z.number().min(-90).max(90).step(1),
  glucoseScale: z.number().min(0.2).max(1.5).step(0.01),
  glucoseX: z.number().min(0).max(1000).step(1),
  glucoseY: z.number().min(0).max(1600).step(1),
  meterScale: z.number().min(0.4).max(1.5).step(0.01),
  meterY: z.number().min(0).max(1400).step(1),
  captionFrame: z.number().min(0).max(120).step(1),
  captionY: z.number().min(0).max(1920).step(1),
  captionSize: z.number().min(20).max(72).step(1),
  deskTint: z.string(),
});

const scene10Schema = lookSchema.extend({
  continuityHoldFrames: z.number().min(0).max(10).step(1),
  thresholdFrame: z.number().min(0).max(40).step(1),
  thresholdScale: z.number().min(0.5).max(1.5).step(0.01),
  thresholdSettle: z.number().min(1).max(1.4).step(0.01),
  brainFrame: z.number().min(0).max(90).step(1),
  brainX: z.number().min(0).max(1000).step(1),
  brainY: z.number().min(0).max(1600).step(1),
  brainScale: z.number().min(0.2).max(1.2).step(0.01),
  brainOpacityStart: z.number().min(0).max(1).step(0.01),
  brainOpacityEnd: z.number().min(0).max(1).step(0.01),
  thresholdY: z.number().min(0).max(1600).step(1),
  numberSize: z.number().min(60).max(200).step(1),
  unitSize: z.number().min(16).max(64).step(1),
  deskTint: z.string(),
});

const scene11Schema = lookSchema.extend({
  mapFrame: z.number().min(0).max(40).step(1),
  mapScale: z.number().min(0.4).max(1.5).step(0.01),
  mapY: z.number().min(0).max(1400).step(1),
  mapOpacity: z.number().min(0).max(1).step(0.01),
  counterStartFrame: z.number().min(0).max(90).step(1),
  counterStepFrames: z.number().min(1).max(30).step(1),
  counterValue1: z.string(),
  counterValue2: z.string(),
  counterValue3: z.string(),
  counterY: z.number().min(0).max(1800).step(1),
  counterSize: z.number().min(40).max(160).step(1),
  deskTint: z.string(),
});

const scene12Schema = lookSchema.extend({
  cityFrame: z.number().min(0).max(30).step(1),
  cityScale: z.number().min(0.3).max(1.2).step(0.01),
  cityY: z.number().min(0).max(1400).step(1),
  stampIntervalFrames: z.number().min(1).max(40).step(1),
  stampSettle: z.number().min(1).max(1.4).step(0.01),
  oneCityFrame: z.number().min(0).max(90).step(1),
  oneCohortFrame: z.number().min(0).max(90).step(1),
  cureallFrame: z.number().min(0).max(100).step(1),
  crossFrame: z.number().min(0).max(120).step(1),
  crossAngle: z.number().min(-45).max(45).step(1),
  crossScale: z.number().min(0.5).max(2).step(0.05),
  cureallScale: z.number().min(0.2).max(1.2).step(0.01),
  deskTint: z.string(),
});

const scene13Schema = lookSchema.extend({
  iconsFrame: z.number().min(0).max(40).step(1),
  dashedLinkFrame: z.number().min(0).max(60).step(1),
  solidReplaceFrame: z.number().min(0).max(90).step(1),
  iconScale: z.number().min(0.2).max(1.2).step(0.01),
  heartX: z.number().min(0).max(800).step(1),
  brainX: z.number().min(0).max(1000).step(1),
  iconY: z.number().min(0).max(1600).step(1),
  linkThickness: z.number().min(4).max(28).step(1),
  deskTint: z.string(),
});

const scene14Schema = lookSchema.extend({
  continuityHoldFrames: z.number().min(0).max(20).step(1),
  walkLandFrame: z.number().min(0).max(60).step(1),
  walkX: z.number().min(0).max(900).step(1),
  walkY: z.number().min(0).max(1700).step(1),
  walkScale: z.number().min(0.2).max(1.2).step(0.01),
  tagFrame: z.number().min(0).max(90).step(1),
  tagSize: z.number().min(16).max(56).step(1),
  iconScale: z.number().min(0.2).max(1.2).step(0.01),
  heartX: z.number().min(0).max(800).step(1),
  brainX: z.number().min(0).max(1000).step(1),
  iconY: z.number().min(0).max(1600).step(1),
  linkThickness: z.number().min(4).max(28).step(1),
  deskTint: z.string(),
});

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={MAIN_DURATION}
        fps={FPS}
        width={COMP_WIDTH}
        height={COMP_HEIGHT}
        schema={mainSchema}
        defaultProps={{
          deskOpacity: 1,
          scanLines: true,
          grain: true,
          grunge: true,
          vignette: true,
          grade: true,
          gateWeave: true,
          gradeSaturate: 0.86,
          gradeContrast: 1.08,
          gradeSepia: 0.16,
          gradeBrightness: 0.95,
          gateTravelPx: 5,
          gateScale: 1.012,
          enableVo: true,
          enableMusic: true,
          enableSfx: true,
          voLevel: 1.1,
          musicLevel: 0.18,
          sfxMaster: 0.7,
          sfxStamp: 1,
          sfxTick: 0.8,
          sfxWhoosh: 0.45,
          voStartFrame: 0,
          musicStartFrame: 0,
          voNudgeFrames: 0,
        }}
      />
      <Folder name="Scenes">
        <Composition
          id="Scene01"
          component={Scene01}
          durationInFrames={SCENE_DURATIONS[0]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene01Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            emptyHoldFrames: 12,
            heartLandFrame: 12,
            arrowStepFrames: 10,
            brainPopFrame: 55,
            heartScale: 0.42,
            brainScale: 0.32,
            brainOpacity: 0.72,
            heartX: 180,
            brainX: 720,
            arrowY: 920,
            heartY: 880,
            brainY: 900,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene02"
          component={Scene02}
          durationInFrames={SCENE_DURATIONS[1]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene02Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            continuityHoldFrames: 2,
            calendarStartFrame: 2,
            cardHoldFrames: 12,
            calendarY: 620,
            calendarTypeSize: 72,
            calendarTracking: 4,
            brainStartOpacity: 0.72,
            brainDimOpacity: 0.45,
            crossOpacity: 0.92,
            crossStroke: 22,
            crossScale: 1,
            crossColor: "#8b1a1a",
            heartScale: 0.42,
            brainScale: 0.32,
            heartX: 180,
            brainX: 720,
            arrowY: 920,
            heartY: 880,
            brainY: 900,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene03"
          component={Scene03}
          durationInFrames={SCENE_DURATIONS[2]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene03Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            stampFrame: 8,
            stampScale: 1,
            stampSettle: 1.2,
            timelineStartFrame: 28,
            timelineStepFrames: 10,
            timelineDotCount: 4,
            cityBrightness: 1,
            cohortTypeSize: 120,
            cityY: 720,
            stampY: 980,
            timelineY: 1280,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene04"
          component={Scene04}
          durationInFrames={SCENE_DURATIONS[3]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene04Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            splitStartFrame: 4,
            splitStepFrames: 8,
            panelGap: 16,
            silhouetteScale: 1.4,
            silhouetteFrame: 20,
            halfBadgeFrame: 36,
            ageBadgeFrame: 52,
            ageBadgeY: 1580,
            labelSize: 28,
            ageSize: 56,
            leftLabel: "Hispanic / Mexican American",
            rightLabel: "Non-Hispanic white",
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene05"
          component={Scene05}
          durationInFrames={SCENE_DURATIONS[4]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene05Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            continuityHoldFrames: 1,
            clipboardFrame: 1,
            tickStartFrame: 18,
            tickIntervalFrames: 10,
            cardFanStartFrame: 48,
            cardFanIntervalFrames: 8,
            clipboardX: 80,
            clipboardY: 520,
            clipboardScale: 0.95,
            cardsX: 620,
            cardsY: 700,
            cardArcRadius: 70,
            tickColor: "#2f6b3a",
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene06"
          component={Scene06}
          durationInFrames={SCENE_DURATIONS[5]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene06Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            iconsFrame: 4,
            slopeStartFrame: 10,
            slopeStepFrames: 18,
            walkX: 80,
            walkY: 780,
            walkScale: 0.55,
            glucoseX: 680,
            glucoseY: 760,
            glucoseScale: 0.5,
            slopeY: 980,
            slopeAngleStart: 28,
            slopeAngleMid: 14,
            slopeAngleEnd: 4,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene07"
          component={Scene07}
          durationInFrames={SCENE_DURATIONS[6]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene07Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            continuityHoldFrames: 2,
            panelsFrame: 2,
            walkRingFrame: 18,
            glucoseRingFrame: 28,
            neqStampFrame: 42,
            neqSettle: 1.18,
            neqScale: 1,
            ringPulse: 1,
            panelDim: 0.55,
            panelGap: 16,
            walkScale: 0.48,
            glucoseScale: 0.45,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene08"
          component={Scene08}
          durationInFrames={SCENE_DURATIONS[7]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene08Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            walkStartFrame: 12,
            walkStepFrames: 12,
            sitOpacity: 0.35,
            captionFrame: 52,
            captionY: 1480,
            captionSize: 42,
            walkScale: 0.7,
            walkY: 720,
            sitScale: 0.55,
            sitY: 900,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene09"
          component={Scene09}
          durationInFrames={SCENE_DURATIONS[8]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene09Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            meterFrame: 4,
            needleStartFrame: 18,
            needleStepFrames: 12,
            needleAngleStart: -50,
            needleAngleMid: -10,
            needleAngleEnd: 25,
            greenZoneStart: -5,
            greenZoneEnd: 45,
            glucoseScale: 0.55,
            glucoseX: 620,
            glucoseY: 780,
            meterScale: 1,
            meterY: 620,
            captionFrame: 55,
            captionY: 1480,
            captionSize: 40,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene10"
          component={Scene10}
          durationInFrames={SCENE_DURATIONS[9]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene10Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            continuityHoldFrames: 1,
            thresholdFrame: 1,
            thresholdScale: 1,
            thresholdSettle: 1.15,
            brainFrame: 28,
            brainX: 700,
            brainY: 820,
            brainScale: 0.4,
            brainOpacityStart: 0.55,
            brainOpacityEnd: 0.92,
            thresholdY: 780,
            numberSize: 140,
            unitSize: 36,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene11"
          component={Scene11}
          durationInFrames={SCENE_DURATIONS[10]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene11Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            mapFrame: 4,
            mapScale: 0.95,
            mapY: 520,
            mapOpacity: 0.95,
            counterStartFrame: 28,
            counterStepFrames: 14,
            counterValue1: "2.1M",
            counterValue2: "4.4M",
            counterValue3: "6.7M",
            counterY: 1280,
            counterSize: 96,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene12"
          component={Scene12}
          durationInFrames={SCENE_DURATIONS[11]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene12Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            cityFrame: 2,
            cityScale: 0.72,
            cityY: 520,
            stampIntervalFrames: 14,
            stampSettle: 1.12,
            oneCityFrame: 16,
            oneCohortFrame: 30,
            cureallFrame: 48,
            crossFrame: 62,
            crossAngle: -18,
            crossScale: 1.1,
            cureallScale: 0.55,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene13"
          component={Scene13}
          durationInFrames={SCENE_DURATIONS[12]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene13Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            iconsFrame: 4,
            dashedLinkFrame: 18,
            solidReplaceFrame: 36,
            iconScale: 0.42,
            heartX: 160,
            brainX: 640,
            iconY: 900,
            linkThickness: 12,
            deskTint: "#c4a882",
          }}
        />
        <Composition
          id="Scene14"
          component={Scene14}
          durationInFrames={SCENE_DURATIONS[13]}
          fps={FPS}
          width={COMP_WIDTH}
          height={COMP_HEIGHT}
          schema={scene14Schema}
          defaultProps={{
            deskOpacity: 1,
            scanLines: true,
            grain: true,
            grunge: true,
            vignette: true,
            grade: true,
            gateWeave: true,
            gradeSaturate: 0.86,
            gradeContrast: 1.08,
            gradeSepia: 0.16,
            gradeBrightness: 0.95,
            gateTravelPx: 5,
            gateScale: 1.012,
            continuityHoldFrames: 3,
            walkLandFrame: 8,
            walkX: 390,
            walkY: 1120,
            walkScale: 0.48,
            tagFrame: 28,
            tagSize: 32,
            iconScale: 0.42,
            heartX: 160,
            brainX: 640,
            iconY: 900,
            linkThickness: 12,
            deskTint: "#c4a882",
          }}
        />
      </Folder>
    </>
  );
};
