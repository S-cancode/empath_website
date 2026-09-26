import type { Viewport } from "next";
import "./experience.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Experience } from "@/components/experience/experience";
import {
  ConnectScene,
  FinaleScene,
  HeroScene,
  RevealScene,
  SafetyScene,
  StageScene,
} from "@/components/experience/scenes";

// Matches the dark opening scene (gray-900).
export const viewport: Viewport = { themeColor: "#101828" };

export default function Home() {
  return (
    <Experience>
      <Navbar />
      <main className="x-main">
        <HeroScene />
        <StageScene />
        <ConnectScene />
        <RevealScene />
        <SafetyScene />
        <FinaleScene />
      </main>
      <Footer />
    </Experience>
  );
}
