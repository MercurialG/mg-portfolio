import React from "react";
import { motion } from "framer-motion";
import { TSkill } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  skill: TSkill;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex flex-col items-center cursor-pointer">
      <div>
        <Image
          width="512"
          height={512}
          alt="tech image"
          src={urlFor(skill.image).url()}
          className="h-10 w-10 md:h-20 md:w-20 lg:w-22 lg:h-22 rounded-full 
        border border-gray-500 object-cover shadow-sm filter 
        group-hover:opacity-50 transition duration-300 ease-in-out bg-white"
        />
      </div>
      <span>{skill.title}</span>
      {/* <div
        className="absolute opacity-0 group-hover:opacity-80 
      transition duration-300 ease-in-out h-18 w-18 md:h-20 md:w-20 lg:w-22 lg:h-22 group-hover:bg-white z-0"
      >
        <div className="flex items-center justify-center h-full">
          <Link href={skill.linkToSrc}>
            {/* <p className="text-2xl font-bold opacity-100">{"</src>"}</p>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
