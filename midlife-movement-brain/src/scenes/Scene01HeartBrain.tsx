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

export type Scene01Props = SceneLookProps & {
  emptyHoldFrames: number;
  heartLandFrame: number;
  arrowStepFrames: number;
  brainPopFrame: number;
  heartScale: number;
  brainScale: number;
  brainOpacity: number;
  heartX: number;
  brainX: number;
  arrowY: number;
  heartY: number;
  brainY: number;
  deskTint: string;
};

const DashedArrow: React.FC<{
  segments: number;
  y: number;
  left: number;
  right: number;
  color: string;
}> = ({ segments, y, left, right, color }) => {
  const width = right - left;
  const dashW = 28;
  const gap = 18;
  const groupWidth = width / 3;
  const visible = Math.max(0, Math.min(segments, 3));

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {[0, 1, 2].map((g) => {
        if (g >= visible) return null;
        const gx = left + g * groupWidth + groupWidth * 0.12;
        return (
          <React.Fragment key={g}>
            {[0, 1, 2].map((i) => (
              <div
                key={`${g}-${i}`}
                style={{
                  position: "absolute",
                  left: gx + i * (dashW + gap),
                  top: y,
                  width: dashW,
                  height: 10,
                  backgroundColor: color,
                  borderRadius: 2,
                  opacity: 0.85,
                }}
              />
            ))}
            {g === visible - 1 ? (
              <div
                style={{
                  position: "absolute",
                  left: gx + 3 * (dashW + gap) - 8,
                  top: y - 8,
                  width: 0,
                  height: 0,
                  borderTop: "14px solid transparent",
                  borderBottom: "14px solid transparent",
                  borderLeft: `22px solid ${color}`,
                  opacity: 0.9,
                }}
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

export const Scene01HeartBrain: React.FC<Partial<Scene01Props>> = (props) => {
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
    emptyHoldFrames = 12,
    heartLandFrame = 12,
    arrowStepFrames = 10,
    brainPopFrame = 55,
    heartScale = 0.42,
    brainScale = 0.32,
    brainOpacity = 0.72,
    heartX = 180,
    brainX = 720,
    arrowY = 920,
    heartY = 880,
    brainY = 900,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.4, 0.32);
  const deskBoil = boilWobble(pFrame, 0.8, 0.2);

  const heartLand = Math.max(emptyHoldFrames, heartLandFrame);
  const heartOn = frame >= heartLand;
  const heartSpr = springEntrance(frame, heartLand);

  const arrowStart = heartLand + 8;
  const arrowSegments =
    frame < arrowStart
      ? 0
      : Math.min(3, 1 + Math.floor((frame - arrowStart) / arrowStepFrames));

  const brainOn = frame >= brainPopFrame;
  const brainSpr = springEntrance(frame, brainPopFrame);

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

        {heartOn && arrowSegments > 0 ? (
          <DashedArrow
            segments={arrowSegments}
            y={arrowY}
            left={heartX + 160}
            right={brainX - 40}
            color="#5c4030"
          />
        ) : null}

        {heartOn ? (
          <Img
            src={staticFile("assets/prop-heart.png")}
            style={{
              position: "absolute",
              left: heartX,
              top: heartY,
              width: 420 * heartScale * (0.85 + 0.15 * heartSpr),
              height: "auto",
              opacity: heartSpr,
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${boil.rotation}deg`,
              scale: 2.15,
              transformOrigin: "81.85% 74.16%",
            }}
          />
        ) : null}

        {brainOn ? (
          <Img
            src={staticFile("assets/prop-brain.png")}
            style={{
              position: "absolute",
              left: brainX,
              top: brainY,
              width: 420 * brainScale * (0.85 + 0.15 * brainSpr),
              height: "auto",
              opacity: brainOpacity * brainSpr,
              translate: `${-boil.x * 0.6}px ${boil.y * 0.6}px`,
              rotate: `${-boil.rotation}deg`,
              scale: 2.88,
              transformOrigin: "28.6% 80.4%",
            }}
          />
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
