"use client";

import { RefObject, useEffect } from "react";

type RevealOptions = {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  trigger?: string;
};

export function useGsapReveal(
  ref: RefObject<HTMLElement | null>,
  options: RevealOptions = {},
) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cleanup = () => {};
    let mounted = true;

    (async () => {
      if (!ref.current) return;

      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted || !ref.current) return;

      const target = ref.current;

      const fromVars = { opacity: 0, y: options.y ?? 24, x: options.x ?? 0 };
      const toVars = {
        opacity: 1,
        y: 0,
        x: 0,
        duration: options.duration ?? 0.8,
        delay: options.delay ?? 0,
        ease: "power3.out",
      };

      const tween = options.trigger
        ? gsap.fromTo(target, fromVars, {
            ...toVars,
            scrollTrigger: {
              trigger: document.querySelector(options.trigger) ?? target,
              start: "top 85%",
            },
          })
        : gsap.fromTo(target, fromVars, toVars);

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, [options.delay, options.duration, options.trigger, options.x, options.y, ref]);
}

export function useGsapParallax(ref: RefObject<HTMLElement | null>, speed = 12) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cleanup = () => {};
    let mounted = true;

    (async () => {
      if (!ref.current) return;

      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted || !ref.current) return;

      const tween = gsap.to(ref.current, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
        },
      });

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, [ref, speed]);
}
