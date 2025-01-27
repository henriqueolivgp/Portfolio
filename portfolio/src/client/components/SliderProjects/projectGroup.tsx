// ProjectCard.tsx
import { useState } from "react";
import { ProjectCard } from "./card";
import Images from "../../utils/images";
import { FilterMenu } from "./filterMenu";
import images from "../../utils/images";

export const ProjectsGroup = () => {
  const [currentSlide, setCurrentSlide] = useState<number | null>(null); // Card em foco
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o modal
  const totalSlides = 4; // Total de cartões

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
        className="relative w-full flex-1 flex-wrap justify-center items-center"
        data-carousel="static"
      >
        <FilterMenu />
        <div className="flex flex-wrap justify-center items-center space-y-4 gap-14">
          <ProjectCard img={images.CRImage} />
          <ProjectCard img={images.CRImage} />
          <ProjectCard img={images.CRImage} />
          <ProjectCard img={images.CRImage} />
          <ProjectCard img={images.CRImage} />
          
        </div>

        {isModalOpen && currentSlide !== null && (
          <div className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-PPurple-medium w-full md:w-[70%] lg:w-[50%] h-[80%] rounded-2xl">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-transparent hover:bg-PDark rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4">
                {/* Modal content */}
                <h1 className="text-white text-xl">Card {currentSlide + 1}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
