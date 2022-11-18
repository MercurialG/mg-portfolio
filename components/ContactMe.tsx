import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:georgerykunov@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message}`;
  };

  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Contact me
      </h3>

      <div className="flex flex-col space-y-10 mt-32">
        <h4 className="text-4xl font-semibold text-center">
          I've got what you need
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+5555555555</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-red-500 h-7 w-7  animate-pulse" />
            <p className="text-2xl">Mexico, Quintana Roo, Playa Del Carmen</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">georgeRykunov@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto shadow-sm"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="ContactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="ContactInput"
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
        </form>
      </div>
    </div>
  );
}
