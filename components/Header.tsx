import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import { useTheme } from "next-themes";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
        <div
          className="transition-all duration-500 flex justify-evenly self-center ml-12"
          onClick={() =>
            resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {" "}
          <span className="text-2xl mr-1">🌚</span>
          {resolvedTheme === "dark" ? (
            <span className="border rounded-full border-grey flex items-center cursor-pointer w-12 justify-start">
              <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
            </span>
          ) : (
            <span className="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
              <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
            </span>
          )}
          <span className="text-2xl ml-1"> 🌞</span>
        </div>
      </motion.div>

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
