import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { usePosterizeFrame } from "./engine";

export type FilmLookProps = {
  children: React.ReactNode;
  scanLines?: boolean;
  grain?: boolean;
  grunge?: boolean;
  vignette?: boolean;
  grade?: boolean;
  gateWeave?: boolean;
  gradeSaturate?: number;
  gradeContrast?: number;
  gradeSepia?: number;
  gradeBrightness?: number;
  gateTravelPx?: number;
  gateScale?: number;
};

/**
 * Aged-film wrapper (FILTER-CLINIC). Wrap any scene root.
 * Gate-weave rides 12fps posterize. Overlays are pointer-events none.
 */
export const FilmLook: React.FC<FilmLookProps> = ({
  children,
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
}) => {
  const frame = usePosterizeFrame();

  const weaveX = gateWeave ? Math.sin(frame * 0.9) * gateTravelPx : 0;
  const weaveY = gateWeave ? Math.cos(frame * 1.15) * gateTravelPx * 0.7 : 0;

  const gradeFilter = grade
    ? `saturate(${gradeSaturate}) contrast(${gradeContrast}) sepia(${gradeSepia}) brightness(${gradeBrightness})`
    : undefined;

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#000" }}>
      <AbsoluteFill
        style={{
          scale: String(gateWeave ? gateScale : 1),
          translate: `${weaveX}px ${weaveY}px`,
          filter: gradeFilter,
        }}
      >
        {children}
      </AbsoluteFill>
      {scanLines ? (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 1.6px, transparent 1.6px, transparent 8px)",
            filter: "blur(0.7px)",
            mixBlendMode: "multiply",
          }}
        />
      ) : null}
      {grain ? (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            opacity: 0.55,
            mixBlendMode: "multiply",
          }}
          hidden
        >
          <Img
            src={staticFile("assets/grain.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "invert(1) brightness(1.35) contrast(1.02)",
            }}
            hidden
          />
        </AbsoluteFill>
      ) : null}
      {grunge ? (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            opacity: 0.16,
            mixBlendMode: "color-burn",
          }}
        >
          <Img
            src={staticFile("assets/grunge.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            hidden
          />
        </AbsoluteFill>
      ) : null}
      {vignette ? (
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 92% 82% at 50% 48%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
          }}
          hidden
        />
      ) : null}
    </AbsoluteFill>
  );
};

export const filmLookSchemaShape = {
  scanLines: true as boolean,
  grain: true as boolean,
  grunge: true as boolean,
  vignette: true as boolean,
  grade: true as boolean,
  gateWeave: true as boolean,
  gradeSaturate: 0.86,
  gradeContrast: 1.08,
  gradeSepia: 0.16,
  gradeBrightness: 0.95,
  gateTravelPx: 5,
  gateScale: 1.012,
};
