import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import ModeToggle from "./ModeToggle";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className="sticky top-0 p-5 flex items-center justify-between 
    max-w-full mx-auto z-30 xl:items-center bg-slate-100 dark:bg-[#111] transition-all duration-700"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            fgColor="grey"
            bgColor="transparent"
            url={social.url || "https://www.linkedin.com/in/MercurialG/"}
          />
        ))}
      </motion.div>
      <ModeToggle />
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
          url="#contactme"
        />

        <a href="#contactme">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch!
          </p>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
