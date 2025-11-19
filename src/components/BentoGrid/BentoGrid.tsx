"use client";
import Image from "next/image";
import logo1 from "@/assets/bento-grid/logo-1.svg";
import logo2 from "@/assets/bento-grid/logo-2.svg";
import logo3 from "@/assets/bento-grid/logo-3.svg";
import logo4 from "@/assets/bento-grid/logo-4.svg";
import logo5 from "@/assets/bento-grid/logo-5.svg";
import styles from "./BentoGrid.module.scss";

const bentoItems = [
  { id: 1, className: "bigVertical", label: "LOGOIPSUM", logo: logo1 },
  { id: 2, className: "bigHorizontal", label: "LOGOIPSUM", logo: logo2 },
  { id: 3, className: "small1", label: "LOGOIPSUM", logo: logo4 },
  { id: 4, className: "small2", label: "LOGOIPSUM", logo: logo5 },
  { id: 5, className: "medium", label: "", logo: logo3 },
];

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
