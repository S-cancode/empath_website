"use client";

import { useEffect, useRef } from "react";
import { runEngine } from "./engine";

/**
 * Mounts the fixed thread canvas and the scroll engine. Until this runs (or if
 * JS is off) every section keeps its own solid background, so the page is
 * fully readable without the canvas.
 */
export function Experience({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const root = document.documentElement;
    root.classList.add("js-canvas");
    const stop = runEngine(canvas);
    return () => {
      stop();
      root.classList.remove("js-canvas");
    };
  }, []);

  return (
    <div className="x-root">
      <canvas ref={canvasRef} className="x-canvas" aria-hidden="true" />
      <div className="x-grain" aria-hidden="true" />
      {children}
    </div>
  );
}
