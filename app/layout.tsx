import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayden E. | Actor (Playing Age 8–12)",
  description: "Professional actor portfolio for Jayden E. (Playing Age 8–12).",
  metadataBase: new URL("https://jaydentheactor.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <SiteNav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
