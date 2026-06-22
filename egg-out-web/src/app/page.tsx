import PatternBg from "@/components/PatternBg";
import KineticIntro from "@/components/KineticIntro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SandwichAssembly from "@/components/SandwichAssembly";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Menu from "@/components/Menu";
import Catering from "@/components/Catering";
import Locations from "@/components/Locations";
import BrandBand from "@/components/BrandBand";
import Footer from "@/components/Footer";
import Modals from "@/components/modal/Modals";

export default function Home() {
  return (
    <main>
      <PatternBg />
      <KineticIntro />
      <Nav />
      <Hero />
      <SandwichAssembly />
      <Marquee />
      <About />
      <Divider />
      <Menu />
      <Divider />
      <Catering />
      <Locations />
      <BrandBand />
      <Footer />
      <Modals />
    </main>
  );
}
