import Image from "next/image";
import Link from "next/link";
import { socialsData } from "@/data/socialsData";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socials}>
          {socialsData.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.image}
                alt={social.name}
                className={styles.icon}
              />
            </Link>
          ))}
        </div>

        <p className={styles.footerText}>Lorem Ipsum Lorem Ipsum</p>

        <p className={styles.copyrights}>&copy; TechwareLab copyrights</p>
      </div>
    </footer>
  );
};

export default Footer;
