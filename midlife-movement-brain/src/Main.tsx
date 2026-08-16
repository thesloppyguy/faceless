import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import type { SceneLookProps } from "./scenes/PlaceholderScene";
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

/** Placeholder durations (~60s total). Bump per scene when build-scene lands. */
export const SCENE_DURATIONS = [
  120, // 01 ~4.0s
  120, // 02
  135, // 03 ~4.5s
  135, // 04
  135, // 05
  120, // 06
  105, // 07 ~3.5s
  135, // 08
  120, // 09
  120, // 10
  120, // 11
  120, // 12
  105, // 13
  105, // 14
] as const;

export const MAIN_DURATION = SCENE_DURATIONS.reduce((a, b) => a + b, 0);

export type MixProps = {
  enableVo: boolean;
  enableMusic: boolean;
  enableSfx: boolean;
  voLevel: number;
  musicLevel: number;
  sfxMaster: number;
  sfxStamp: number;
  sfxTick: number;
  sfxWhoosh: number;
  voStartFrame: number;
  musicStartFrame: number;
  voNudgeFrames: number;
};

export type MainProps = SceneLookProps & MixProps;

/** Approximate stamp/tick hits aligned to scene starts + action beats. */
const STAMP_HITS = [255, 375, 615, 870, 1110, 1395]; // cohort, half, neq-ish, caption-ish, threshold, city
const TICK_HITS = [420, 430, 440, 555, 565, 575, 1020, 1032, 1044]; // checklist + needle-ish
const WHOOSH_HITS = [240, 360]; // rare snap-cuts

export const Main: React.FC<MainProps> = (props) => {
  const {
    enableVo,
    enableMusic,
    enableSfx,
    voLevel,
    musicLevel,
    sfxMaster,
    sfxStamp,
    sfxTick,
    sfxWhoosh,
    voStartFrame,
    musicStartFrame,
    voNudgeFrames,
    ...look
  } = props;

  const scenes = [
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
  ];

  let from = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1612" }}>
      {scenes.map((Scene, i) => {
        const durationInFrames = SCENE_DURATIONS[i];
        const start = from;
        from += durationInFrames;
        return (
          <Sequence
            key={i}
            from={start}
            durationInFrames={durationInFrames}
            name={`Scene ${String(i + 1).padStart(2, "0")}`}
          >
            <Scene {...look} />
          </Sequence>
        );
      })}

      {enableVo ? (
        <Sequence from={voStartFrame + voNudgeFrames} name="VO">
          <Audio src={staticFile("audio/vo.mp3")} volume={voLevel} />
        </Sequence>
      ) : null}

      {enableMusic ? (
        <Sequence from={musicStartFrame} name="Music">
          <Audio src={staticFile("audio/music.mp3")} volume={musicLevel} />
        </Sequence>
      ) : null}

      {enableSfx
        ? STAMP_HITS.map((f) => (
            <Sequence key={`stamp-${f}`} from={f} durationInFrames={30} name={`SFX stamp ${f}`}>
              <Audio src={staticFile("audio/sfx-stamp.mp3")} volume={sfxMaster * sfxStamp} />
            </Sequence>
          ))
        : null}

      {enableSfx
        ? TICK_HITS.map((f) => (
            <Sequence key={`tick-${f}`} from={f} durationInFrames={20} name={`SFX tick ${f}`}>
              <Audio src={staticFile("audio/sfx-tick.mp3")} volume={sfxMaster * sfxTick} />
            </Sequence>
          ))
        : null}

      {enableSfx
        ? WHOOSH_HITS.map((f) => (
            <Sequence key={`whoosh-${f}`} from={f} durationInFrames={25} name={`SFX whoosh ${f}`}>
              <Audio src={staticFile("audio/sfx-whoosh.mp3")} volume={sfxMaster * sfxWhoosh} />
            </Sequence>
          ))
        : null}
    </AbsoluteFill>
  );
};
