import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
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
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://www.linkedin.com/in/MercurialG/"
        />
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://github.com/mercurialg/"
        />
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://www.linkedin.com/in/rykunov-george-a7a589b0/"
        />
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://www.linkedin.com/in/rykunov-george-a7a589b0/"
        />
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
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch!
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
