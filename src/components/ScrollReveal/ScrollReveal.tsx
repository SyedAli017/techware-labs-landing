"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useFadeIn from "@/hooks/useFadeIn";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import styles from "./ScrollReveal.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const ref = useFadeIn();

  useEffect(() => {
    const split = new SplitType(textRef.current!, { types: "chars" });

    const chars = split.chars;
    const totalChars = chars?.length ?? 0;

    gsap.to(chars, {
      color: "#ffffff",
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const revealCount = Math.floor(progress * totalChars);

          chars?.forEach((char, index) => {
            char.style.color = index < revealCount ? "#ffffff" : "#808080";
          });
        },
      },
    });

    return () => split.revert();
  }, []);

  return (
    <div ref={ref} className={styles.scrollReveal}>
      <p ref={textRef} className={styles.scrollRevealText}>
        We build cutting-edge AI solutions that help businesses automate
        processes, gain insights, and deliver smarter experiences. Whether
        you&apos;re looking to streamline operations, personalize customer
        journeys, or leverage predictive analytics, our AI-powered tools are
        designed to drive growth and innovation.
      </p>
    </div>
  );
};

export default ScrollReveal;
