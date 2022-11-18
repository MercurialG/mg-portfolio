import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <div
      className="bg-white text-black h-screen snap-y snap-mandatory 
    z-0 overflow-y-scroll overflow-x-hidden scrollbar
     scrollbar-track-red-500/20 scrollbar-thumb-red-500"
    >
      <Head>
        <title>MercurialG.dev</title>
        <meta name="description" content="George Rykunov Portfolio Website" />
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
