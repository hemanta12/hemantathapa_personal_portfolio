import { useEffect, useRef, useState } from "react";
import soccerIcon from "../../assets/soccer.png";
import { hero } from "../../data/content";

// Desktop frame constants
const DESKTOP_TOTAL_FRAMES = 360;
const DESKTOP_INITIAL_DELAY_MS = 2000;
const DESKTOP_LOOP_GAP_MS = 5000;
const DESKTOP_HOLD_FRAMES = 8;
const DESKTOP_BOUNCE_END = 150;
const DESKTOP_PHASE1_END = 220;
const DESKTOP_PHASE2_END = 286;
const DESKTOP_PHASE3_END = 330;

// Mobile frame constants (35% faster)
const MOBILE_TOTAL_FRAMES = 234;
const MOBILE_INITIAL_DELAY_MS = 1500;
const MOBILE_LOOP_GAP_MS = 3000;
const MOBILE_HOLD_FRAMES = 5;
const MOBILE_BOUNCE_END = 98;
const MOBILE_PHASE1_END = 143;
const MOBILE_PHASE2_END = 186;
const MOBILE_PHASE3_END = 215;

const getAnimationConstants = (isMobile: boolean) => {
  if (isMobile) {
    return {
      TOTAL_FRAMES: MOBILE_TOTAL_FRAMES,
      INITIAL_DELAY_MS: MOBILE_INITIAL_DELAY_MS,
      LOOP_GAP_MS: MOBILE_LOOP_GAP_MS,
      HOLD_FRAMES: MOBILE_HOLD_FRAMES,
      BOUNCE_END: MOBILE_BOUNCE_END,
      PHASE1_END: MOBILE_PHASE1_END,
      PHASE2_END: MOBILE_PHASE2_END,
      PHASE3_END: MOBILE_PHASE3_END,
      START_OFFSET_X: -8,
    };
  }
  return {
    TOTAL_FRAMES: DESKTOP_TOTAL_FRAMES,
    INITIAL_DELAY_MS: DESKTOP_INITIAL_DELAY_MS,
    LOOP_GAP_MS: DESKTOP_LOOP_GAP_MS,
    HOLD_FRAMES: DESKTOP_HOLD_FRAMES,
    BOUNCE_END: DESKTOP_BOUNCE_END,
    PHASE1_END: DESKTOP_PHASE1_END,
    PHASE2_END: DESKTOP_PHASE2_END,
    PHASE3_END: DESKTOP_PHASE3_END,
    START_OFFSET_X: 12,
  };
};

const LAND_RADIUS = 9;

// Trail drawing constants
const TRAIL_COLORS = {
  phase1: "rgba(74,104,128,",
  phase2: "rgba(107,93,181,",
  phase3: "rgba(107,93,181,",
} as const;

const TRAIL_MAX_LENGTHS = { phase1: 18, phase2: 14, phase3: 14 } as const;
const TRAIL_RADII = { phase1: 0.6, phase2: 1, phase3: 0.68 } as const;
const TRAIL_ALPHAS = { phase1: 0.18, phase2: 0.16, phase3: 0.16 } as const;

// Bezier control point constants
const BEZIER_CTRL_POINTS = {
  phase1YOffset: 90,
  phase3YOffset: 38,
} as const;

// Animation spin multipliers
const SPIN_MULTIPLIERS = {
  bounce: 1.5,
  phase1: 3,
  phase2: 4,
  phase3: 2.2,
} as const;

type TrailPoint = { x: number; y: number };

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 2);
}

function drawBall(
  ctx: CanvasRenderingContext2D,
  ballImage: HTMLImageElement,
  x: number,
  y: number,
  radius: number,
  spin: number,
): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(spin);

  ctx.shadowColor = "rgba(11,21,32,0.15)";
  ctx.shadowBlur = 4;
  const d = radius * 2;
  ctx.drawImage(ballImage, -radius, -radius, d, d);
  ctx.shadowBlur = 0;

  ctx.restore();
}

