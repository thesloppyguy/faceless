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

/** Intrinsic PNG aspects — keep heart + brain the same display height. */
const HEART_ASPECT = 866 / 947;
const BRAIN_ASPECT = 780 / 919;

export type Scene13Props = SceneLookProps & {
  iconsFrame: number;
  dashedLinkFrame: number;
  solidReplaceFrame: number;
  iconScale: number;
  heartX: number;
  brainX: number;
  /** Vertical center of heart / link / brain row. */
  iconY: number;
  linkThickness: number;
  deskTint: string;
};

export const Scene13HeartBrainLink: React.FC<Partial<Scene13Props>> = (props) => {
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
    dashedLinkFrame = 18,
    solidReplaceFrame = 36,
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

  const iconsOn = frame >= iconsFrame;
  const iconSpr = springEntrance(frame, iconsFrame);
  const linkOn = frame >= dashedLinkFrame;
  const solid = frame >= solidReplaceFrame;

  const iconH = 405 * iconScale;
  const heartW = iconH / HEART_ASPECT;
  const brainW = iconH / BRAIN_ASPECT;
  const heartTop = iconY - iconH / 2;
  const brainTop = iconY - iconH / 2;
  const linkTop = iconY - linkThickness / 2;
  const linkLeft = heartX + heartW * 0.88;
  const linkRight = brainX + brainW * 0.12;
  const linkWidth = Math.max(40, linkRight - linkLeft);
  const pop = 0.9 + 0.1 * iconSpr;

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

        {linkOn ? (
          solid ? (
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
          ) : (
            <div
              style={{
                position: "absolute",
                left: linkLeft,
                top: linkTop,
                width: linkWidth,
                height: linkThickness,
                backgroundImage:
                  "repeating-linear-gradient(90deg, #5c4030 0 22px, transparent 22px 36px)",
                opacity: 0.85,
              }}
            />
          )
        ) : null}

        {iconsOn ? (
          <>
            <Img
              src={staticFile("assets/prop-heart.png")}
              style={{
                position: "absolute",
                left: heartX,
                top: heartTop,
                width: heartW,
                height: iconH,
                objectFit: "contain",
                opacity: iconSpr,
                scale: String(pop),
                translate: `${boil.x}px ${boil.y}px`,
                rotate: `${boil.rotation}deg`,
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
                opacity: iconSpr,
                scale: String(pop),
                translate: `${-boil.x}px ${boil.y}px`,
                rotate: `${-boil.rotation}deg`,
                transformOrigin: "center center",
              }}
            />
          </>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
