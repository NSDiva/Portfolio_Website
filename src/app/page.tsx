import Intro from "@/components/Intro";
import SiteEffects from "@/components/SiteEffects";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Intro />
      <SiteEffects />
      <Nav />
      <div className="wrap">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
