import React from "react";
import { motion } from "framer-motion";
import { TSkill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: TSkill;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? 200 : -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        className="h-20 w-20 md:h-22 md:w-22 lg:w-24 lg:h-24 rounded-full 
        border border-gray-500 object-cover shadow-sm filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 
      transition duration-300 ease-in-out h-20 w-20 md:h-22 md:w-22 lg:w-24 lg:h-24 group-hover:bg-white z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold opacity-100">{"</src>"}</p>
        </div>
      </div>
    </div>
  );
}
