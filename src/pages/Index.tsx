import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Platforms } from "@/components/sections/Platforms";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhyLRC } from "@/components/sections/WhyLRC";
import { Science } from "@/components/sections/Science";
import { Government } from "@/components/sections/Government";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-60">
        <Hero />
        <About />
        <Platforms />
        <HowWeWork />
        <WhyLRC />
        <Science />
        <Government />
        <Team />
        <Contact />
      </main>
    </>
  );
};

export default Index;
