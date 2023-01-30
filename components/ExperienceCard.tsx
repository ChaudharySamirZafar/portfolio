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
    <article
      className="flex flex-col rounded-lg flex-shrink-0 
    items-center
    w-[500px] md:w-[600px] lg:w-[900px] lg:text-left snap-center bg-[#292929] pl-20 pr-20 pt-4 pb-16 lg:pl-20 lg:pr-20 lg:pt-4 lg:pb-24   cursor-pointer 
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="w-24 h-24 rounded-full md:rounded-full object-cover object-center xl:w-[150px] xl:h-[150px] self-center"
        src={imageSource}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light lg:text-4xl">{positionName}</h4>
        <p className="font-bold text-1xl mt-1 lg:text-2xl">{companyName}</p>
        {skills.length > 0 && <p className="font-semibold text-2xl">Skills</p>}
        <div className="flex space-x-2 my-2">
          {skills.map((element) => {
            return (
              <div className="flex flex-col items-center" key={element.url}>
                <img
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white m-0"
                  src={element.url}
                />
                <h4 className="font-semibold text-sm"> {element.tag} </h4>
              </div>
            );
          })}
        </div>
        <p className="uppercase py-2 text-gray-300">{time}</p>
        <ul className="list-disc ml-5 text-sm lg:text-base">
          {description.map((element) => {
            return <li key={element}>{element}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
