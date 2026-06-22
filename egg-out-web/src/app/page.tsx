import PatternBg from "@/components/PatternBg";
import KineticIntro from "@/components/KineticIntro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SandwichAssembly from "@/components/SandwichAssembly";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Catering from "@/components/Catering";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

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
      <Menu />
      <Catering />
      <Locations />
      <Footer />
    </main>
  );
}
