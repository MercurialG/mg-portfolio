import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, TSkill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: TSkill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div
      className="bg-slate-100 text-black h-screen md:snap-y md:snap-mandatory
    z-0 overflow-y-scroll overflow-x-hidden scrollbar
     scrollbar-track-red-500/20 scrollbar-thumb-red-500
     dark:bg-[#111] dark:text-white transition-all duration-700
     "
    >
      <Head>
        <title>MercurialG</title>
        <meta name="description" content="George Rykunov Portfolio Website" />
      </Head>
      <Header socials={socials} />

      <section id="hero" className="md:snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="md:snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="md:snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="md:snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="md:snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contactme" className="md:snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: TSkill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 30,
  };
};
