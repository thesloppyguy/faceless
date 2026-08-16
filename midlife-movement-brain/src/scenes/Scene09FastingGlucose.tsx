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

export type Scene09Props = SceneLookProps & {
  meterFrame: number;
  needleStartFrame: number;
  needleStepFrames: number;
  needleAngleStart: number;
  needleAngleMid: number;
  needleAngleEnd: number;
  greenZoneStart: number;
  greenZoneEnd: number;
  glucoseScale: number;
  glucoseX: number;
  glucoseY: number;
  meterScale: number;
  meterY: number;
  captionFrame: number;
  captionY: number;
  captionSize: number;
  deskTint: string;
};

export const Scene09FastingGlucose: React.FC<Partial<Scene09Props>> = (props) => {
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
    meterFrame = 4,
    needleStartFrame = 18,
    needleStepFrames = 12,
    needleAngleStart = -50,
    needleAngleMid = -10,
    needleAngleEnd = 25,
    greenZoneStart = -5,
    greenZoneEnd = 45,
    glucoseScale = 0.55,
    glucoseX = 620,
    glucoseY = 780,
    meterScale = 1,
    meterY = 620,
    captionFrame = 55,
    captionY = 1480,
    captionSize = 40,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.2, 0.3);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  const meterOn = frame >= meterFrame;
  const meterSpr = springEntrance(frame, meterFrame);

  const needleStage =
    frame < needleStartFrame
      ? 0
      : Math.min(2, Math.floor((frame - needleStartFrame) / needleStepFrames));
  const needleAngle =
    needleStage === 0
      ? needleAngleStart
      : needleStage === 1
        ? needleAngleMid
        : needleAngleEnd;

  const captionOn = frame >= captionFrame;
  const captionSpr = springEntrance(frame, captionFrame);

  const meterSize = 420 * meterScale;
  const meterLeft = (COMP_WIDTH - meterSize) / 2 - 80;

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
            left: 48,
            top: 280,
            width: COMP_WIDTH - 96,
            height: 1380,
            backgroundColor: "rgba(232, 224, 210, 0.92)",
            border: "3px solid #5c4030",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
          }}
        />

        {meterOn ? (
          <div
            style={{
              position: "absolute",
              left: meterLeft,
              top: meterY,
              width: meterSize,
              height: meterSize,
              opacity: meterSpr,
              scale: String(0.9 + 0.1 * meterSpr),
              translate: `${boil.x * 0.4}px ${boil.y * 0.4}px`,
            }}
          >
            <Img
              src={staticFile("assets/prop-meter.png")}
              style={{ width: "100%", height: "auto" }}
            />
            {/* Green zone arc hint */}
            <div
              style={{
                position: "absolute",
                left: "18%",
                top: "18%",
                width: "64%",
                height: "64%",
                borderRadius: "50%",
                border: "10px solid transparent",
                borderTopColor: "rgba(70, 150, 90, 0.55)",
                borderRightColor: "rgba(70, 150, 90, 0.35)",
                rotate: `${(greenZoneStart + greenZoneEnd) / 4}deg`,
                pointerEvents: "none",
              }}
            />
            {/* Needle */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 8,
                height: meterSize * 0.32,
                marginLeft: -4,
                marginTop: -meterSize * 0.32,
                backgroundColor: "#2a2018",
                borderRadius: 4,
                transformOrigin: "bottom center",
                rotate: `${needleAngle}deg`,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 22,
                height: 22,
                marginLeft: -11,
                marginTop: -11,
                borderRadius: "50%",
                backgroundColor: "#5c4030",
              }}
            />
          </div>
        ) : null}

        {meterOn ? (
          <Img
            src={staticFile("assets/prop-glucose.png")}
            style={{
              position: "absolute",
              left: glucoseX,
              top: glucoseY,
              width: 480 * glucoseScale,
              height: "auto",
              opacity: meterSpr,
              translate: `${-boil.x}px ${boil.y}px`,
              rotate: `${-boil.rotation}deg`,
            }}
          />
        ) : null}

        {captionOn ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 240,
              top: captionY,
              width: 480,
              padding: "16px 18px",
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
            }}
          >
            FASTING GLUCOSE
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
