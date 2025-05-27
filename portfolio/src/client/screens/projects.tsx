import { useState, useEffect } from "react";
import { ProjectWebCard } from "../components/Projects/WebCard";
import { Project } from "../DTO/projects";
import RotatingText from "../utils/RotatingText";
import webprojectsData from "../../client/data/WebProjects.json";

export const Projects = () => {
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  // const [mobileProjects, setMobileProjects] = useState<Project[]>([]);

  useEffect(() => {
    setWebProjects(webprojectsData);
    // setMobileProjects(mobileprojectsData);
  },[]);

  return (
    <>
      <section id="projects" className="flex h-auto">
        <section className=" flex flex-col justify-center xxs:items-center top-1/2 p-10 gap-20 h-auto">
          <section className="flex flex-col w-full justify-center items-center h-auto">
            <section className="flex gap-2 justify-center">
              <h1 className="font-bold w-full text-left text-gray-300 lg:text-6xl md:text-4xl xxs:mt-6 lg:mt-0 xss:text-2xl">
                Projects
              </h1>
              <section className="flex justify-center items-center h-20 xxs:w-full">
                <RotatingText
                  texts={["Web", "Mobile"]}
                  mainClassName="flex xxs:w-24 md:w-40 lg:w-44 lg:h-full xxs:h-12 items-center  justify-center lg:px-3 text-gray-300 lg:text-5xl md:text-4xl xxs:text-xl  font-bold overflow-hidden rounded-lg w-full"
                  style={{ backgroundColor: "#385B87" }}
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </section>
            </section>
            <section className="flex lg:w-full md:w-80 xxs:w-[40%] xxs:-mt-5 lg:-mt-4">
              <svg
                width="100%"
                height="18"
                viewBox="0 0 863 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.99999 34.4052C659.392 -0.143978 847.224 1.07128 859.09 5.99756"
                  stroke="#EFF6FF"
                  stroke-width="5.9029"
                  stroke-linecap="round"
                />
              </svg>
            </section>
          </section>
          <section className="flex h-auto">
            {webProjects.map((project) => (
              <>
                <ProjectWebCard
                  key={project.id}
                  img={project.image || ""}
                  video={project.video || ""}
                  name={project.name}
                  description={project.description}
                  features={project.features}
                  technologies={project.technologies}
                  repo={project.repository}
                  live={project.live}
                />
              </>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
