import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const experience = [
  {
    imageSource:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qehrjl5exlpfc7xrvkqk",
    positionName: "Academic Computer Science Tutor",
    companyName: "University Of Salford, Manchester",
    skills: [],
    time: "September 2022 - Present - 5 Months",
    description: [
      "Supported first year students learn and understand the fundamental computer science concepts in different modules. This included me helping them with assessments and workshop learning.",
    ],
  },
  {
    imageSource:
      "data:image/png;base64,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",
    positionName: "Software Engineer Internship",
    companyName: "Capital One, UK",
    skills: [
      {
        url: "https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png",
        tag: "Android",
      },
      {
        url: "https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png",
        tag: "React",
      },
      {
        url: "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png",
        tag: "Spring"
      },
      {
        url: "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
        tag: "Kotlin"
      },
      {
        url: "https://w7.pngwing.com/pngs/917/862/png-transparent-java-programmer-computer-programming-logo-others-miscellaneous-text-logo.png",
        tag: "Java"
      },
      {
        url: "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/03/cypress.png?fit=364%2C364&ssl=1",
        tag: "Cypress"
      },
      {
        url: "https://image.pngaaa.com/384/3822384-middle.png",
        tag: "AWS"
      }
    ],
    time: "June 2022 - September 2022 - 4 Months",
    description: [
      "Developed a new feature in the Android Application.",
      "Conducted Unit, Screenshot, Functional, Device, UI & Manual testing",
      "Developed a documentation website using React.js and Cypress (testing framework).",
      "Worked within a team that used Agile techniques.",
      "Won the 'Mission Impossible Award' for accomplishing the imposibble. The feature that I had to implement was not native to Android so it was naturally a lot more difficult.",
    ],
  },
  {
    imageSource:
      "https://logistyx.com/wp-content/uploads/2019/09/Infor-logo.png",
    positionName: "Software Engineer Placement",
    companyName: "Infor, UK",
    skills: [
      {
        url: "https://e7.pngegg.com/pngimages/328/221/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo.png",
        tag: "C#",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
        tag: ".NET Core"
      },
      {
        url: "https://codeopinion.com/wp-content/uploads/2017/10/Bitmap-MEDIUM_Entity-Framework-Core-Logo_2colors_Square_Boxed_RGB.png",
        tag: "EF Core",
      },
      {
        url: "https://hub.meltano.com/assets/logos/extractors/mssql.png",
        tag: "SqlServer"
      },
      {
        url: "https://1.bp.blogspot.com/-iHKRt-QGNOA/YLBNAkAks6I/AAAAAAAATgQ/bPIzcIPT3CQZ6paDVSwYq_tJIee0wuQ2QCLcBGAsYHQ/s0/Oracle%2BLogo%2B-%2BDownload%2BFree%2BPNG.png",
        tag: "Oracle"
      }
    ],
    time: "June 2021 - June 2022 - 1 Year",
    description: [
      "Worked with technologies such as : Entity Framework, .NET (C#), SQL – rebuilt the core functionality of the system and converting it to C# so it is centralized and maintainable.",
      "Regularly improved existing implementations through refactoring and modernisation.",
      "Reviewed code and conducted testing (Unit Testing, Integration Testing, Acceptance Testing and Regression Testing).",
      "Worked within a team that used Agile Techniques.",
    ],
  },
];

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex flex-row space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience.map((element, i) => {
          return (
            <ExperienceCard
              key={i}
              imageSource={element.imageSource}
              positionName={element.positionName}
              companyName={element.companyName}
              skills={element.skills}
              time={element.time}
              description={element.description}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
