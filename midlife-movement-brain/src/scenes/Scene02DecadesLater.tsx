import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { FilmLook } from "../FilmLook";
import {
  COMP_HEIGHT,
  COMP_WIDTH,
  boilWobble,
  usePosterizeFrame,
} from "../engine";
import type { SceneLookProps } from "./PlaceholderScene";

export type Scene02Props = SceneLookProps & {
  continuityHoldFrames: number;
  calendarStartFrame: number;
  cardHoldFrames: number;
  calendarY: number;
  calendarTypeSize: number;
  calendarTracking: number;
  brainStartOpacity: number;
  brainDimOpacity: number;
  crossOpacity: number;
  crossStroke: number;
  crossScale: number;
  crossColor: string;
  heartScale: number;
  brainScale: number;
  heartX: number;
  brainX: number;
  arrowY: number;
  heartY: number;
  brainY: number;
  deskTint: string;
};

/** Match Scene 01 end-frame layout (defaults must stay in sync). */
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

const CARDS = ["NOW", "+10", "+20", "+30"] as const;

export const Scene02DecadesLater: React.FC<Partial<Scene02Props>> = (props) => {
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
    continuityHoldFrames = 2,
    calendarStartFrame = 2,
    cardHoldFrames = 12,
    calendarY = 620,
    calendarTypeSize = 72,
    calendarTracking = 4,
    brainStartOpacity = 0.72,
    brainDimOpacity = 0.45,
    crossOpacity = 0.92,
    crossStroke = 22,
    crossScale = 1,
    crossColor = "#8b1a1a",
    heartScale = 0.42,
    brainScale = 0.32,
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

  const calStart = Math.max(continuityHoldFrames, calendarStartFrame);
  const cardIndex =
    frame < calStart
      ? -1
      : Math.min(3, Math.floor((frame - calStart) / cardHoldFrames));
  const cardLabel = cardIndex >= 0 ? CARDS[cardIndex] : null;
  const onFinalCard = cardIndex === 3;

  const brainOpacity = onFinalCard ? brainDimOpacity : brainStartOpacity;
  const showCross = onFinalCard;
  const layoutW = 420 * brainScale;
  const layoutH = layoutW * (780 / 919);
  const brainScaleCss = 2.88;
  const originX = 0.1479;
  const originY = 0.8314;
  const brainCx =
    brainX + originX * layoutW + (0.5 - originX) * layoutW * brainScaleCss;
  const brainCy =
    brainY + originY * layoutH + (0.5 - originY) * layoutH * brainScaleCss;
  const crossLen = layoutW * brainScaleCss * 0.7 * crossScale;

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

        <DashedArrow
          segments={3}
          y={arrowY}
          left={heartX + 160}
          right={brainX - 40}
          color="#5c4030"
        />

        <Img
          src={staticFile("assets/prop-heart.png")}
          style={{
            position: "absolute",
            left: heartX,
            top: heartY,
            width: 420 * heartScale,
            height: "auto",
            opacity: 1,
            translate: `${boil.x}px ${boil.y}px`,
            rotate: `${boil.rotation}deg`,
            scale: 2.15,
            transformOrigin: "87.55% 81.33%",
          }}
        />

        <Img
          src={staticFile("assets/prop-brain.png")}
          style={{
            position: "absolute",
            left: brainX,
            top: brainY,
            width: 420 * brainScale,
            height: "auto",
            opacity: brainOpacity,
            translate: `${-boil.x * 0.6}px ${boil.y * 0.6}px`,
            rotate: `${-boil.rotation}deg`,
            scale: 2.88,
            transformOrigin: "14.79% 83.14%",
          }}
        />

        {showCross ? (
          <AbsoluteFill style={{ pointerEvents: "none" }}>
            {[45, -45].map((deg) => (
              <div
                key={deg}
                style={{
                  position: "absolute",
                  left: brainCx - crossLen / 2 + boil.x * 0.4,
                  top: brainCy - crossStroke / 2 + boil.y * 0.4,
                  width: crossLen,
                  height: crossStroke,
                  backgroundColor: crossColor,
                  opacity: crossOpacity,
                  borderRadius: crossStroke / 2,
                  rotate: `${deg + boil.rotation * 0.3}deg`,
                  boxShadow: "2px 2px 0 rgba(0,0,0,0.35)",
                }}
              />
            ))}
          </AbsoluteFill>
        ) : null}

        {cardLabel ? (
          <div
            style={{
              position: "absolute",
              left: 540 - 160,
              top: calendarY,
              width: 320,
              padding: "18px 28px",
              textAlign: "center",
              backgroundColor: "#f0e6d4",
              border: "3px solid #5c4030",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.25)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: calendarTypeSize,
              letterSpacing: calendarTracking,
              fontWeight: 700,
              color: "#2a2018",
              translate: `${boil.x * 0.3}px ${boil.y * 0.3}px`,
              rotate: `${boil.rotation * 0.4}deg`,
            }}
          >
            {cardLabel}
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
