import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";

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
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar
     scrollbar-track-red-500/20 scrollbar-thumb-red-500"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                className="w-64"
                width="1024"
                height={1024}
                src={urlFor(project.image).url()}
                alt="Project Screenshot"
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-red-500/90 left-0 h-[20px] -skew-y-6" />
    </div>
  );
}
