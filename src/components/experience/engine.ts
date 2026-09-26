import { BRAND } from "@/lib/site";

/**
 * One rAF loop drives the whole page: it measures scroll progress for every
 * `[data-scene]` element, writes it to that element as `--p` (0..1) so CSS can
 * scrub transforms, and paints the luminous thread on a fixed canvas.
 *
 * Scenes (in page order) and what the thread does in each:
 *   hero     K0 calm wave        -> K1 stretched line
 *   stage    K1                  -> K2 voice waveform behind the phone
 *   connect  K2 -> K3 two strands reaching -> K4 braided together
 *   reveal   K4                  -> K5 vertical editorial spine (dark -> light)
 *   finale   K5                  -> K6 the logo's two interlocking rings
 *
 * Native scrolling only: nothing here intercepts wheel/touch or snaps.
 */

type Mode = "sticky" | "enter";

interface Scene {
  el: HTMLElement;
  name: string;
  mode: Mode;
  top: number;
  height: number;
  p: number;
}

const N = 220;
const clamp = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const smooth = (v: number) => v * v * (3 - 2 * v);
const easeInOut = (v: number) => (v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2);
const TAU = Math.PI * 2;

interface Strands {
  x1: Float32Array;
  y1: Float32Array;
  x2: Float32Array;
  y2: Float32Array;
  alpha: number;
  closed: boolean;
}

const makeStrands = (): Strands => ({
  x1: new Float32Array(N),
  y1: new Float32Array(N),
  x2: new Float32Array(N),
  y2: new Float32Array(N),
  alpha: 1,
  closed: false,
});

interface Layout {
  W: number;
  H: number;
  mobile: boolean;
  phoneX: number;
  waveStart: number;
  ringsY: number;
}

function keyframe(k: number, L: Layout, t: number, o: Strands) {
  const { W, H, mobile } = L;
  o.alpha = 1;
  o.closed = false;
  for (let i = 0; i < N; i++) {
    const u = i / (N - 1);
    const xs = -0.08 * W + u * 1.16 * W;
    switch (k) {
      case 0: {
        // Calm signal: a slow, breathing wave low in the hero.
        const y0 = H * (mobile ? 0.3 : 0.33);
        const w =
          Math.sin(TAU * 1.05 * u + t * 0.35) * 0.055 * H +
          Math.sin(TAU * 2.6 * u - t * 0.5) * 0.016 * H;
        o.x1[i] = xs;
        o.y1[i] = y0 + w;
        o.x2[i] = xs;
        o.y2[i] = y0 + w * 0.55 + Math.sin(TAU * 1.6 * u + t * 0.3 + 1.2) * 0.03 * H;
        break;
      }
      case 1: {
        // Stretched: the wave pulls taut across the middle of the screen.
        const y0 = H * 0.5;
        const w = Math.sin(TAU * 0.5 * u + t * 0.2) * 0.012 * H;
        o.x1[i] = xs;
        o.y1[i] = y0 + w;
        o.x2[i] = xs;
        o.y2[i] = y0 + w * 0.7 + 0.004 * H;
        break;
      }
      case 2: {
        // Voice waveform, strongest behind the phone, mirrored for symmetry. On
        // desktop it retracts to the phone's side so it never crosses the copy.
        const x = mobile ? xs : L.waveStart + u * (1.08 * W - L.waveStart);
        const d = (x - L.phoneX) / (W * (mobile ? 0.5 : 0.3));
        const env = Math.exp(-d * d * 2.2);
        const osc =
          Math.sin(TAU * u * (mobile ? 16 : 26) + t * 2.4) *
          (0.55 + 0.45 * Math.sin(TAU * u * 5 - t * 1.3));
        const a = env * (mobile ? 0.13 : 0.17) * H * osc;
        o.x1[i] = x;
        o.y1[i] = H * 0.5 + a;
        o.x2[i] = x;
        o.y2[i] = H * 0.5 - a;
        break;
      }
      case 3: {
        // Two people: separate strands reaching in from each edge.
        const y0 = H * (mobile ? 0.58 : 0.52);
        o.x1[i] = -0.1 * W + u * 0.42 * W;
        o.y1[i] = y0 + Math.sin(TAU * 1.2 * u + t * 0.6) * 0.03 * H;
        o.x2[i] = 1.1 * W - u * 0.42 * W;
        o.y2[i] = y0 + Math.sin(TAU * 1.2 * u - t * 0.6 + 1) * 0.03 * H;
        break;
      }
      case 4: {
        // Connected: both strands span the screen, braided around each other.
        const y0 = H * (mobile ? 0.58 : 0.52);
        const x = xs;
        const b = Math.sin(TAU * 2.2 * (x / W) + t * 0.8) * 0.05 * H;
        o.x1[i] = x;
        o.y1[i] = y0 + b;
        const xr = 1.08 * W - u * 1.16 * W;
        const br = Math.sin(TAU * 2.2 * (xr / W) + t * 0.8) * 0.05 * H;
        o.x2[i] = xr;
        o.y2[i] = y0 - br;
        break;
      }
      case 5: {
        // Editorial spine: a quiet vertical line in the left margin.
        const x0 = mobile ? W * 0.035 : W * 0.06;
        // Strand 2 runs bottom-up so the braid folds into the spine without crossing.
        const y = -0.08 * H + u * 1.16 * H;
        const s = Math.sin(TAU * 0.8 * u + t * 0.25) * (mobile ? 3 : 10);
        o.x1[i] = x0 + s;
        o.y1[i] = y;
        const yb = 1.08 * H - u * 1.16 * H;
        const sb = Math.sin(TAU * 0.8 * (1 - u) + t * 0.25) * (mobile ? 3 : 10);
        o.x2[i] = x0 + sb * 0.4 + (mobile ? 2 : 5);
        o.y2[i] = yb;
        o.alpha = 0.55;
        break;
      }
      case 6: {
        // Resolution: the two rings of the Empath mark, around the CTA.
        const S = Math.min(W * 0.3, H * 0.36);
        const cx = W * 0.5;
        const cy = L.ringsY;
        const th = TAU * u + t * 0.04;
        ellipse(o.x1, o.y1, i, th, cx - 0.36 * S, cy + 0.16 * S, 1.08 * S, 0.72 * S, -0.3);
        ellipse(o.x2, o.y2, i, th + 1.9, cx + 0.34 * S, cy - 0.18 * S, 0.66 * S, 1.02 * S, 0.42);
        o.closed = true;
        break;
      }
    }
  }
}

