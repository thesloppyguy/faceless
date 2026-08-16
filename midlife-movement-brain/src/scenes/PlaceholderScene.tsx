import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { FilmLook, type FilmLookProps } from "../FilmLook";
import { COMP_HEIGHT, COMP_WIDTH, boilWobble, usePosterizeFrame } from "../engine";

export type SceneLookProps = {
  deskOpacity: number;
  scanLines: boolean;
  grain: boolean;
  grunge: boolean;
  vignette: boolean;
  grade: boolean;
  gateWeave: boolean;
  gradeSaturate: number;
  gradeContrast: number;
  gradeSepia: number;
  gradeBrightness: number;
  gateTravelPx: number;
  gateScale: number;
};

type PlaceholderSceneProps = SceneLookProps & {
  label: string;
  sceneId: string;
};

export const PlaceholderScene: React.FC<PlaceholderSceneProps> = ({
  label,
  sceneId,
  deskOpacity,
  ...look
}) => {
  const frame = usePosterizeFrame();
  const boil = boilWobble(frame, 1.2, 0.3);

  const filmProps: Omit<FilmLookProps, "children"> = {
    scanLines: look.scanLines,
    grain: look.grain,
    grunge: look.grunge,
    vignette: look.vignette,
    grade: look.grade,
    gateWeave: look.gateWeave,
    gradeSaturate: look.gradeSaturate,
    gradeContrast: look.gradeContrast,
    gradeSepia: look.gradeSepia,
    gradeBrightness: look.gradeBrightness,
    gateTravelPx: look.gateTravelPx,
    gateScale: look.gateScale,
  };

  return (
    <FilmLook {...filmProps}>
      <AbsoluteFill
        style={{
          width: COMP_WIDTH,
          height: COMP_HEIGHT,
          backgroundColor: "#2a241c",
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
              translate: `${boil.x}px ${boil.y}px`,
            }}
          />
        </AbsoluteFill>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 80,
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "#f3ebe0",
              textAlign: "center",
              translate: `${boil.x * 0.5}px ${boil.y * 0.5}px`,
              rotate: `${boil.rotation}deg`,
            }}
          >
            <div style={{ fontSize: 28, letterSpacing: 4, opacity: 0.7, marginBottom: 16 }}>
              {sceneId}
            </div>
            <div style={{ fontSize: 52, lineHeight: 1.2 }}>{label}</div>
            <div style={{ fontSize: 24, marginTop: 24, opacity: 0.55 }}>
              Placeholder · build-scene next
            </div>
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
    </FilmLook>
  );
};
