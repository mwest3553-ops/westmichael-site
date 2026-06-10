import HeroSection from "@/components/HeroSection";
import HomeIntro from "@/components/HomeIntro";
import HomeSelectedExperience from "@/components/HomeSelectedExperience";
import HomeSkills from "@/components/HomeSkills";
import HomeFinalCTA from "@/components/HomeFinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeIntro />
      <HomeSelectedExperience />
      <HomeSkills />
      <HomeFinalCTA />
    </>
  );
}
