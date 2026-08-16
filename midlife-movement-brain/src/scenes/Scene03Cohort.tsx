import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmLook } from "../FilmLook";
import {
  COMP_HEIGHT,
  COMP_WIDTH,
  boilWobble,
  springEntrance,
  usePosterizeFrame,
} from "../engine";
import type { SceneLookProps } from "./PlaceholderScene";

export type Scene03Props = SceneLookProps & {
  stampFrame: number;
  stampScale: number;
  stampSettle: number;
  timelineStartFrame: number;
  timelineStepFrames: number;
  timelineDotCount: number;
  cityBrightness: number;
  cohortTypeSize: number;
  cityY: number;
  stampY: number;
  timelineY: number;
  deskTint: string;
};

export const Scene03Cohort: React.FC<Partial<Scene03Props>> = (props) => {
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
    stampFrame = 8,
    stampScale = 1,
    stampSettle = 1.2,
    timelineStartFrame = 28,
    timelineStepFrames = 10,
    timelineDotCount = 4,
    cityBrightness = 1,
    cohortTypeSize = 120,
    cityY = 720,
    stampY = 980,
    timelineY = 1280,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.2, 0.3);
  const deskBoil = boilWobble(pFrame, 0.6, 0.18);

  const stampOn = frame >= stampFrame;
  const stampSpr = springEntrance(frame, stampFrame);
  const settleKick =
    stampOn && frame < stampFrame + 6
      ? interpolate(frame, [stampFrame, stampFrame + 3, stampFrame + 6], [1, stampSettle, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  const dotsVisible =
    frame < timelineStartFrame
      ? 0
      : Math.min(
          timelineDotCount,
          1 + Math.floor((frame - timelineStartFrame) / timelineStepFrames),
        );

  const timelineWidth = 720;
  const timelineLeft = (COMP_WIDTH - timelineWidth) / 2;

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
        {/* Paper underlay */}
        <AbsoluteFill style={{ opacity: deskOpacity * 0.35 }}>
          <Img
            src={staticFile("assets/bg-desk.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              translate: `${deskBoil.x}px ${deskBoil.y}px`,
            }}
          />
        </AbsoluteFill>

        {/* City skyline strip */}
        <Img
          src={staticFile("assets/bg-city.png")}
          style={{
            position: "absolute",
            left: 40,
            top: cityY,
            width: COMP_WIDTH - 80,
            height: "auto",
            filter: `brightness(${cityBrightness})`,
            translate: `${boil.x * 0.4}px ${boil.y * 0.3}px`,
          }}
        />

        {/* 402 stamp */}
        {stampOn ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 220,
              top: stampY,
              width: 440,
              opacity: stampSpr,
              scale: String(stampScale * settleKick * (0.9 + 0.1 * stampSpr)),
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${boil.rotation}deg`,
            }}
          >
            <Img
              src={staticFile("assets/prop-cohort-402.png")}
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: cohortTypeSize,
                fontWeight: 700,
                color: "#1a120c",
                letterSpacing: 2,
                pointerEvents: "none",
                mixBlendMode: "multiply",
                opacity: 0.15,
              }}
            >
              402
            </div>
          </div>
        ) : null}

        {/* Timeline ribbon */}
        <AbsoluteFill style={{ pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              left: timelineLeft,
              top: timelineY + 10,
              width: timelineWidth,
              height: 4,
              backgroundColor: "#5c4030",
              opacity: dotsVisible > 0 ? 0.55 : 0,
            }}
          />
          {Array.from({ length: timelineDotCount }).map((_, i) => {
            if (i >= dotsVisible) return null;
            const x = timelineLeft + (i / (timelineDotCount - 1)) * timelineWidth;
            const label = i === 0 ? "MIDLIFE" : i === timelineDotCount - 1 ? "LATER" : "";
            return (
              <React.Fragment key={i}>
                <div
                  style={{
                    position: "absolute",
                    left: x - 12,
                    top: timelineY,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "#5c4030",
                    border: "3px solid #f0e6d4",
                  }}
                />
                {label ? (
                  <div
                    style={{
                      position: "absolute",
                      left: x - 50,
                      top: timelineY + 36,
                      width: 100,
                      textAlign: "center",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: 18,
                      letterSpacing: 2,
                      color: "#3a2c22",
                      opacity: 0.85,
                    }}
                  >
                    {label}
                  </div>
                ) : null}
              </React.Fragment>
            );
          })}
        </AbsoluteFill>
      </AbsoluteFill>
    </FilmLook>
  );
};
