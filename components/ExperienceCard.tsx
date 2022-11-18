import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] lg:w-[900px] snap-center shadow-lg opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpUFinLUsg_Y69VUAX3XxoQKfGSWLLGOwi9FqGAaHl5h2olvcH"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Fullstack Developer</h4>
        <p className="text-2xl font-bold mt-1">I-Territory</p>
        <div className="flex space-x-2 my-2">
          <img src="" className="h-10 w-10 rounded-full" alt="tech icon" />
        </div>
        <p className="uppercase py-5 text-gray-300">March 2021 - Present</p>
        <ul className="list-disc space-y-4 pb-10 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
