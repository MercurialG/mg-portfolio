import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center justify-evenly">
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
    </div>
  );
}
