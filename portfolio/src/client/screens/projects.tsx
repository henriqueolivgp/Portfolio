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

  }, []);

  return (
    <>
      <section id="projects" className="flex h-auto">
        <section className=" flex flex-col justify-center xxs:items-center mt-24 p-10 gap-20 h-auto">
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
          </section>
          <section className="grid grid-cols-1 gap-10 h-auto">
            {webProjects.map((project) => (
              <ProjectWebCard
                key={project.id}
                name={project.name}
                badge={project.badge}
                images={project.images || [{ src: "", alt: "" }]}
                video={project.video || ""}
                description={project.description}
                features={project.features}
                technologies={project.technologies}
                repo={project.repository}
                live={project.live || ""}
                order={project.order}
                imgSlider={project.imgSlider}
              />
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
