// ProjectCard.tsx
import { useEffect, useState } from "react";
import { ProjectCard } from "./card";
// import Images from "../../utils/images";
import { FilterMenu } from "./filterMenu";
import { ProjectModal } from "../projectModal/projectModal";
import projectsData from "../../data/projects.json";
import { Project } from "../../DTO/projects";

export const ProjectsGroup = () => {
  const [currentProject, setcurrentProject] = useState<number | null>(null); // Card em foco
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o modal\

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  });

  const handleCardClick = (index: number) => {
    console.log(index);
    setcurrentProject(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setcurrentProject(null);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <FilterMenu />
        <div
          className="w-full flex flex-wrap justify-center items-center md:bottom-10 mt-8"
          data-carousel="static"
        >
          <div className="flex flex-wrap justify-center items-center gap-14">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                img={project.image}
                handleCardClick={() => handleCardClick(index)} index={index}              />
            ))}
          </div>
          <ProjectModal
            closeModal={closeModal}
            currentproject={currentProject !== null ? projects[currentProject] : null}
            isModalOpen={isModalOpen}

          />
        </div>
      </div>
    </>
  );
};
