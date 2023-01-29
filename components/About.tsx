import React from "react";
import image from "./PortfolioImg.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://drive.google.com/uc?export=view&id=1xCAeMp118wGAe-TZ2rjV0ag9VXnxTIYX"
        className="mt-32 md:mb-0 flex-shrink-0 w-56 h-90 rounded-full object cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
          I am Samir Zafar, a computer science student in my final year of
          university. I possess a strong passion for creating innovative and
          impactful software solutions. I have gained valuable experience in
          enterprise-level software development, testing, and maintainability
          through contributing to various projects. I am proud to have also
          built a few commercial products aimed at helping individuals improve
          their coding abilities. I am constantly seeking to further develop my
          skills and knowledge in the field of software engineering and am
          committed to contributing to the growth and success of any
          organization I join.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
