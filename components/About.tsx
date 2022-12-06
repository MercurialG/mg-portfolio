import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl 
      px-10 mx-auto items-center justify-evenly"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="z-20"
      >
        <Image
          height={500}
          className="flex-shrink-0 mx-auto w-44 object-cover mt-32 md:mt-0 md:w-64 xl:w-[300px]
         rounded-md shadow-sm hover:opacity-90"
          width={400}
          alt="Profile picture"
          src={urlFor(pageInfo.profilePic).url()}
        />
      </motion.div>
      <div className="space-y-5 px-0 text-center max-w-[720px] text-base">
        <h4 className="text-4xl font-semibold">Background</h4>
        <p className="md:text-lg ml-4 text-justify text-sm">{pageInfo.about}</p>
      </div>
      <div className="w-full absolute top-[30%] bg-red-500 left-0 h-[1px] -skew-y-12 z-0" />
    </motion.div>
  );
}
