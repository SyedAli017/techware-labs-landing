import instagramLogo from "@/assets/footer/instagram.svg";
import facebookLogo from "@/assets/footer/facebook.svg";
import linkedinLogo from "@/assets/footer/linkedin.svg";
import styles from "./Footer.module.scss";
import Image from "next/image";

const socialsData = [
  {
    name: "Instagram",
    image: instagramLogo,
    link: "https://www.instagram.com",
  },
  {
    name: "Facebook",
    image: facebookLogo,
    link: "https://www.facebook.com",
  },

  {
    name: "Linkedin",
    image: linkedinLogo,
    link: "https://www.linkedin.com",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socials}>
          {socialsData.map((social) => (
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image src={social.image} alt={social.name} className={styles.icon} />
            </a>
          ))}
        </div>

        <p className={styles.footerText}>Lorem Ipsum Lorem Ipsum</p>

        <p className={styles.copyrights}>&copy; TechwareLab copyrights</p>
      </div>
    </footer>
  );
};

export default Footer;
