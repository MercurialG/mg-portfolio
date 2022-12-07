import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      {/* <div className="absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" /> */}
      {/* <div className="absolute border border-red-500 rounded-full h-[350px] w-[350px] mt-52 animate-pulse" /> */}
      <div className="absolute border border-red-500  h-[450px] w-[450px] mt-[17rem] animate-pulse" />

      <motion.div
        initial={{ rotate: 45 }}
        className="absolute border border-red-500  h-[500px] w-[500px] mt-[17rem] animate-pulse"
      />
      <motion.div
        // initial={{ rotate: 45 }}
        className="absolute border rounded-full border-red-500  h-[600px] w-[600px] mt-[17rem] animate-pulse"
      />
    </motion.div>
  );
}
