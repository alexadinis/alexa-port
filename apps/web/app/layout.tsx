import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Logo from "../src/icons/Logo";

import Navbar from "../src/components/Navbar/Navbar";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About me",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alexa Portfolio",
  description: "Alexa Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar navLinks={NAV_LINKS} logo={<Logo />} />
        {children}
      </body>
    </html>
  );
}
