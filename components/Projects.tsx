import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const projects = [
  {
    projectImg:
      "https://drive.google.com/uc?export=view&id=1IhppSCWEdfks6uWJbb6HVo6CScKGgBHf",
    projectName: "Codenemy",
    tech: [
      "https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png",
      "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png",
      "https://w7.pngwing.com/pngs/298/299/png-transparent-docker-yaml-github-repository-github-text-logo-fedora.png",
      "https://e7.pngegg.com/pngimages/194/660/png-clipart-orange-and-yellow-fox-logo-gitlab-computer-icons-github-issue-tracking-system-star-fox-angle-orange.png",
      "data:image/png;base64,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",
    ],
    link: "https://www.codenemy.com/",
    desc: "The website, created as a final year project, offers a platform for coders to solve problems and improve their coding abilities in a simulated environment. With features such as real-time contests and access to a large database of coding problems, users can test their abilities and track their progress. The project also showcases the implementation of various commercial techniques and tools, such as automated testing for the backend, to ensure the accuracy and reliability of the platform. The use of a CI/CD pipeline for efficient deployment and TDD for a more efficient development process, combined with the employment of design patterns, results in a sophisticated and comprehensive platform for users to challenge themselves and develop their skills.",
  },
  {
    projectImg:
      "https://drive.google.com/uc?export=view&id=1gol8XefVHfVjiZ48ZHobhP2nF4PlqWU0",
    projectName: "Explain My Code",
    tech: [
      "https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png",
      "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png",
      "https://e7.pngegg.com/pngimages/194/660/png-clipart-orange-and-yellow-fox-logo-gitlab-computer-icons-github-issue-tracking-system-star-fox-angle-orange.png"
    ],
    link: "https://explainmycode.co.uk",
    desc: "'Explain My Code' is an app aimed at helping beginners learn coding. The app allows users to enter code and receive explanations of it through the OpenAI API. It provides a user-friendly interface for learning and understanding code, making it a valuable tool for beginners to improve their coding skills."
  }
];

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-16 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, index) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-10 md:p-44 h-screen"
              key={index}
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="h-28 xl:h-80 md:h-72 object-center rounded-3xl"
                src={project.projectImg}
                alt=""
              />

              <div className="space-y-1 md:space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-sm md:text-2xl lg:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]">
                    Project {index + 1} out of {projects.length}:
                  </span>
                  {""} {project.projectName}
                </h4>
                <div className="flex items-center space-x-2 justify-center ">
                  {project.tech.map((tech, i) => (
                    <img
                      key={index}
                      className="h-10 w-10 md:h-16  md:w-16  rounded-full object-cover"
                      src={tech}
                      alt=""
                    />
                  ))}
                </div>
                {project.link && (
                <Link
                  href={project.link}
                  className="text-sm md:text-lg"
                >
                  <h4 className="font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]">
                      {project.link}
                    </span>
                  </h4>
                </Link>
                )}
                <p className="text-xs md:text-md lg:text-lg text-center">
                  {project.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
