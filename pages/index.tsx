import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-white text-black h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>George's portfolio</title>
        <meta name="description" content="@MercurialG Portfolio Website" />
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
      <section id="skills" className="snap-center">
        <Skills />
      </section>
    </div>
  );
}
