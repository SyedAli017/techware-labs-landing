import Image from "next/image";
import rightArrow from "@/assets/hero-section/right-arrow.svg";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>Smarter Solutions Powered by AI</h1>

          <p className={styles.heroDesc}>
            Streamline operations, reduce costs, and scale effortlessly with our
            AI-driven tools.
          </p>
        </div>

        <button className={styles.ctaBtn}>
          Start a Project
          <Image src={rightArrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
