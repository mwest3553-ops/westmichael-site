import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import HomeIntro from "@/components/HomeIntro";
import HomeProofBar from "@/components/HomeProofBar";
import HomeSelectedExperience from "@/components/HomeSelectedExperience";
import HomeSkills from "@/components/HomeSkills";
import HomeFinalCTA from "@/components/HomeFinalCTA";
import SectionSeam from "@/components/SectionSeam";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionSeam />
      <HomeIntro />
      <SectionSeam />
      <HomeProofBar />
      <SectionSeam />
      <HomeSelectedExperience />
      <SectionSeam />
      <HomeSkills />
      <SectionSeam />
      <HomeFinalCTA />
    </>
  );
}
