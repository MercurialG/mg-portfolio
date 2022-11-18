import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen overflow-hidden 
      max-w-full text-left md:text-left auto items-center justify-evenly"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar
     scrollbar-track-red-500/20 scrollbar-thumb-red-500"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
