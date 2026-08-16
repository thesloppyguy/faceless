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

export type Scene12Props = SceneLookProps & {
  cityFrame: number;
  cityScale: number;
  cityY: number;
  stampIntervalFrames: number;
  stampSettle: number;
  oneCityFrame: number;
  oneCohortFrame: number;
  cureallFrame: number;
  crossFrame: number;
  crossAngle: number;
  crossScale: number;
  cureallScale: number;
  deskTint: string;
};

export const Scene12OneCity: React.FC<Partial<Scene12Props>> = (props) => {
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
    cityFrame = 2,
    cityScale = 0.72,
    cityY = 520,
    stampIntervalFrames = 14,
    stampSettle = 1.12,
    oneCityFrame = 16,
    oneCohortFrame = 30,
    cureallFrame = 48,
    crossFrame = 62,
    crossAngle = -18,
    crossScale = 1.1,
    cureallScale = 0.55,
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.2, 0.3);
  const deskBoil = boilWobble(pFrame, 0.6, 0.18);

  const cityOn = frame >= cityFrame;
  const citySpr = springEntrance(frame, cityFrame);

  const stampKick = (start: number) =>
    frame >= start && frame < start + 6
      ? interpolate(frame, [start, start + 3, start + 6], [1, stampSettle, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  const oneCityOn = frame >= oneCityFrame;
  const oneCitySpr = springEntrance(frame, oneCityFrame);
  const oneCohortOn = frame >= oneCohortFrame;
  const oneCohortSpr = springEntrance(frame, oneCohortFrame);
  const cureOn = frame >= cureallFrame;
  const cureSpr = springEntrance(frame, cureallFrame);
  const crossOn = frame >= crossFrame;
  const crossSpr = springEntrance(frame, crossFrame);

  void stampIntervalFrames;

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
        <AbsoluteFill style={{ opacity: deskOpacity * 0.4 }}>
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

        {cityOn ? (
          <Img
            src={staticFile("assets/bg-city.png")}
            style={{
              position: "absolute",
              left: (COMP_WIDTH - 900 * cityScale) / 2,
              top: cityY,
              width: 900 * cityScale,
              height: "auto",
              opacity: citySpr,
              scale: String(0.92 + 0.08 * citySpr),
              translate: `${boil.x * 0.3}px ${boil.y * 0.3}px`,
            }}
          />
        ) : null}

        {oneCityOn ? (
          <div
            style={{
              position: "absolute",
              left: 120,
              top: 980,
              padding: "14px 28px",
              backgroundColor: "#f0e6d4",
              border: "3px solid #5c4030",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.25)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#2a2018",
              opacity: oneCitySpr,
              scale: String(stampKick(oneCityFrame) * (0.9 + 0.1 * oneCitySpr)),
              rotate: `${-4 + boil.rotation}deg`,
            }}
          >
            ONE CITY
          </div>
        ) : null}

        {oneCohortOn ? (
          <div
            style={{
              position: "absolute",
              left: 520,
              top: 1040,
              padding: "14px 28px",
              backgroundColor: "#f0e6d4",
              border: "3px solid #5c4030",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.25)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#2a2018",
              opacity: oneCohortSpr,
              scale: String(stampKick(oneCohortFrame) * (0.9 + 0.1 * oneCohortSpr)),
              rotate: `${3 + boil.rotation}deg`,
            }}
          >
            ONE COHORT
          </div>
        ) : null}

        {cureOn ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 140,
              top: 1280,
              width: 280,
              opacity: cureSpr,
              scale: String(0.9 + 0.1 * cureSpr),
            }}
          >
            <Img
              src={staticFile("assets/prop-cureall.png")}
              style={{
                width: 480 * cureallScale,
                height: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
            {crossOn ? (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "40%",
                  width: 160 * crossScale,
                  height: 18,
                  marginLeft: -80 * crossScale,
                  marginTop: -9,
                  backgroundColor: "#c0392b",
                  opacity: crossSpr,
                  rotate: `${crossAngle}deg`,
                  boxShadow: `0 0 0 0 #c0392b`,
                }}
              />
            ) : null}
            {crossOn ? (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "40%",
                  width: 160 * crossScale,
                  height: 18,
                  marginLeft: -80 * crossScale,
                  marginTop: -9,
                  backgroundColor: "#c0392b",
                  opacity: crossSpr,
                  rotate: `${-crossAngle}deg`,
                }}
              />
            ) : null}
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
