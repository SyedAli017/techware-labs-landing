"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import client1Logo from "@/assets/clients/company-1.svg";
import client2Logo from "@/assets/clients/company-2.svg";
import client3Logo from "@/assets/clients/company-3.svg";
import styles from "./ClientsSection.module.scss";

const clientsData = [
  { id: 1, name: "Client 1", image: client1Logo },
  { id: 2, name: "Client 2", image: client2Logo },
  { id: 3, name: "Client 3", image: client3Logo },
];

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
