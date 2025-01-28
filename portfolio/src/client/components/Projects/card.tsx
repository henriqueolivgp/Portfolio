interface ProjectCardProps {
  img: string;
  // index: number; // Índice único do card
  handleCardClick: (index: number) => void;
}

export const ProjectCard = ({ img,   }: ProjectCardProps) => {
  return (
    <div
      className="w-[600px] h-96 bg-center relative overflow-hidden rounded-lg cursor-pointer"
      // onClick={() => handleCardClick(index)} // Passa o índice ao clicar
    >
      <img src={img} alt="" className="w-full h-full object-fill" />
    </div>
  );
};
