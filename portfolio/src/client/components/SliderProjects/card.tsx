
interface ProjectCardProps {
  img: string,

}

export const ProjectCard = ({img}: ProjectCardProps) => {
  return (
    <div className="w-[600px] h-96 bg-center relative overflow-hidden">
            <img
              src={img}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>
  );
};
