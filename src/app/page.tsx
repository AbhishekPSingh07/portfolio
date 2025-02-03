import { HeaderSection } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { SidebarSection } from "@/sections/Sidebar";
import { EmailSection } from "@/sections/Emailbar";
import { AboutSection } from "@/sections/About";
import { JobsSection } from "@/sections/Jobs";
export default function Home() {
  return (
   <div>
    <HeaderSection />
    <SidebarSection />
    <EmailSection />
    <HeroSection />
    <AboutSection />
    <JobsSection />
   </div>
  );
}
