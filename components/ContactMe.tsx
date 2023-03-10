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
    window.location.href = `mailto:chaudharysamirzafar@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name + "%0d%0a %0d%0a" + formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
        <h4 className="text-sm md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]  underline">Lets talk.</span>
        </h4>

        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] md:h-7 md:w-7 animate-pulse text-xs w-4 h-4"/>
            <p className="md:text-2xl lg:text-2xl text-sm">+44 7456979575</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] md:h-7 md:w-7 animate-pulse w-4 h-4" />
            <p className="text-sm md:text-2xl lg:text-2xl">
              chaudharysamirzafar@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] md:h-7 md:w-7 animate-pulse w-4 h-4" />
            <p className="text-sm md:text-2xl lg:text-2xl">
              Manchester, United Kingdom
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-80 md:w-auto"
              type="text"
            />{" "}
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-80 md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput "
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}