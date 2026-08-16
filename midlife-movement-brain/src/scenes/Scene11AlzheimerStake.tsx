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

export type Scene11Props = SceneLookProps & {
  mapFrame: number;
  mapScale: number;
  mapY: number;
  mapOpacity: number;
  counterStartFrame: number;
  counterStepFrames: number;
  counterValue1: string;
  counterValue2: string;
  counterValue3: string;
  counterY: number;
  counterSize: number;
  deskTint: string;
};

export const Scene11AlzheimerStake: React.FC<Partial<Scene11Props>> = (props) => {
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
    mapFrame = 4,
    mapScale = 0.95,
    mapY = 520,
    mapOpacity = 0.95,
    counterStartFrame = 28,
    counterStepFrames = 14,
    counterValue1 = "2.1M",
    counterValue2 = "4.4M",
    counterValue3 = "6.7M",
    counterY = 1280,
    counterSize = 96,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.1, 0.28);
  const deskBoil = boilWobble(pFrame, 0.6, 0.18);

  const mapOn = frame >= mapFrame;
  const mapSpr = springEntrance(frame, mapFrame);

  const counterStage =
    frame < counterStartFrame
      ? -1
      : Math.min(2, Math.floor((frame - counterStartFrame) / counterStepFrames));
  const counterLabel =
    counterStage < 0
      ? null
      : counterStage === 0
        ? counterValue1
        : counterStage === 1
          ? counterValue2
          : counterValue3;

  const values = [counterValue1, counterValue2, counterValue3];

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

        {mapOn ? (
          <Img
            src={staticFile("assets/prop-us-map.png")}
            style={{
              position: "absolute",
              left: (COMP_WIDTH - 900 * mapScale) / 2,
              top: mapY,
              width: 900 * mapScale,
              height: "auto",
              opacity: mapOpacity * mapSpr,
              scale: String(0.92 + 0.08 * mapSpr),
              translate: `${boil.x * 0.4}px ${boil.y * 0.3}px`,
            }}
          />
        ) : null}

        {/* People-dot stack hint under counter */}
        {counterStage >= 0 ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 90,
              top: counterY - 70,
              width: 180,
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              justifyContent: "center",
              opacity: 0.45,
            }}
          >
            {Array.from({ length: 8 + counterStage * 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#5c4030",
                }}
              />
            ))}
          </div>
        ) : null}

        {counterLabel ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 180,
              top: counterY,
              width: 360,
              padding: "18px 12px",
              textAlign: "center",
              backgroundColor: "#f0e6d4",
              border: "4px solid #5c4030",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.28)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: counterSize,
              fontWeight: 700,
              color: "#2a2018",
              letterSpacing: 2,
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${boil.rotation * 0.4}deg`,
            }}
          >
            {counterLabel}
            <span style={{ display: "none" }}>{values.join(",")}</span>
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
