"use client";

import { useEffect } from "react";

function isNightTime(d: Date) {
  const h = d.getHours();
  // Dark mode from 19:00 → 06:59
  return h >= 19 || h < 7;
}

function nextBoundaryMs(d: Date) {
  const boundary = new Date(d);
  const h = d.getHours();

  if (h >= 19) {
    // next is 07:00 tomorrow
    boundary.setDate(boundary.getDate() + 1);
    boundary.setHours(7, 0, 0, 0);
  } else if (h < 7) {
    // next is 07:00 today
    boundary.setHours(7, 0, 0, 0);
  } else {
    // daytime: next is 19:00 today
    boundary.setHours(19, 0, 0, 0);
  }

  const ms = boundary.getTime() - d.getTime();
  return Math.max(ms, 5_000);
}

export function AutoThemeByTime() {
  useEffect(() => {
    const root = document.documentElement;

    const apply = () => {
      const dark = isNightTime(new Date());
      root.classList.toggle("dark", dark);
      root.dataset.theme = dark ? "dark" : "light";
    };

    apply();
    const t = window.setTimeout(function tick() {
      apply();
      window.setTimeout(tick, nextBoundaryMs(new Date()));
    }, nextBoundaryMs(new Date()));

    return () => window.clearTimeout(t);
  }, []);

  return null;
}

