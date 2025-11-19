"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseFadeInProps {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  triggerOnce?: boolean;
}

const useFadeIn = ({ delay = 0, duration = 1, x = 0, y = 50, triggerOnce = true }: UseFadeInProps = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, { opacity: 0, x, y });
      gsap.to(
        ref.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          delay,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: triggerOnce,
          },
        }
      );
    }
  }, [delay, duration, x, y, triggerOnce]);

  return ref;
};

export default useFadeIn;
