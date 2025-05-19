// ProjectCard.tsx
import { useEffect, useState } from "react";
import { ProjectWebCard } from "./WebCard";
// import Images from "../../utils/images";
import webprojectsData from "../../data/WebProjects.json";
// import mobileprojectsData from "../../data/MobileProjects.json";
import { Project } from "../../DTO/projects";
// import { ProjectMobileCard } from "./MobileCard";

export const ProjectsGroup = () => {
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  // const [mobileProjects, setMobileProjects] = useState<Project[]>([]);

  useEffect(() => {
    setWebProjects(webprojectsData);
    // setMobileProjects(mobileprojectsData);
  });

  return (
    <>
      <div className="relative w-auto flex">
        {/* <FilterMenu /> */}
        <div
          className="w-auto flex flex-col justify-center "
          data-carousel="static"
        >
          <div className="flex left-0 items-center gap-14">
            {webProjects.map((project) => (
              <>
                <ProjectWebCard
                  key={project.id}
                  img={project.image || ''}
                  video={project.video || ''}
                  name={project.name}
                  description={project.description}
                  features={project.features}
                  technologies={project.technologies}
                  repo={project.repository}
                  live={project.live}
                />
              </>
            ))}
          </div>

          {/*
          <div  className="flex flex-col gap-12">
            {mobileProjects.map((project) => (
              <>
                <ProjectMobileCard
                  key={project.id}
                  img={project.image}
                  name={project.name}
                  description={project.description}
                  features={project.features}
                  technologies={project.technologies}
                  repo={project.repository}
                />
              </>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
