import HeroSection from "@/components/HeroSection/HeroSection";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./page.module.scss";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import BentoGrid from "@/components/BentoGrid/BentoGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ScrollReveal />
      <BentoGrid />
      <ClientsSection />
    </div>
  );
}
