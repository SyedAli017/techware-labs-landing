"use client";
import Image from "next/image";
import { bentoItems } from "@/data/bentoItems";
import styles from "./BentoGrid.module.scss";

const BentoGrid = () => {
  return (
    <div className={styles.bentoGrid}>
      <div className={styles.gridSection}>
        {bentoItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${styles[item.className]}`}
          >
            <Image src={item.logo} alt={item.label} className={styles.logo} />
            {item.label && <p className={styles.title}>{item.label}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
