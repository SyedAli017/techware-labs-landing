"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { clientsData } from "@/data/clientsData";
import styles from "./ClientsSection.module.scss";

const ClientsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<ReturnType<typeof gsap.to> | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const totalWidth = slider!.scrollWidth / 2;

      tweenRef.current = gsap.to(slider, {
        x: -totalWidth,
        duration: 150,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const pauseScroll = () => tweenRef.current?.pause();
  const resumeScroll = () => tweenRef.current?.resume();

  return (
    <div className={styles.clientsSection}>
      <div
        className={styles.sliderWrapper}
        onMouseEnter={pauseScroll}
        onMouseLeave={resumeScroll}
      >
        <div className={styles.slider} ref={sliderRef}>
          {Array.from({ length: 30 }).map(() =>
            clientsData.map((client) => (
              <div key={Math.random()} className={styles.client}>
                <Image
                  src={client.image}
                  alt={client.name}
                  className={styles.clientImage}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
