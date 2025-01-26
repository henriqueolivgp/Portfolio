export const ProjectCard = () => {
  return (
    <div className="max-w-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer relative">
      <img className="rounded-t-lg" src="/projects/img.jpg" alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-300 hover:opacity-0">
        
      </div>
    </div>
  );
};
