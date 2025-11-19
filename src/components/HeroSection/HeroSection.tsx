"use client";

import Image from "next/image";
import rightArrow from "@/assets/hero-section/right-arrow.svg";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/framer";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
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
