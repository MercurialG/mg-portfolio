import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { TSkill } from "../typings";

type Props = {
  skills: TSkill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px]
     xl:px-10 min-h-screen mx-auto items-center justify-evenly"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill
      </h3> */}

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-36">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
