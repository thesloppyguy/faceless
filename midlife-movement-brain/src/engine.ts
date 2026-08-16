import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const COMP_WIDTH = 1080;
export const COMP_HEIGHT = 1920;
export const FPS = 30;
export const POSTERIZE_FPS = 12;

/** Snap timeline frame to stop-motion steps (12fps on a 30fps timeline). */
export const posterizeFrame = (frame: number, posterizeFps = POSTERIZE_FPS, fps = FPS) => {
  const step = fps / posterizeFps;
  return Math.floor(frame / step) * step;
};

export const usePosterizeFrame = (posterizeFps = POSTERIZE_FPS) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return posterizeFrame(frame, posterizeFps, fps);
};

/** Deterministic boil wobble from posterized time. Never Math.random. */
export const boilWobble = (
  frame: number,
  intensity = 1.5,
  speed = 0.35,
): { x: number; y: number; rotation: number } => {
  const t = posterizeFrame(frame) * speed;
  return {
    x: Math.sin(t * 1.7) * intensity,
    y: Math.cos(t * 2.3) * intensity * 0.8,
    rotation: Math.sin(t * 1.1) * intensity * 0.15,
  };
};

/** Slow ambient drift (posterized). */
export const slowDrift = (
  frame: number,
  ampX = 8,
  ampY = 6,
  speed = 0.08,
): { x: number; y: number } => {
  const t = posterizeFrame(frame) * speed;
  return {
    x: Math.sin(t) * ampX,
    y: Math.cos(t * 0.7) * ampY,
  };
};

/** Ping-pong 0→1→0 oscillator on posterized time. */
export const pingpong = (frame: number, periodFrames = 60) => {
  const f = posterizeFrame(frame);
  const cycle = ((f % periodFrames) + periodFrames) % periodFrames;
  const half = periodFrames / 2;
  return cycle < half ? cycle / half : 1 - (cycle - half) / half;
};

/** Spring entrance progress 0→1 for popping props into place. */
export const springEntrance = (
  frame: number,
  delay = 0,
  fps = FPS,
  config: { damping?: number; stiffness?: number; mass?: number } = {},
) => {
  return spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {
      damping: config.damping ?? 14,
      stiffness: config.stiffness ?? 120,
      mass: config.mass ?? 0.8,
    },
  });
};

/** Linear map helper (no CSS transitions for motion). */
export const mapRange = (
  frame: number,
  input: [number, number],
  output: [number, number],
  clamp = true,
) =>
  interpolate(frame, input, output, {
    extrapolateLeft: clamp ? "clamp" : "extend",
    extrapolateRight: clamp ? "clamp" : "extend",
  });

export const SAFE = {
  side: 80,
  top: 100,
  bottom: 100,
} as const;
