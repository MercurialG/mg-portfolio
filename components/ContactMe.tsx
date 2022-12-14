import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
};
// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

export default function ContactMe({ pageInfo }: Props) {
  // const { register, handleSubmit } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:georgerykunov@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message}`;
  // };

  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-center items-center mx-auto"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Contact me
      </h3>

      <div className="flex flex-col space-y-5 md:space-y-10  md:mt-30">
        <h4 className="text-2xl font-semibold text-center">
          I&apos;ve got what you need
        </h4>
        {/* <hr className="border-red-400 max-w-[70vw] md:visible" /> */}
        <div
          className="flex flex-col items-start space-y-5 md:space-y-10 
         p-10 border-t border-red-400"
        >
          <Link
            href={`https://wa.me/529843170969`}
            className="flex items-center space-x-5 justify-evenly "
          >
            <PhoneIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-xl hover:text-red-400">
              +{pageInfo.phoneNumber}
            </p>
          </Link>

          <Link
            href={"mailto:georgerykunov@gmail.com"}
            className="flex items-center space-x-5 justify-evenly text-center"
          >
            <EnvelopeIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-xl hover:text-red-400">
              {pageInfo.email}
            </p>
          </Link>
          <div className="flex items-center space-x-5 justify-evenly">
            <MapPinIcon className="text-red-500 h-7 w-7  animate-pulse" />
            <p className="text-sm md:text-xl">{pageInfo.address}</p>
          </div>
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 sm:w-fit mx-auto shadow-sm w-[80vw]"
        >
          <div className="flex flex-row items-baseline space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="ContactInput w-[39vw] sm:w-full"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="ContactInput w-[39vw] sm:w-full"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="ContactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="ContactInput"
          />
          <button
            type="submit"
            className="bg-red-500 py-5 px-10 text-lg rounded-md font-bold"
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
}