function drawTrail(
  ctx: CanvasRenderingContext2D,
  trail: TrailPoint[],
  radius: number,
  phase: "phase1" | "phase2" | "phase3",
): void {
  for (let i = 0; i < trail.length; i++) {
    const alpha = (i / trail.length) * TRAIL_ALPHAS[phase];
    ctx.beginPath();
    const trailRadius = phase === "phase2" ? 5.5 : radius * TRAIL_RADII[phase];
    ctx.arc(trail[i].x, trail[i].y, trailRadius, 0, Math.PI * 2);
    ctx.fillStyle = `${TRAIL_COLORS[phase]}${alpha})`;
    ctx.fill();
  }
}

function setTextOpacity(
  leftRef: React.RefObject<HTMLDivElement>,
  rightRef: React.RefObject<HTMLDivElement>,
  leftOpacity: string,
  rightOpacity: string,
): void {
  if (leftRef.current) leftRef.current.style.opacity = leftOpacity;
  if (rightRef.current) rightRef.current.style.opacity = rightOpacity;
}

function calculateBezierCurve(
  t: number,
  p0: number,
  p1: number,
  p2: number,
): number {
  return Math.pow(1 - t, 2) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
}

interface Props {
  showPhoto?: boolean;
}

const RoleTransition = ({ showPhoto = true }: Props): JSX.Element => {
  const [imgError, setImgError] = useState(false);

  const rowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const initialDelayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const loopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startAnimFnRef = useRef<(() => void) | null>(null);
  const ballImageRef = useRef<HTMLImageElement | null>(null);
  const isInitialDelayDoneRef = useRef(false);
  const animationLoopCountRef = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      if (leftTextRef.current) leftTextRef.current.style.opacity = "1";
      if (rightTextRef.current) rightTextRef.current.style.opacity = "1";
      return;
    }

    animationLoopCountRef.current = 0;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const constants = getAnimationConstants(isMobile);

    const canvas = canvasRef.current;
    const row = rowRef.current;
    if (!canvas || !row) return;

    const ballImage = new Image();
    ballImage.src = soccerIcon;
    ballImageRef.current = ballImage;

    const updateCanvasSize = () => {
      const rect = row.getBoundingClientRect();
      const dpr = Math.max(window.devicePixelRatio || 1, 1);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
    };

    const drawIdleBall = () => {
      if (isInitialDelayDoneRef.current) return;

      const ctx = canvas.getContext("2d");
      if (!ctx || !ballImageRef.current?.complete) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const rowRect = row.getBoundingClientRect();
      const leftRect = leftTextRef.current?.getBoundingClientRect();
      if (!leftRect) return;

      const startX = leftRect.right - rowRect.left;
      const launchStartX = startX + constants.START_OFFSET_X;
      const startY = leftRect.top + leftRect.height / 2 - rowRect.top;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall(ctx, ballImageRef.current, launchStartX, startY, 9, 0);
    };

    updateCanvasSize();
    ballImage.onload = drawIdleBall;
    drawIdleBall();

    const scheduleNextRun = () => {
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);

      animationLoopCountRef.current += 1;
      if (animationLoopCountRef.current < 3) {
        loopTimeoutRef.current = setTimeout(
          runAnimation,
          constants.LOOP_GAP_MS,
        );
      }
    };

    const runAnimation = () => {
      cancelAnimationFrame(animFrameRef.current);
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);

      setTextOpacity(leftTextRef, rightTextRef, "1", "0.2");

      const ctxRef = canvas.getContext("2d");
      if (!ctxRef) return;

      ctxRef.imageSmoothingEnabled = true;
      ctxRef.imageSmoothingQuality = "high";

      const rowRect = row.getBoundingClientRect();
      const leftRect = leftTextRef.current?.getBoundingClientRect();
      const rightRect = rightTextRef.current?.getBoundingClientRect();
      const photoRect = photoRef.current?.getBoundingClientRect();

      if (!leftRect || !rightRect || !photoRect) return;

      const photoX = photoRect.left + photoRect.width / 2 - rowRect.left;
      const photoY = photoRect.top + photoRect.height / 2 - rowRect.top;
      const startX = leftRect.right - rowRect.left;
      const launchStartX = startX + constants.START_OFFSET_X;
      const startY = leftRect.top + leftRect.height / 2 - rowRect.top;
      const endX = rightRect.right - rowRect.left + LAND_RADIUS;
      const endY = rightRect.top + rightRect.height / 2 - rowRect.top;
      const photoRadius = photoRect.width / 2;
      const borderX = photoX - photoRadius + 2;
      const orbitR = photoRadius + 6;

      let frame = 0;
      const trail1: TrailPoint[] = [];
      const trail2: TrailPoint[] = [];
      const trail3: TrailPoint[] = [];

      const tick = () => {
        frame++;

        if (frame > constants.TOTAL_FRAMES) {
          scheduleNextRun();
          return;
        }

        ctxRef.clearRect(0, 0, canvas.width, canvas.height);

        if (frame <= constants.HOLD_FRAMES) {
          // Spawn at end of "Full-Stack Engineer" before kickoff.
          if (ballImageRef.current?.complete) {
            drawBall(ctxRef, ballImageRef.current, launchStartX, startY, 9, 0);
          }
        } else if (frame <= constants.BOUNCE_END) {
          // Two slower, higher bounces near the Full-Stack text before launch.
          const p =
            (frame - constants.HOLD_FRAMES) /
            (constants.BOUNCE_END - constants.HOLD_FRAMES);
          const cycles = 2;
          const scaled = p * cycles;
          const cycleIndex = Math.min(Math.floor(scaled), cycles - 1);
          const cycleP = scaled - cycleIndex;
          const amp = 30;
          const hop = Math.sin(cycleP * Math.PI);

          const bx = launchStartX + cycleIndex * 2;
          const by = startY - hop * amp;
          const spin = p * Math.PI * SPIN_MULTIPLIERS.bounce;

          if (ballImageRef.current?.complete) {
            drawBall(ctxRef, ballImageRef.current, bx, by, 9, spin);
          }
        } else if (frame <= constants.PHASE1_END) {
          // Phase 1: launch from Full-Stack text to profile border.
          const p =
            (frame - constants.BOUNCE_END) /
            (constants.PHASE1_END - constants.BOUNCE_END);
          const t = easeInOut(p);
          const ctrlX = (startX + borderX) / 2;
          const ctrlY =
            Math.min(startY, photoY) - BEZIER_CTRL_POINTS.phase1YOffset;

          const bx = calculateBezierCurve(t, launchStartX, ctrlX, borderX);
          const by = calculateBezierCurve(t, startY, ctrlY, photoY);

          const spin = t * Math.PI * SPIN_MULTIPLIERS.phase1;
          const radius = 9 - t * 1.5;

          trail1.push({ x: bx, y: by });
          if (trail1.length > TRAIL_MAX_LENGTHS.phase1) trail1.shift();

          drawTrail(ctxRef, trail1, radius, "phase1");

          if (ballImageRef.current?.complete) {
            drawBall(ctxRef, ballImageRef.current, bx, by, radius, spin);
          }
        } else if (frame <= constants.PHASE2_END) {
          // Phase 2: spin around the profile frame once.
          const p =
            (frame - constants.PHASE1_END) /
            (constants.PHASE2_END - constants.PHASE1_END);
          const t = easeInOut(p);
          const angle = Math.PI + t * Math.PI * 2;

          const bx = photoX + Math.cos(angle) * orbitR;
          const by = photoY + Math.sin(angle) * orbitR;

          ctxRef.beginPath();
          ctxRef.arc(photoX, photoY, orbitR, Math.PI, angle);
          ctxRef.strokeStyle = "rgba(107,93,181,0.25)";
          ctxRef.lineWidth = 1.5;
          ctxRef.stroke();

          trail2.push({ x: bx, y: by });
          if (trail2.length > TRAIL_MAX_LENGTHS.phase2) trail2.shift();

          drawTrail(ctxRef, trail2, 9, "phase2");

          if (ballImageRef.current?.complete) {
            drawBall(
              ctxRef,
              ballImageRef.current,
              bx,
              by,
              9,
              t * Math.PI * SPIN_MULTIPLIERS.phase2,
            );
          }

          // Cross-fade roles during orbit, as before.
          const roleT = Math.min(p * 2, 1);
          setTextOpacity(
            leftTextRef,
            rightTextRef,
            String(1 - 0.8 * roleT),
            String(0.2 + 0.8 * roleT),
          );
        } else if (frame <= constants.PHASE3_END) {
          // Phase 3: launch from profile frame to AI Engineer text.
          const p =
            (frame - constants.PHASE2_END) /
            (constants.PHASE3_END - constants.PHASE2_END);
          const t = easeOut(p);
          const ctrlX = (borderX + endX) / 2;
          const ctrlY = photoY - BEZIER_CTRL_POINTS.phase3YOffset;

          const bx = calculateBezierCurve(t, borderX, ctrlX, endX);
          const by = calculateBezierCurve(t, photoY, ctrlY, endY);

          const spin = t * Math.PI * SPIN_MULTIPLIERS.phase3;
          const radius = Math.max(9 - t * 1.2, 7);

          ctxRef.beginPath();
          ctxRef.arc(photoX, photoY, orbitR, 0, Math.PI * 2);
          ctxRef.strokeStyle = "rgba(107,93,181,0.15)";
          ctxRef.lineWidth = 1.5;
          ctxRef.stroke();

          trail3.push({ x: bx, y: by });
          if (trail3.length > TRAIL_MAX_LENGTHS.phase3) trail3.shift();

          drawTrail(ctxRef, trail3, radius, "phase3");

          if (ballImageRef.current?.complete) {
            drawBall(ctxRef, ballImageRef.current, bx, by, radius, spin);
          }

          setTextOpacity(leftTextRef, rightTextRef, "0.2", "1");
        } else {
          // Phase 3: settle — ball stays landed in AI text.

          if (ballImageRef.current?.complete) {
            drawBall(ctxRef, ballImageRef.current, endX, endY, LAND_RADIUS, 0);
          }

          setTextOpacity(leftTextRef, rightTextRef, "0.2", "1");
        }

        animFrameRef.current = requestAnimationFrame(tick);
      };

      animFrameRef.current = requestAnimationFrame(tick);
    };

    startAnimFnRef.current = runAnimation;

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
      drawIdleBall();
    });
    resizeObserver.observe(row);

    // Set initial right text opacity
    setTextOpacity(leftTextRef, rightTextRef, "1", "0.2");

    initialDelayTimeoutRef.current = setTimeout(() => {
      isInitialDelayDoneRef.current = true;
      runAnimation();
    }, constants.INITIAL_DELAY_MS);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
      if (initialDelayTimeoutRef.current)
        clearTimeout(initialDelayTimeoutRef.current);
      ballImage.onload = null;
      resizeObserver.disconnect();
    };
  }, []);

  const handleRowHover = () => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !startAnimFnRef.current ||
      !isInitialDelayDoneRef.current
    )
      return;

    if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
    startAnimFnRef.current();
  };

  return (
    <div
      ref={rowRef}
      className="role-transition-row"
      onMouseEnter={handleRowHover}
      aria-label="Full-Stack Engineer evolving to AI Engineer"
    >
      <div ref={leftTextRef} className="role-text role-text--left">
        Full-Stack
        <br />
        Engineer
      </div>

      <div ref={photoRef} className="hero-photo-circle">
        {showPhoto && !imgError ? (
          <img
            src={hero.profileImage}
            alt="Portrait of Hemanta Thapa"
            loading="eager"
            width={400}
            height={400}
            onError={() => setImgError(true)}
          />
        ) : (
          <span>HT</span>
        )}
      </div>

      <div ref={rightTextRef} className="role-text role-text--right">
        AI
        <br />
        Engineer
      </div>

      <canvas
        ref={canvasRef}
        className="role-transition-canvas"
        aria-hidden="true"
      />
    </div>
  );
};

export default RoleTransition;
