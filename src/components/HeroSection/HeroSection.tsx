"use client";

import Image from "next/image";
import rightArrow from "@/assets/hero-section/right-arrow.svg";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/framer";
import { useEffect, useState } from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const [glowVisible, setGlowVisible] = useState(false);

  const circles = [
    {
      size: 650,
      gradient: "linear-gradient(93.64deg, #d0a8f2 2.99%, #32005f 110.75%)",
      opacity: 0.9,
    },
    {
      size: 800,
      gradient: "linear-gradient(93.64deg, #b27ce2 2.99%, #32005f 110.75%)",
      opacity: 0.7,
    },
    {
      size: 950,
      gradient: "linear-gradient(93.64deg, #a54ef1 2.99%, #32005f 110.75%)",
      opacity: 0.6,
    },
    {
      size: 1100,
      gradient: "linear-gradient(93.64deg, #8826de 2.99%, #32005f 110.75%)",
      opacity: 0.5,
    },
    {
      size: 1300,
      gradient: "linear-gradient(93.64deg, #6e00cf 2.99%, #32005f 110.75%)",
      opacity: 0.3,
    },
  ];

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgCircles}>
        <motion.div
          className={styles.glowBg}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={glowVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1],
          }}
        />

        {circles.map((c, i) => (
          <motion.div
            key={i}
            className={styles.circle}
            style={{
              width: c.size,
              height: c.size,
              background: c.gradient,
              opacity: c.opacity,
            }}
            initial={{
              scale: 0.6,
              opacity: 0,
              transform: "translate(-50%, 80%)",
            }}
            animate={{
              scale: 1,
              opacity: c.opacity,
              transform: `translate(calc(-50% + ${
                pos.x * (16 - i * 3)
              }px), calc(-50% + ${pos.y * (16 - i * 3)}px))`,
            }}
            transition={{
              duration: 1,
              delay: i * 0.25,
              ease: [0.23, 1, 0.32, 1],
            }}
            onAnimationComplete={() => {
              if (i === circles.length - 1) setGlowVisible(true);
            }}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <motion.h1 className={styles.heroTitle} {...fadeUp(0)}>
            Smarter Solutions Powered by AI
          </motion.h1>
          <motion.p className={styles.heroDesc} {...fadeUp(0.15)}>
            Streamline operations, reduce costs, and scale effortlessly with our
            AI-driven tools.
          </motion.p>
        </div>

        <motion.button className={styles.ctaBtn} {...fadeUp(0.3)}>
          Start a Project
          <Image src={rightArrow} alt="" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
