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

export type Scene05Props = SceneLookProps & {
  continuityHoldFrames: number;
  clipboardFrame: number;
  tickStartFrame: number;
  tickIntervalFrames: number;
  cardFanStartFrame: number;
  cardFanIntervalFrames: number;
  clipboardX: number;
  clipboardY: number;
  clipboardScale: number;
  cardsX: number;
  cardsY: number;
  cardArcRadius: number;
  tickColor: string;
  deskTint: string;
};

export const Scene05ScoredTested: React.FC<Partial<Scene05Props>> = (props) => {
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
    continuityHoldFrames = 1,
    clipboardFrame = 1,
    tickStartFrame = 18,
    tickIntervalFrames = 10,
    cardFanStartFrame = 48,
    cardFanIntervalFrames = 8,
    clipboardX = 80,
    clipboardY = 520,
    clipboardScale = 0.95,
    cardsX = 620,
    cardsY = 700,
    cardArcRadius = 70,
    tickColor = "#2f6b3a",
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.2, 0.3);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  const clipOn = frame >= Math.max(continuityHoldFrames, clipboardFrame);
  const clipSpr = springEntrance(
    frame,
    Math.max(continuityHoldFrames, clipboardFrame),
  );

  const ticksVisible =
    frame < tickStartFrame
      ? 0
      : Math.min(
          3,
          1 + Math.floor((frame - tickStartFrame) / tickIntervalFrames),
        );

  const cardsVisible =
    frame < cardFanStartFrame
      ? 0
      : Math.min(
          4,
          1 + Math.floor((frame - cardFanStartFrame) / cardFanIntervalFrames),
        );

  const tickYs = [180, 260, 340];

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

        {clipOn ? (
          <div
            style={{
              position: "absolute",
              left: clipboardX,
              top: clipboardY,
              width: 420 * clipboardScale,
              opacity: clipSpr,
              scale: String(0.92 + 0.08 * clipSpr),
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${-3 + boil.rotation}deg`,
            }}
          >
            <Img
              src={staticFile("assets/prop-clipboard.png")}
              style={{
                width: "100%",
                height: "auto",
                translate: "0px -28px",
              }}
            />
            {tickYs.map((y, i) => {
              if (i >= ticksVisible) return null;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: 88,
                    top: y,
                    width: 36,
                    height: 22,
                    borderLeft: `5px solid ${tickColor}`,
                    borderBottom: `5px solid ${tickColor}`,
                    rotate: "-45deg",
                    opacity: 0.95,
                  }}
                />
              );
            })}
          </div>
        ) : null}

        {Array.from({ length: 4 }).map((_, i) => {
          if (i >= cardsVisible) return null;
          const spr = springEntrance(
            frame,
            cardFanStartFrame + i * cardFanIntervalFrames,
          );
          const angle = -18 + i * 12;
          const xOff = i * 28;
          const yOff =
            Math.sin((i / 3) * Math.PI) * cardArcRadius * 0.35 + i * 18;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: cardsX + xOff,
                top: cardsY + yOff,
                width: 160,
                height: 200,
                backgroundColor: "#f3ebe0",
                border: "3px solid #5c4030",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 72,
                fontWeight: 700,
                color: "#2a2018",
                opacity: spr,
                scale: String(0.85 + 0.15 * spr),
                rotate: `${angle + boil.rotation * 0.5}deg`,
                translate: `${-boil.x * 0.4}px ${boil.y * 0.4}px`,
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </AbsoluteFill>
    </FilmLook>
  );
};
