import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center justify-evenly"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="space-y-5 px-0 md:px-10 max-w-[700px] text-base">
        <h4 className="text-4xl font-semibold">Heres a little background</h4>
        <p className="text-left text-lg">
          I'm George and I'm a software engineer, I focus on JavaScript
          frameworks, such as React, Next and Vue.
        </p>
        <p className="">
          I've used <span className="">MEVN (Mongo, Express, Vue, Node)</span>{" "}
          and <span className="">PEVN (Postgres, Express, Vue, Node)</span>{" "}
          stacks for my biggest projects.
        </p>
        So have experience in working with databases like Mongo.DB and
        PostgreSQL and also have made some API's, using Express.JS and Node.JS.
        <p>
          Switched to React.JS not long ago and looking forward to improve in
          that direction!
        </p>
      </div>
    </motion.div>
  );
}
