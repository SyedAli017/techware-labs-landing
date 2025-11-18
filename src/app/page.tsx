import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
    </div>
  );
}
