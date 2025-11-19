import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Techware Marketing Landing",
  description: "Techware Marketing Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
