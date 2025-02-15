import { ComponentProps } from "react";

interface ProjectCardProps extends ComponentProps<'div'>{
  img: string;
  index: number; // Índice único do card
  handleCardClick: (index: number) => void;
}

export const ProjectCard = ({ img, index, handleCardClick,  }: ProjectCardProps) => {
  return (
    <div
      className="lg:w-[500px] lg:h-80 lg:bottom-4 border border-b-gray-50 xs:w-72 xs:h-40 bg-center relative overflow-hidden rounded-lg cursor-pointer"
      onClick={() => handleCardClick(index)} // Passa o índice ao clicar
    >
      <div className="">

      </div>
      <img src={img} alt="project-image" className="w-full h-full object-fill" />
    </div>
  );
};
