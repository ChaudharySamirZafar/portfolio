import React from "react";
import { motion } from "framer-motion";

type Props = { imgSrc: string; level: string; left: boolean };

function Skill({ imgSrc, level, left }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src={imgSrc}
        className="rounded-full border border-gray-500 object cover w-16 h-16 lg:h-24 lg:w-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 lg:h-24 lg:w-24 rounded-full z-0 text-center">
        <div className="flex items-center justify-center h-full">
          <p className="text-md font-bold text-black opacity-100">{level}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
