import React from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`${pageInfo.name}`, "MercurialG"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20">
        <h2 className="text-sm uppercase tracking-[15px]">{pageInfo.role}</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="lime" />
        </h1>
        <Link href={"#about"}>
          <button className="heroButton">About</button>
        </Link>
        <Link href={"#experience"}>
          <button className="heroButton">Experience</button>
        </Link>
        <Link href={"#skills"}>
          <button className="heroButton">Skills</button>
        </Link>
        <Link href={"#projects"}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
