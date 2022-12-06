import React from "react";
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
    w-[280px] md:w-[400px] lg:w-[650px] lg:h-[650px] md:snap-center shadow-lg p-2
     cursor-pointer duration-200 overflow-hidden dark:shadow-red-500 dark:shadow-sm"
    >
      <Image
        width={1024}
        height={1024}
        className="w-10 h-10 md:h16 md:w-16 m-2 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="Company image"
      />

      <div className="px-2 md:px-6 ">
        <h4 className="text-lg md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="text-xl font-bold mt-1">{experience.company}</p>
        <div className="flex space-x-2 items-center mt-2">
          {experience.technologies.map((tech) => (
            <Image
              width={128}
              height={128}
              src={urlFor(tech.image).url()}
              key={tech._id}
              className="h-4 w-4 flex-wrap rounded-full bg-white"
              alt="Tech icon"
            />
          ))}
        </div>
        <p className="uppercase py-2 text-gray-300">
          {experience.dateStarted} - {experience.dateEnded}
        </p>
        <ul className="list-disc space-y-2 md:space-y-3 pl-4 text-xs md:text-lg">
          {experience.points.map((point) => (
            <li key={(point.length / 5) * 2 + 10}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
