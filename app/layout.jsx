"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { Lora } from "next/font/google";
import JOS from "jos-animation";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/globals.css";
import "@/styles/vendors/menu.css";

const DMSans = localFont({
  src: "../fonts/DMSans-Bold.woff2",
  variable: "--font-DMSans",
});

const ClashDisplay = localFont({
  src: "../fonts/ClashDisplay-Medium.woff2",
  variable: "--font-clash-display",
});

const Raleway = localFont({
  src: "../fonts/Raleway-Bold.woff2",
  variable: "--font-raleway",
});

const SpaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Bold.woff2",
  variable: "--font-space-grotesk",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
export default function RootLayout({ children }) {
  const pathname = usePathname();

  const jos_options = {
    passive: false,
    once: true,
    animation: "fade-up",
    timingFunction: "ease",
    threshold: 0,
    delay: 0.5,
    duration: 0.7,
    scrollDirection: "down",
    rootMargin: "0% 0% 15% 0%",
  };
  useEffect(() => {
    JOS.init(jos_options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    JOS.refresh();
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable} ${outfit.variable} ${lora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
