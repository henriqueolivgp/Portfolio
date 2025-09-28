import { ComponentProps, useEffect, useState } from "react";
import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../badge/badge";

interface ProjectCardProps extends ComponentProps<"div"> {
  img: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  repo: string;
}

export const ProjectMobileCard = ({
  img,
  name,
  description,
  technologies,
  features,
  repo,
}: ProjectCardProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isZoomed) {
      const timer = setTimeout(() => setIsZoomed(false), 2000); // Fecha após 3 segundos
      return () => clearTimeout(timer); // Limpa o timer se o usuário fechar antes
    }
  }, [isZoomed]);

  return (
    <>
      <div className="flex justify-center w-auto h-auto gap-8">
        <motion.div
          layout
          className={`relative cursor-pointer ${
            isZoomed
              ? "absolute z-10 inset-0 flex justify-center items-center bg-slate-950"
              : ""
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <motion.img
            src={img}
            alt="Zoomable"
            className="w-full h-full object-cover rounded-lg md:w-96 md:h-full "
            layout
            initial={{ scale: 1 }}
            animate={{ scale: isZoomed ? 1.5 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </motion.div>
        <div className="flex flex-col  border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl ">
          <div className="flex flex-col p-4 leading-normal space-y-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
              {name}
            </h5>
            <div className="flex gap-2">
              <Badge Icon={Globe} bgColor="bg-yellow-600" text1="Front-end" />
            </div>
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
              {description}
            </p>
            <h1 className="mb-2 text-1xl font-semibold tracking-tight text-gray-400 dark:text-white">
              Technologies
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              {technologies.map((tech, index) => (
                <li key={index} className="text-gray-500">
                  {tech}
                </li>
              ))}
            </ul>{" "}
            <h1 className="mb-2 text-1xl font-semibold tracking-tight text-gray-400 dark:text-white">
              Features
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              {features.map((features, index) => (
                <li key={index} className="text-gray-500">
                  {features}
                </li>
              ))}
            </ul>
            <a href={repo} target="_blank">
              <button
                type="button"
                className=" flex w-40 items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-800 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
              >
                <Github size={24} />
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-white border-dashed mt-6" />
    </>
  );
};
