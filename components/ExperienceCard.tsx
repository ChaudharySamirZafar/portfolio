import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg space-y-7 flex-shrink-0 
    items-center
    w-[500px] md:w-[600px] lg:w-[900px] lg:text-left snap-center bg-[#292929] pl-20 pr-20 pt-4 pb-16 lg:pl-20 lg:pr-20 lg:pt-4 lg:pb-24  hover:opacity-100 opacity-40 cursor-pointer 
    transition-opacity duration-200 overflow-hidden">
      <motion.img
      initial={{
        y: -100,
        opacity: 0
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      viewport={{
        once:true
      }}
        className="w-32 h-32 rounded-full md:rounded-full object-cover object-start xl:w-[200px] xl:h-[200px] self-center"
        src="data:image/png;base64,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"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Capital One, UK</p>
        <div className="flex space-x-2 my-2">
            <img
                className="h-10 w-10 rounded-full bg-white"
                src="https://spng.pngfind.com/pngs/s/74-744402_java-logo-png-transparent-svg-vector-freebie-supply.png"
            />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended ...</p>
        <ul className="list-disc ml-5 lg:text-md">
            <li>Developed a new feature in the Android Application</li>
            <li>Conducted Unit, Screenshot, Functional, Device, UI & Manual testing</li>
            <li>Developed a documentation website using React.js and Cypress (testing framework)</li>
            <li>Worked within a team that used Agile techniques</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
