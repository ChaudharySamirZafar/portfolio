import React from "react";
import { m, motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const languages = [
  {
    imgSrc:
      "https://w7.pngwing.com/pngs/917/862/png-transparent-java-programmer-computer-programming-logo-others-miscellaneous-text-logo.png",
    level: "Java 90%"
  },
  {
    imgSrc:
      "https://e7.pngegg.com/pngimages/328/221/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo.png",
    level: "C# 80%"
  },
  {
    imgSrc:
      "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
    level: "Kotlin 75%"
  },
  {
    imgSrc: "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png",
    level: "JavaScript 75%"
  },
  {
    imgSrc:
      "data:image/png;base64,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",
    level: "PHP 75%"
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    level: "Typescript 65%"
  },
  {
    imgSrc:
      "https://www.pngfind.com/pngs/m/62-626208_python-logo-png-transparent-background-python-logo-png.png",
    level: "Python 65%"
  },
  {
    imgSrc:
      "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
    level: "C++ 50%  "
  },
  {
    imgSrc: "https://1.bp.blogspot.com/-trIS3Iz94SE/YIr3iwBC23I/AAAAAAAAtVQ/oieBThHJU3wPJkGOATDSvi6RySwlowM5ACLcBGAsYHQ/s452/spring-logo.png",
    level: "Springboot 85%"
  },
  {
    imgSrc: "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2020/06/09140550/React-logo.png",
    level: "React 85%"
  },
  {
    imgSrc: "https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png",
    level: "Android 65%"
  },
  {
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
    level: ".NET Core 65%",
  },
  {
    imgSrc: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    level: "NextJS 65%",
  },
  {
    imgSrc: "https://w7.pngwing.com/pngs/928/911/png-transparent-junit-software-testing-spring-framework-unit-testing-java-others-miscellaneous-text-trademark.png",
    level: "JUnit 80%",
  },
  {
    imgSrc: "https://banner2.cleanpng.com/20180723/aje/kisspng-amazon-com-amazon-web-services-logo-amazon-elastic-aws-logo-5b56315998d4a3.884772471532375385626.jpg",
    level: "AWS 50%",
  },
  {
    imgSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    level: "Git 80%",
  },
  {
    imgSrc: "https://e7.pngegg.com/pngimages/194/660/png-clipart-orange-and-yellow-fox-logo-gitlab-computer-icons-github-issue-tracking-system-star-fox-angle-orange.png",
    level: "GitLab CI/CD 70%",
  },
  {
    imgSrc: "data:image/png;base64,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",
    level: "MySQL 80%",

  },
  {
    imgSrc: "https://hub.meltano.com/assets/logos/extractors/mssql.png",
    level: "SqlServer 80%",
  },
  {
    imgSrc: "https://w7.pngwing.com/pngs/298/299/png-transparent-docker-yaml-github-repository-github-text-logo-fedora.png",
    level: "Docker 65%",
  }
];


var left = true;

const switchLeft = () => {
  left = !left;
}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-2xl">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 text-center mt-16">
        {languages.map((element, index) => {
          return (
            <Skill key={index} imgSrc={element.imgSrc} level={element.level}/>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
