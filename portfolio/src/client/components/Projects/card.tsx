interface ProjectCardProps {
  img: string;
  // index: number; // Índice único do card
  handleCardClick: (index: number) => void;
}

export const ProjectCard = ({ img,   }: ProjectCardProps) => {
  return (
    <div
      className="md:w-[600px] md:h-96 xs:w-72 xs:h-40 bg-center relative overflow-hidden rounded-lg cursor-pointer"
      // onClick={() => handleCardClick(index)} // Passa o índice ao clicar
    >
      <img src={img} alt="project-image" className="w-full h-full object-fill" />
    </div>
  );
};
