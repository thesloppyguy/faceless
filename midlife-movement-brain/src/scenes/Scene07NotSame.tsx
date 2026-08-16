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

export type Scene07Props = SceneLookProps & {
  continuityHoldFrames: number;
  panelsFrame: number;
  walkRingFrame: number;
  glucoseRingFrame: number;
  neqStampFrame: number;
  neqSettle: number;
  neqScale: number;
  ringPulse: number;
  panelDim: number;
  panelGap: number;
  walkScale: number;
  glucoseScale: number;
  deskTint: string;
};

export const Scene07NotSame: React.FC<Partial<Scene07Props>> = (props) => {
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
    panelsFrame = 2,
    walkRingFrame = 18,
    glucoseRingFrame = 28,
    neqStampFrame = 42,
    neqSettle = 1.18,
    neqScale = 1,
    ringPulse = 1,
    panelDim = 0.55,
    panelGap = 16,
    walkScale = 0.48,
    glucoseScale = 0.45,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.2, 0.3);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  // Hold Scene 06 icons briefly before panels (match-cut slope out at panelsFrame)
  const hold = continuityHoldFrames;
  const panelsOn = frame >= Math.max(hold, panelsFrame);
  const showSoloSlope = frame < Math.max(hold, panelsFrame);

  const walkRingOn = frame >= walkRingFrame;
  const glucoseRingOn = frame >= glucoseRingFrame;
  const neqOn = frame >= neqStampFrame;
  const neqSpr = springEntrance(frame, neqStampFrame);
  const settleKick =
    neqOn && frame < neqStampFrame + 6
      ? interpolate(
          frame,
          [neqStampFrame, neqStampFrame + 3, neqStampFrame + 6],
          [1, neqSettle, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        )
      : 1;

  const sidePad = 48;
  const panelW = (COMP_WIDTH - sidePad * 2 - panelGap) / 2;
  const panelTop = 480;
  const panelH = 900;

  const ringGlow = (on: boolean) =>
    on ? `0 0 ${18 * ringPulse}px rgba(255, 220, 140, ${0.75 * ringPulse})` : "none";

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

        {/* Continuity: Scene 06 end still (shallow slope + icons) for hold */}
        {showSoloSlope ? (
          <>
            <div
              style={{
                position: "absolute",
                left: (COMP_WIDTH - 420) / 2,
                top: 980,
                width: 420,
                height: 8,
                backgroundColor: "#6a6a70",
                borderRadius: 4,
                rotate: "4deg",
                transformOrigin: "left center",
                opacity: 0.85,
              }}
            />
            <Img
              src={staticFile("assets/prop-walk.png")}
              style={{
                position: "absolute",
                left: 80,
                top: 780,
                width: 480 * 0.55,
                height: "auto",
              }}
            />
            <Img
              src={staticFile("assets/prop-glucose.png")}
              style={{
                position: "absolute",
                left: 680,
                top: 760,
                width: 480 * 0.5,
                height: "auto",
              }}
            />
          </>
        ) : null}

        {panelsOn ? (
          <>
            <div
              style={{
                position: "absolute",
                left: sidePad,
                top: panelTop,
                width: panelW,
                height: panelH,
                backgroundColor: `rgba(240, 230, 212, ${0.55 + (1 - panelDim) * 0.4})`,
                border: "3px solid #5c4030",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                translate: `${boil.x * 0.3}px ${boil.y * 0.3}px`,
              }}
            >
              <div
                style={{
                  padding: 16,
                  borderRadius: "50%",
                  boxShadow: ringGlow(walkRingOn),
                  outline: walkRingOn ? `4px solid rgba(255, 200, 80, ${0.9 * ringPulse})` : "none",
                  outlineOffset: 8,
                }}
              >
                <Img
                  src={staticFile("assets/prop-walk.png")}
                  style={{ width: 420 * walkScale, height: "auto" }}
                />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: sidePad + panelW + panelGap,
                top: panelTop,
                width: panelW,
                height: panelH,
                backgroundColor: `rgba(232, 224, 210, ${0.55 + (1 - panelDim) * 0.4})`,
                border: "3px solid #5c4030",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                translate: `${-boil.x * 0.3}px ${boil.y * 0.3}px`,
              }}
            >
              <div
                style={{
                  padding: 16,
                  borderRadius: "50%",
                  boxShadow: ringGlow(glucoseRingOn),
                  outline: glucoseRingOn
                    ? `4px solid rgba(255, 200, 80, ${0.9 * ringPulse})`
                    : "none",
                  outlineOffset: 8,
                }}
              >
                <Img
                  src={staticFile("assets/prop-glucose.png")}
                  style={{ width: 420 * glucoseScale, height: "auto" }}
                />
              </div>
            </div>
          </>
        ) : null}

        {neqOn ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 70,
              top: 860,
              width: 140,
              height: 140,
              borderRadius: 16,
              backgroundColor: "#f0e6d4",
              border: "4px solid #5c4030",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#2a2018",
              opacity: neqSpr,
              scale: String(neqScale * settleKick * (0.85 + 0.15 * neqSpr)),
              translate: `${boil.x}px ${boil.y}px`,
              rotate: `${boil.rotation}deg`,
            }}
          >
            ≠
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
