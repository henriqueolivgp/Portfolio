// ProjectCard.tsx
import { useState } from "react";
import { ProjectCard } from "./card";
// import Images from "../../utils/images";
import { FilterMenu } from "./filterMenu";
import images from "../../utils/images";
import { ProjectModal } from "../projectModal/projectModal";

export const ProjectsGroup = () => {
  const [currentSlide, setCurrentSlide] = useState<number | null>(null); // Card em foco
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o modal


  const handleCardClick = (index: number) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSlide(null);
  };

  return (
    <>
      <div
        className=" w-full flex flex-wrap justify-center items-center md:bottom-10"
        data-carousel="static"
      >
        <FilterMenu />
        <div className="flex flex-wrap justify-center items-center mt-8 gap-14 ">
          <ProjectCard img={images.CRImage} handleCardClick={handleCardClick} />
          <ProjectCard img={images.CRImage} handleCardClick={handleCardClick}/>
          <ProjectCard img={images.CRImage} handleCardClick={handleCardClick}/>
          <ProjectCard img={images.CRImage} handleCardClick={handleCardClick}/>
          <ProjectCard img={images.CRImage} handleCardClick={handleCardClick}/>
          <ProjectCard img={images.CRImage} handleCardClick={handleCardClick}/>
        </div>

        <ProjectModal closeModal={closeModal} currentSlide={currentSlide} isModalOpen={isModalOpen}/>

      </div>
    </>
  );
};
