import { HeaderSection } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { SidebarSection } from "@/sections/Sidebar";
import { EmailSection } from "@/sections/Emailbar";
export default function Home() {
  return (
   <div>
    <HeaderSection />
    <SidebarSection />
    <EmailSection />
    <HeroSection />
   </div>
  );
}
