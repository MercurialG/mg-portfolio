import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center flex-shrink-0 
    w-[330px] md:w-[400px] lg:w-[650px] lg:h-[650px] snap-center shadow-lg p-2
     cursor-pointer duration-200 overflow-hidden"
    >
      <img
        className="w-16 h-16 m-2 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="Company image"
      />

      <div className="px-2 md:px-6 ">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="text-2xl font-bold mt-1">{experience.company}</p>
        <div className="flex space-x-2 items-center mt-4">
          {experience.technologies.map((tech) => (
            <img
              src={urlFor(tech.image).url()}
              key={tech._id}
              className="h-5 w-5 flex-wrap rounded-full"
              alt="Tech icon"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.dateStarted} - {experience.dateEnded}
        </p>
        <ul className="list-disc mb-10 space-y-3 pl-4 text-sm md:text-lg">
          {experience.points.map((point) => (
            <li key={(point.length / 5) * 2 + 10}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
