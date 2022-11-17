import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpUFinLUsg_Y69VUAX3XxoQKfGSWLLGOwi9FqGAaHl5h2olvcH"
      />
    </article>
  );
}
