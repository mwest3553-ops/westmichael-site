import HeroSection from "@/components/HeroSection";
import HomeIntro from "@/components/HomeIntro";
import HomeSelectedExperience from "@/components/HomeSelectedExperience";
import HomeSkills from "@/components/HomeSkills";
import HomeFinalCTA from "@/components/HomeFinalCTA";
import SectionSeam from "@/components/SectionSeam";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionSeam />
      <HomeIntro />
      <SectionSeam />
      <HomeSelectedExperience />
      <SectionSeam />
      <HomeSkills />
      <SectionSeam />
      <HomeFinalCTA />
    </>
  );
}
