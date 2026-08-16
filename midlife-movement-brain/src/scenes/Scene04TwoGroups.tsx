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

export type Scene04Props = SceneLookProps & {
  splitStartFrame: number;
  splitStepFrames: number;
  panelGap: number;
  silhouetteScale: number;
  silhouetteFrame: number;
  halfBadgeFrame: number;
  ageBadgeFrame: number;
  ageBadgeY: number;
  labelSize: number;
  ageSize: number;
  leftLabel: string;
  rightLabel: string;
  deskTint: string;
};

const SilhouetteStack: React.FC<{ scale: number; color: string }> = ({ scale, color }) => {
  const people = [
    { x: 0, y: 40, s: 1 },
    { x: -36, y: 70, s: 0.85 },
    { x: 36, y: 70, s: 0.85 },
    { x: -20, y: 110, s: 0.7 },
    { x: 20, y: 110, s: 0.7 },
  ];
  return (
    <div style={{ position: "relative", width: 120 * scale, height: 160 * scale }}>
      {people.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 60 * scale + p.x * scale,
            top: p.y * scale,
            width: 28 * scale * p.s,
            height: 48 * scale * p.s,
            marginLeft: -14 * scale * p.s,
            backgroundColor: color,
            borderRadius: `${12 * scale * p.s}px ${12 * scale * p.s}px 4px 4px`,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: -14 * scale * p.s,
              width: 16 * scale * p.s,
              height: 16 * scale * p.s,
              marginLeft: -8 * scale * p.s,
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export const Scene04TwoGroups: React.FC<Partial<Scene04Props>> = (props) => {
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
    splitStartFrame = 4,
    splitStepFrames = 8,
    panelGap = 16,
    silhouetteScale = 1.4,
    silhouetteFrame = 20,
    halfBadgeFrame = 36,
    ageBadgeFrame = 52,
    ageBadgeY = 1580,
    labelSize = 28,
    ageSize = 56,
    leftLabel = "Hispanic / Mexican American",
    rightLabel = "Non-Hispanic white",
    deskTint = "#c4a882",
  } = props;

  const frame = useCurrentFrame();
  const pFrame = usePosterizeFrame();
  const boil = boilWobble(pFrame, 1.1, 0.28);
  const deskBoil = boilWobble(pFrame, 0.7, 0.2);

  const leftOn = frame >= splitStartFrame;
  const rightOn = frame >= splitStartFrame + splitStepFrames;
  const silOn = frame >= silhouetteFrame;
  const silSpr = springEntrance(frame, silhouetteFrame);
  const halfOn = frame >= halfBadgeFrame;
  const halfSpr = springEntrance(frame, halfBadgeFrame);
  const ageOn = frame >= ageBadgeFrame;
  const ageSpr = springEntrance(frame, ageBadgeFrame);

  const sidePad = 48;
  const panelW = (COMP_WIDTH - sidePad * 2 - panelGap) / 2;
  const panelTop = 420;
  const panelH = 980;

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

        {leftOn ? (
          <div
            style={{
              position: "absolute",
              left: sidePad,
              top: panelTop,
              width: panelW,
              height: panelH,
              backgroundColor: "rgba(240, 230, 212, 0.92)",
              border: "3px solid #5c4030",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
              translate: `${boil.x * 0.3}px ${boil.y * 0.3}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 36,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: labelSize,
                color: "#3a2c22",
                textAlign: "center",
                padding: "0 16px",
                lineHeight: 1.25,
                marginBottom: 40,
              }}
            >
              {leftLabel}
            </div>
            {silOn ? (
              <div style={{ opacity: silSpr, scale: String(0.9 + 0.1 * silSpr) }}>
                <SilhouetteStack scale={silhouetteScale} color="#4a3728" />
              </div>
            ) : null}
            {halfOn ? (
              <div
                style={{
                  marginTop: 48,
                  padding: "10px 22px",
                  backgroundColor: "#e8d4b8",
                  border: "2px solid #5c4030",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: "#2a2018",
                  opacity: halfSpr,
                  rotate: `${-2 + boil.rotation}deg`,
                }}
              >
                HALF
              </div>
            ) : null}
          </div>
        ) : null}

        {rightOn ? (
          <div
            style={{
              position: "absolute",
              left: sidePad + panelW + panelGap,
              top: panelTop,
              width: panelW,
              height: panelH,
              backgroundColor: "rgba(232, 224, 210, 0.92)",
              border: "3px solid #5c4030",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
              translate: `${-boil.x * 0.3}px ${boil.y * 0.3}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 36,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: labelSize,
                color: "#3a2c22",
                textAlign: "center",
                padding: "0 16px",
                lineHeight: 1.25,
                marginBottom: 40,
              }}
            >
              {rightLabel}
            </div>
            {silOn ? (
              <div style={{ opacity: silSpr, scale: String(0.9 + 0.1 * silSpr) }}>
                <SilhouetteStack scale={silhouetteScale} color="#5a4a3a" />
              </div>
            ) : null}
            {halfOn ? (
              <div
                style={{
                  marginTop: 48,
                  padding: "10px 22px",
                  backgroundColor: "#e8d4b8",
                  border: "2px solid #5c4030",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: "#2a2018",
                  opacity: halfSpr,
                  rotate: `${2 + boil.rotation}deg`,
                }}
              >
                HALF
              </div>
            ) : null}
          </div>
        ) : null}

        {ageOn ? (
          <div
            style={{
              position: "absolute",
              left: COMP_WIDTH / 2 - 90,
              top: ageBadgeY,
              width: 180,
              padding: "14px 0",
              textAlign: "center",
              backgroundColor: "#f0e6d4",
              border: "3px solid #5c4030",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.25)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: ageSize,
              fontWeight: 700,
              color: "#2a2018",
              opacity: ageSpr,
              scale: String(0.85 + 0.15 * ageSpr),
              translate: `${boil.x * 0.2}px ${boil.y * 0.2}px`,
            }}
          >
            ~58
          </div>
        ) : null}
      </AbsoluteFill>
    </FilmLook>
  );
};
