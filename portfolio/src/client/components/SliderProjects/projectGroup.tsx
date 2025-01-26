// ProjectCard.tsx
import { useState } from "react";
import { ProjectCard } from "./card";

export const ProjectsGroup = () => {
  const [currentSlide, setCurrentSlide] = useState<number | null>(null); // Card em foco
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null); // Para o hover
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o modal
  const totalSlides = 4; // Total de cartões

  const handleMouseEnter = (index: number) => {
    setHoveredSlide(index);
  };

  const handleMouseLeave = () => {
    setHoveredSlide(null);
  };

  const handleCardClick = (index: number) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSlide(null);
  };

  return (
    <div
      className="relative w-full flex flex-wrap justify-center items-center"
      data-carousel="static"
    >
      <div className="flex flex-wrap justify-center items-center gap-11 w-full">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(index)}
          
          >
            <ProjectCard />
          </div>
        ))}
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
  );
};
