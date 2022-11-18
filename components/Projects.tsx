import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6];
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
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-64"
              src="https://miro.medium.com/max/800/1*Otx7CXIY9eh0Sxlp54olxA.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Case study {i + 1} of {projects.length}: Smth clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis quidem consequatur minima asperiores esse, et soluta
                tempora. Reprehenderit, assumenda similique? Hic quos enim ut!
                Quod ad obcaecati sint cumque eligendi.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-red-500/90 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
