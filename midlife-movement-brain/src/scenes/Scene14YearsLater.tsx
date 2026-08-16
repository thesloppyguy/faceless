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

const HEART_ASPECT = 866 / 947;
const BRAIN_ASPECT = 780 / 919;
const WALK_ASPECT = 940 / 587;

export type Scene14Props = SceneLookProps & {
  continuityHoldFrames: number;
  walkLandFrame: number;
  walkX: number;
  walkY: number;
  walkScale: number;
  tagFrame: number;
  tagSize: number;
  iconScale: number;
  heartX: number;
  brainX: number;
  /** Vertical center of heart / link / brain row (must match Scene 13 end). */
  iconY: number;
  linkThickness: number;
  deskTint: string;
};

export const Scene14YearsLater: React.FC<Partial<Scene14Props>> = (props) => {
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
    continuityHoldFrames = 3,
    walkLandFrame = 8,
    walkX = 390,
    walkY = 1120,
    walkScale = 0.48,
    tagFrame = 28,
    tagSize = 32,
    iconScale = 0.42,
    heartX = 160,
    brainX = 640,
    iconY = 900,
    linkThickness = 12,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.2, 0.3);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  const walkOn = frame >= Math.max(continuityHoldFrames, walkLandFrame);
  const walkSpr = springEntrance(
    frame,
    Math.max(continuityHoldFrames, walkLandFrame),
  );
  const tagOn = frame >= tagFrame;
  const tagSpr = springEntrance(frame, tagFrame);

  const iconH = 405 * iconScale;
  const heartW = iconH / HEART_ASPECT;
  const brainW = iconH / BRAIN_ASPECT;
  const heartTop = iconY - iconH / 2;
  const brainTop = iconY - iconH / 2;
  const linkTop = iconY - linkThickness / 2;
  const linkLeft = heartX + heartW * 0.88;
  const linkRight = brainX + brainW * 0.12;
  const linkWidth = Math.max(40, linkRight - linkLeft);

  const walkW = 480 * walkScale;
  const walkH = walkW * WALK_ASPECT;
  /** Tag centered under the walker’s feet. */
  const tagLeft = walkX + walkW / 2 - 118;
  const tagTop = walkY + walkH * 0.92;

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

        <div
          style={{
            position: "absolute",
            left: linkLeft,
            top: linkTop,
            width: linkWidth,
            height: linkThickness,
            backgroundColor: "#5c4030",
            borderRadius: 4,
            opacity: 0.9,
          }}
        />

        <Img
          src={staticFile("assets/prop-heart.png")}
          style={{
            position: "absolute",
            left: heartX,
            top: heartTop,
            width: heartW,
            height: iconH,
            objectFit: "contain",
            translate: `${boil.x * 0.5}px ${boil.y * 0.5}px`,
            rotate: `${boil.rotation * 0.5}deg`,
            transformOrigin: "center center",
          }}
        />
        <Img
          src={staticFile("assets/prop-brain.png")}
          style={{
            position: "absolute",
            left: brainX,
            top: brainTop,
            width: brainW,
            height: iconH,
            objectFit: "contain",
            translate: `${-boil.x * 0.5}px ${boil.y * 0.5}px`,
            rotate: `${-boil.rotation * 0.5}deg`,
            transformOrigin: "center center",
          }}
        />

        {walkOn ? (
          <Img
            src={staticFile("assets/prop-walk.png")}
            style={{
              position: "absolute",
              left: walkX,
              top: walkY,
              width: walkW,
              height: walkH,
              objectFit: "contain",
              opacity: walkSpr,
              scale: String(0.88 + 0.12 * walkSpr),
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${boil.rotation}deg`,
              transformOrigin: "center center",
            }}
          />
        ) : null}

        {tagOn ? (
          <div
            style={{
              position: "absolute",
              left: tagLeft,
              top: tagTop,
              width: 236,
              padding: "10px 18px",
              textAlign: "center",
              backgroundColor: "#f0e6d4",
              border: "2px solid #5c4030",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.22)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: tagSize,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#2a2018",
              opacity: tagSpr,
              scale: String(0.9 + 0.1 * tagSpr),
              transformOrigin: "center top",
            }}
          >
            YEARS LATER
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
