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

export type Scene08Props = SceneLookProps & {
  walkStartFrame: number;
  walkStepFrames: number;
  sitOpacity: number;
  captionFrame: number;
  captionY: number;
  captionSize: number;
  walkScale: number;
  walkY: number;
  sitScale: number;
  sitY: number;
  deskTint: string;
};

export const Scene08AnyMovement: React.FC<Partial<Scene08Props>> = (props) => {
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
    walkStartFrame = 12,
    walkStepFrames = 12,
    sitOpacity = 0.35,
    captionFrame = 52,
    captionY = 1480,
    captionSize = 42,
    walkScale = 0.7,
    walkY = 720,
    sitScale = 0.55,
    sitY = 900,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.3, 0.32);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  const walkStep =
    frame < walkStartFrame
      ? 0
      : Math.min(3, 1 + Math.floor((frame - walkStartFrame) / walkStepFrames));
  const walkX = walkStep === 0 ? 280 : walkStep === 1 ? 380 : walkStep === 2 ? 480 : 560;
  const walkOn = walkStep > 0;
  const captionOn = frame >= captionFrame;
  const captionSpr = springEntrance(frame, captionFrame);

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

        {/* Full-frame left-panel language */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 280,
            width: COMP_WIDTH - 96,
            height: 1380,
            backgroundColor: "rgba(240, 230, 212, 0.92)",
            border: "3px solid #5c4030",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
          }}
        />

        <Img
          src={staticFile("assets/prop-sit.png")}
          style={{
            position: "absolute",
            left: 340,
            top: sitY,
            width: 480 * sitScale,
            height: "auto",
            opacity: sitOpacity,
            filter: "grayscale(1)",
            translate: `${deskBoil.x * 0.3}px ${deskBoil.y * 0.3}px`,
          }}
        />

        {walkOn ? (
          <Img
            src={staticFile("assets/prop-walk.png")}
            style={{
              position: "absolute",
              left: walkX,
              top: walkY,
              width: 480 * walkScale,
              height: "auto",
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${boil.rotation}deg`,
            }}
          />
        ) : null}

        {captionOn ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 220,
              top: captionY,
              width: 440,
              padding: "16px 20px",
              textAlign: "center",
              backgroundColor: "#f0e6d4",
              border: "3px solid #5c4030",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.25)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: captionSize,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#2a2018",
              opacity: captionSpr,
              scale: String(0.9 + 0.1 * captionSpr),
              translate: `${boil.x * 0.3}px ${boil.y * 0.3}px`,
            }}
          >
            ANY MOVEMENT
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