function ellipse(
  xs: Float32Array,
  ys: Float32Array,
  i: number,
  th: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rot: number,
) {
  const c = Math.cos(rot);
  const s = Math.sin(rot);
  const ex = Math.cos(th) * rx;
  const ey = Math.sin(th) * ry;
  xs[i] = cx + ex * c - ey * s;
  ys[i] = cy + ex * s + ey * c;
}

function blend(a: Strands, b: Strands, f: number, o: Strands) {
  for (let i = 0; i < N; i++) {
    o.x1[i] = a.x1[i] + (b.x1[i] - a.x1[i]) * f;
    o.y1[i] = a.y1[i] + (b.y1[i] - a.y1[i]) * f;
    o.x2[i] = a.x2[i] + (b.x2[i] - a.x2[i]) * f;
    o.y2[i] = a.y2[i] + (b.y2[i] - a.y2[i]) * f;
  }
  o.alpha = a.alpha + (b.alpha - a.alpha) * f;
  o.closed = f > 0.98 ? b.closed : false;
}

export function runEngine(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = mq.matches;
  let W = 0;
  let H = 0;
  let dpr = 1;
  let scenes: Scene[] = [];
  let ringsAnchor: { top: number; height: number } | null = null;
  let phoneX = 0;
  let waveStart = 0;
  let nav: HTMLElement | null = null;
  let navTheme = "";
  let stageStep = -1;
  let raf = 0;
  let lastScroll = -1;
  let lastPaint = 0;
  let dirty = true;
  let running = true;

  const A = makeStrands();
  const B = makeStrands();
  const OUT = makeStrands();

  function measure() {
    W = window.innerWidth;
    H = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    const y = window.scrollY;
    scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]")).map((el) => {
      const r = el.getBoundingClientRect();
      return {
        el,
        name: el.dataset.scene ?? "",
        mode: (el.dataset.mode as Mode) ?? "sticky",
        top: r.top + y,
        height: r.height,
        p: -1,
      };
    });
    const anchor = document.querySelector<HTMLElement>("[data-rings-anchor]");
    if (anchor) {
      const r = anchor.getBoundingClientRect();
      ringsAnchor = { top: r.top + y, height: r.height };
    }
    nav = document.querySelector<HTMLElement>("[data-nav]");
    const device = document.querySelector<HTMLElement>(".x-stage-device");
    const dr = device?.getBoundingClientRect();
    phoneX = dr && dr.width ? dr.left + dr.width / 2 : W * (W < 768 ? 0.5 : 0.72);
    // Layout box, not the (transformed) visual rect: the copy slides in on scroll.
    const copy = document.querySelector<HTMLElement>(".x-stage-copy");
    const copyRight = copy && copy.offsetWidth ? copy.offsetLeft + copy.offsetWidth : 0;
    waveStart = Math.max(phoneX - 0.34 * W, copyRight + 32);
    dirty = true;
  }

  const progressOf = (s: Scene, y: number) =>
    s.mode === "sticky"
      ? clamp((y - s.top) / Math.max(1, s.height - H))
      : clamp((y + H - s.top) / Math.max(1, s.height / 2 + H / 2));

  const started = (s: Scene, y: number) => y >= s.top - (s.mode === "enter" ? H : 0);

  // Maps a scene's progress to a position on the thread's keyframe timeline.
  function timelineFor(s: Scene): number {
    const p = s.p;
    if (reduced) {
      return { hero: 0, stage: 2, connect: 4, reveal: 5, safety: 5, finale: 6 }[s.name] ?? 0;
    }
    switch (s.name) {
      case "hero":
        return smooth(p);
      case "stage":
        return 1 + smooth(clamp(p / 0.18));
      case "connect":
        return p < 0.4 ? 2 + smooth(clamp(p / 0.22)) : 3 + smooth(clamp((p - 0.4) / 0.26));
      case "reveal":
        return 4 + smooth(clamp((p - 0.15) / 0.55));
      case "safety":
        return 5;
      case "finale":
        return 5 + smooth(clamp(p / 0.9));
      default:
        return 0;
    }
  }

  function frame(now: number) {
    raf = 0;
    if (!running) return;
    const y = window.scrollY;
    const scrolled = y !== lastScroll;
    lastScroll = y;

    // Idle motion runs at ~30fps; scrolling paints every frame.
    const idleDue = !reduced && now - lastPaint > 33;
    if (scrolled || dirty || idleDue) {
      lastPaint = now;
      dirty = false;
      update(y, reduced ? 0 : now / 1000);
    }
    if (!reduced) raf = requestAnimationFrame(frame);
  }

  function update(y: number, t: number) {
    let T = 0;
    let reveal: Scene | undefined;
    for (const s of scenes) {
      const p = progressOf(s, y);
      if (p !== s.p) {
        s.p = p;
        s.el.style.setProperty("--p", p.toFixed(4));
        if (s.name === "stage") {
          const step = p < 0.42 ? 0 : p < 0.7 ? 1 : 2;
          if (step !== stageStep) {
            stageStep = step;
            s.el.dataset.step = String(step);
          }
        }
      }
      if (s.name === "reveal") reveal = s;
      if (started(s, y)) T = timelineFor(s);
    }

    // Dark -> light: a circle of light grows from the centre of the reveal scene.
    let R = 0;
    let light = false;
    const diag = Math.hypot(W, H) / 2 + 4;
    if (reveal) {
      const past = y > reveal.top + reveal.height - H;
      if (reduced) {
        light = y >= reveal.top - H * 0.5;
      } else if (past) {
        light = true;
      } else if (y >= reveal.top) {
        R = easeInOut(clamp((reveal.p - 0.12) / 0.58)) * diag;
        if (R >= diag) light = true;
      }
      reveal.el.style.setProperty("--r", `${(light ? diag : R).toFixed(1)}px`);
    }

    // Flip the nav only once the light has reached the top corners behind it.
    const theme = light || R > diag * 0.93 ? "light" : "dark";
    if (nav && theme !== navTheme) {
      navTheme = theme;
      nav.dataset.theme = theme;
    }

    paint(T, t, R, light, y);
  }

  function paint(T: number, t: number, R: number, light: boolean, y: number) {
    if (!ctx) return;
    const mobile = W < 768;
    const L: Layout = {
      W,
      H,
      mobile,
      phoneX,
      waveStart,
      ringsY: ringsAnchor ? ringsAnchor.top + ringsAnchor.height / 2 - y : H * 0.5,
    };
    const k0 = Math.min(6, Math.floor(T));
    const k1 = Math.min(6, k0 + 1);
    const f = T - k0;
    keyframe(k0, L, t, A);
    if (f > 0.001) {
      keyframe(k1, L, t, B);
      blend(A, B, f, OUT);
    } else {
      blend(A, A, 0, OUT);
      OUT.closed = A.closed;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = light ? BRAND.paper : BRAND.ink;
    ctx.fillRect(0, 0, W, H);

    if (!light) {
      // Depth: a faint blue bloom that follows the thread's centre of mass.
      const g = ctx.createRadialGradient(W * 0.6, H * 0.5, 0, W * 0.6, H * 0.5, Math.max(W, H) * 0.7);
      g.addColorStop(0, "rgba(0,136,204,0.10)");
      g.addColorStop(1, "rgba(0,136,204,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      drawThread(OUT, false);
    }

    if (R > 0 || light) {
      ctx.save();
      if (!light) {
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, R, 0, TAU);
        ctx.clip();
      }
      ctx.fillStyle = BRAND.paper;
      ctx.fillRect(0, 0, W, H);
      drawThread(OUT, true);
      ctx.restore();
    }
  }

  function strokeStrand(xs: Float32Array, ys: Float32Array, closed: boolean) {
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(xs[0], ys[0]);
    for (let i = 1; i < N; i++) ctx.lineTo(xs[i], ys[i]);
    if (closed) ctx.closePath();
  }

  function drawThread(s: Strands, onLight: boolean) {
    if (!ctx) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Still, and quieter, when the page scrolls over it with reduced motion.
    const a = s.alpha * (reduced ? 0.4 : 1);
    const passes: [Float32Array, Float32Array, string, string][] = onLight
      ? [
          [s.x2, s.y2, BRAND.glow, BRAND.sky],
          [s.x1, s.y1, BRAND.sky, BRAND.blue],
        ]
      : [
          [s.x2, s.y2, BRAND.blue, BRAND.glow],
          [s.x1, s.y1, BRAND.sky, BRAND.mist],
        ];
    for (const [xs, ys, glow, core] of passes) {
      strokeStrand(xs, ys, s.closed);
      ctx.strokeStyle = glow;
      ctx.globalAlpha = (onLight ? 0.1 : 0.07) * a;
      ctx.lineWidth = 26;
      ctx.stroke();
      ctx.globalAlpha = (onLight ? 0.16 : 0.16) * a;
      ctx.lineWidth = 9;
      ctx.stroke();
      ctx.strokeStyle = core;
      ctx.globalAlpha = (onLight ? 0.85 : 0.95) * a;
      ctx.lineWidth = onLight ? 1.6 : 1.8;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function kick() {
    if (!raf && running) raf = requestAnimationFrame(frame);
  }

  const onScroll = () => kick();
  const onResize = () => {
    measure();
    kick();
  };
  const onMotionChange = () => {
    reduced = mq.matches;
    for (const s of scenes) s.p = -1;
    dirty = true;
    kick();
  };
  const onVisibility = () => {
    running = !document.hidden;
    if (running) {
      dirty = true;
      kick();
    } else if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  // Heights change as fonts and images load; re-measure when the page resizes.
  const ro = new ResizeObserver(() => onResize());
  ro.observe(document.body);

  // The light editorial rows use slow, reversible reveals instead of scrubbing.
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) (e.target as HTMLElement).dataset.in = e.isIntersecting ? "1" : "0";
    },
    { rootMargin: "0px 0px -18% 0px", threshold: 0.2 },
  );
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));

  measure();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  mq.addEventListener("change", onMotionChange);
  document.addEventListener("visibilitychange", onVisibility);
  kick();

  return () => {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    mq.removeEventListener("change", onMotionChange);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}
