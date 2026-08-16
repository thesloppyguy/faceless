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

export type Scene10Props = SceneLookProps & {
  continuityHoldFrames: number;
  thresholdFrame: number;
  thresholdScale: number;
  thresholdSettle: number;
  brainFrame: number;
  brainX: number;
  brainY: number;
  brainScale: number;
  brainOpacityStart: number;
  brainOpacityEnd: number;
  thresholdY: number;
  numberSize: number;
  unitSize: number;
  deskTint: string;
};

export const Scene10Threshold: React.FC<Partial<Scene10Props>> = (props) => {
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
    thresholdFrame = 1,
    thresholdScale = 1,
    thresholdSettle = 1.15,
    brainFrame = 28,
    brainX = 700,
    brainY = 820,
    brainScale = 0.4,
    brainOpacityStart = 0.55,
    brainOpacityEnd = 0.92,
    thresholdY = 780,
    numberSize = 140,
    unitSize = 36,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.2, 0.3);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  const hold = continuityHoldFrames;
  const showMeterHold = frame < hold;
  const threshOn = frame >= Math.max(hold, thresholdFrame);
  const threshSpr = springEntrance(frame, Math.max(hold, thresholdFrame));
  const settleKick =
    threshOn && frame < Math.max(hold, thresholdFrame) + 6
      ? interpolate(
          frame,
          [
            Math.max(hold, thresholdFrame),
            Math.max(hold, thresholdFrame) + 3,
            Math.max(hold, thresholdFrame) + 6,
          ],
          [1, thresholdSettle, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        )
      : 1;

  const brainOn = frame >= brainFrame;
  const brainSpr = springEntrance(frame, brainFrame);
  const brainOpacity = brainOn
    ? interpolate(
        frame,
        [brainFrame, brainFrame + 12],
        [brainOpacityStart, brainOpacityEnd],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
      )
    : 0;

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

        {/* 1-frame continuity: Scene 09 meter still */}
        {showMeterHold ? (
          <>
            <Img
              src={staticFile("assets/prop-meter.png")}
              style={{
                position: "absolute",
                left: 250,
                top: 620,
                width: 420,
                height: "auto",
              }}
            />
            <Img
              src={staticFile("assets/prop-glucose.png")}
              style={{
                position: "absolute",
                left: 620,
                top: 780,
                width: 260,
                height: "auto",
              }}
            />
          </>
        ) : null}

        {threshOn ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 260,
              top: thresholdY,
              width: 520,
              padding: "36px 28px 28px",
              textAlign: "center",
              backgroundColor: "#f0e6d4",
              border: "4px solid #5c4030",
              boxShadow: "5px 5px 0 rgba(0,0,0,0.28)",
              opacity: threshSpr,
              scale: String(thresholdScale * settleKick * (0.88 + 0.12 * threshSpr)),
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${boil.rotation * 0.5}deg`,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: numberSize,
                fontWeight: 700,
                color: "#2a2018",
                lineHeight: 1,
              }}
            >
              ≤ 126
            </div>
            <div
              style={{
                marginTop: 12,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: unitSize,
                letterSpacing: 3,
                color: "#5c4030",
              }}
            >
              mg/dL
            </div>
          </div>
        ) : null}

        {brainOn ? (
          <Img
            src={staticFile("assets/prop-brain.png")}
            style={{
              position: "absolute",
              left: brainX,
              top: brainY,
              width: 420 * brainScale,
              height: "auto",
              opacity: brainOpacity * brainSpr,
              translate: `${-boil.x * 0.5}px ${boil.y * 0.5}px`,
              rotate: `${-boil.rotation}deg`,
            }}
          />
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
