import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={3} />
      <Portfolio limit={3} />
      <Pricing />
      {/* Show summary of process on homepage */}
      <div className="bg-muted/10">
        <Process />
      </div>
      <Contact />
    </>
  );
}
