import React from "react";
import { motion } from "framer-motion";

type Props = {
  imageSource: string;
  positionName: string;
  companyName: string;
  skills: Array<any>;
  time: string;
  description: Array<string>;
};

function ExperienceCard({
  imageSource,
  positionName,
  companyName,
  skills,
  time,
  description,
}: Props) {
  return (
    <article className=" flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 md:p10  cursor-pointer">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center"
        src={imageSource}
        alt=""
      />
      <div className="w-full px-0 md:px-10">
        <div className=" md:flex md:justify-between items-center">
          <div>
            <h4 className="text-lg md:text-3xl font-light text-white">
              {positionName}
            </h4>
            <p className="font-bold text-sm md:text-2xl">{companyName}</p>
            <div className="flex space-x-2 my-1">
              {skills.map((technology, index) => (
                <div className="flex flex-col items-center" key={technology.url}>
                <img
                  key={index}
                  className="h-10 w-10 rounded-full object-cover"
                  src={technology.url}
                  alt=""
                />
                <h4 className="font-semibold text-xs"> {technology.tag} </h4>
                </div>
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28  rounded-full mb-0 object-cover object-center"
            src={imageSource}
            alt=""
          />
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-500 text-xs md:text-lg">
          {time}
        </p>
      </div>
      <ul className="px-0 md:px-10 list-disc text-white space-y-1 pr-5 text-justify ml-0 text-xs md:text-md pl-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
