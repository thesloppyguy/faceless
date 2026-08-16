import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { FilmLook } from "../FilmLook";
import {
  COMP_HEIGHT,
  COMP_WIDTH,
  boilWobble,
  springEntrance,
  usePosterizeFrame,
} from "../engine";
import type { SceneLookProps } from "./PlaceholderScene";

export type Scene06Props = SceneLookProps & {
  iconsFrame: number;
  slopeStartFrame: number;
  slopeStepFrames: number;
  walkX: number;
  walkY: number;
  walkScale: number;
  glucoseX: number;
  glucoseY: number;
  glucoseScale: number;
  slopeY: number;
  slopeAngleStart: number;
  slopeAngleMid: number;
  slopeAngleEnd: number;
  deskTint: string;
};

const DeclineSlope: React.FC<{
  angleDeg: number;
  y: number;
  color: string;
}> = ({ angleDeg, y, color }) => {
  const width = 420;
  const left = (COMP_WIDTH - width) / 2;
  return (
    <div
      style={{
        position: "absolute",
        left,
        top: y,
        width,
        height: 8,
        backgroundColor: color,
        borderRadius: 4,
        rotate: `${angleDeg}deg`,
        transformOrigin: "left center",
        boxShadow: "0 6px 0 rgba(0,0,0,0.12)",
        opacity: 0.85,
      }}
    />
  );
};

export const Scene06MoveSugar: React.FC<Partial<Scene06Props>> = (props) => {
  const {
    deskOpacity = 1,
    scanLines = true,
    grain = true,
    grunge = true,
    vignette = true,
    grade = true,
    gateWeave = true,
    gradeSaturate = 0.86,
    gradeContrast = 1.08,
    gradeSepia = 0.16,
    gradeBrightness = 0.95,
    gateTravelPx = 5,
    gateScale = 1.012,
    iconsFrame = 4,
    slopeStartFrame = 10,
    slopeStepFrames = 18,
    walkX = 80,
    walkY = 780,
    walkScale = 0.55,
    glucoseX = 680,
    glucoseY = 760,
    glucoseScale = 0.5,
    slopeY = 980,
    slopeAngleStart = 28,
    slopeAngleMid = 14,
    slopeAngleEnd = 4,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.3, 0.32);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  const iconsOn = frame >= iconsFrame;
  const iconSpr = springEntrance(frame, iconsFrame);

  const slopeStage =
    frame < slopeStartFrame
      ? 0
      : Math.min(2, Math.floor((frame - slopeStartFrame) / slopeStepFrames));
  const slopeAngle =
    slopeStage === 0
      ? slopeAngleStart
      : slopeStage === 1
        ? slopeAngleMid
        : slopeAngleEnd;

  return (
    <FilmLook
      scanLines={scanLines}
      grain={grain}
      grunge={grunge}
      vignette={vignette}
      grade={grade}
      gateWeave={gateWeave}
      gradeSaturate={gradeSaturate}
      gradeContrast={gradeContrast}
      gradeSepia={gradeSepia}
      gradeBrightness={gradeBrightness}
      gateTravelPx={gateTravelPx}
      gateScale={gateScale}
    >
      <AbsoluteFill
        style={{
          width: COMP_WIDTH,
          height: COMP_HEIGHT,
          backgroundColor: deskTint,
          overflow: "hidden",
        }}
      >
        <AbsoluteFill style={{ opacity: deskOpacity }}>
          <Img
            src={staticFile("assets/bg-desk.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              translate: `${deskBoil.x}px ${deskBoil.y}px`,
              scale: "1.02",
            }}
          />
        </AbsoluteFill>

        {frame >= slopeStartFrame ? (
          <DeclineSlope angleDeg={slopeAngle} y={slopeY} color="#6a6a70" />
        ) : null}

        {iconsOn ? (
          <>
            <Img
              src={staticFile("assets/prop-walk.png")}
              style={{
                position: "absolute",
                left: walkX,
                top: walkY,
                width: 480 * walkScale,
                height: "auto",
                opacity: iconSpr,
                scale: String(0.9 + 0.1 * iconSpr),
                translate: `${boil.x}px ${boil.y}px`,
                rotate: `${boil.rotation}deg`,
              }}
            />
            <Img
              src={staticFile("assets/prop-glucose.png")}
              style={{
                position: "absolute",
                left: glucoseX,
                top: glucoseY,
                width: 480 * glucoseScale,
                height: "auto",
                opacity: iconSpr,
                scale: String(0.9 + 0.1 * iconSpr),
                translate: `${-boil.x}px ${boil.y}px`,
                rotate: `${-boil.rotation}deg`,
              }}
            />
          </>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
