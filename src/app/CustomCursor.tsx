"use client";

import * as React from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor='interactive']";

export function CustomCursor() {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateEnabled = () => setEnabled(media.matches && !prefersReduced.matches);
    updateEnabled();
    media.addEventListener("change", updateEnabled);
    prefersReduced.addEventListener("change", updateEnabled);
    return () => {
      media.removeEventListener("change", updateEnabled);
      prefersReduced.removeEventListener("change", updateEnabled);
    };
  }, []);

  React.useEffect(() => {
    if (!enabled) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let raf = 0;
    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let hasMoved = false;

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!hasMoved) {
        pos.x = target.x;
        pos.y = target.y;
        hasMoved = true;
      }
    };

    const animate = () => {
      pos.x += (target.x - pos.x) * 0.5;
      pos.y += (target.y - pos.y) * 0.5;
      cursor.style.setProperty("--cursor-x", `${pos.x}px`);
      cursor.style.setProperty("--cursor-y", `${pos.y}px`);
      raf = window.requestAnimationFrame(animate);
    };

    const onOver = (event: MouseEvent) => {
      const targetEl = event.target as HTMLElement | null;
      if (!targetEl) return;
      const interactive = targetEl.closest(INTERACTIVE_SELECTOR);
      setHovering(Boolean(interactive));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver, true);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver, true);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${hovering ? " is-hovering" : ""}${pressed ? " is-pressed" : ""}`}
      aria-hidden="true"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
            <stop offset="55%" stopColor="#f472b6" stopOpacity="1" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M4 3 L24 13 L15 15 L13 24 Z"
          fill="url(#cursorGradient)"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
