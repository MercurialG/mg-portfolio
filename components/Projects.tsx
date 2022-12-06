import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <div
      className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row 
      max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden md:snap-x md:snap-mandatory z-20 scrollbar
     scrollbar-track-red-500/20 scrollbar-thumb-red-500"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 md:snap-center flex flex-col space-y-5 pt-40 md:justify-center items-center p-4 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                className="w-52 md:w-64"
                width="1024"
                height={1024}
                src={urlFor(project.image).url()}
                alt="Project Screenshot"
              />
            </motion.div>
            <div className="space-y-5 px-0 md:px-10 max-w-6xl text-center">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                {project.title}
              </h4>
              <div className="flex flex-row justify-evenly">
                {project!.technologies.map((tech) => (
                  <Image
                    width={512}
                    height={512}
                    src={urlFor(tech.image).url()}
                    key={tech._id}
                    className="h-8 w-8 flex-wrap rounded-full bg-white"
                    alt="Tech icon"
                  />
                ))}
              </div>
              <p className="md:text-xl text-md text-justify ">
                {project.summary}
              </p>
              <Link className="" href={project.link}>
                <span className="text-2xl text-bold">
                  Source code on GitHub
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-red-500/90 left-0 h-[20px] -skew-y-6" />
    </div>
  );
}
