import { ComponentProps, useEffect, useState } from "react";
import { Github, Globe } from "lucide-react";
import ShinyText from "../../utils/ShinyText";
import { Badge } from "../badge/badge";

interface ProjectCardProps extends ComponentProps<"div"> {
  img: string;
  video: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  repo: string;
  live: string;
}

export const ProjectWebCard = ({
  video,
  name,
  description,
  technologies,
  features,
  repo,
  live,
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
      <div className="flex lgg:flex-row xs:flex-col xs:justify-center xs:items-center justify-center  w-full h-auto gap-8">
        <div className="flex w-[80%] flex-col border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col p-4 leading-normal space-y-2">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
              {name}
            </h1>
            <section className="flex w-full gap-2">
              <Badge text="Web" Icon={Globe} bgColor="bg-orange-500" />
              <Badge text="Back-end" Icon={Globe} bgColor="bg-gray-700" />
              <Badge text="Front-end" Icon={Globe} bgColor="bg-blue-500" />
            </section>
            <p className=" font-normal text-gray-200 dark:text-gray-400">
              {description}
            </p>

            <section className="flex flex-wrap sm:flex-nowrap xxs:w-full gap-4">
              <section className="flex flex-col sm:w-1/2 xxs:w-full space-y-1.5">
                <h1 className="mb-2 text-1xl font-semibold tracking-tight text-gray-400 dark:text-white">
                  Technologies
                </h1>
                {technologies.map((tech, index) => (
                  <ul key={index} className="flex w-auto text-gray-500">
                    <li>● {tech}</li>
                  </ul>
                ))}
              </section>

              <section className="flex flex-col sm:w-1/2 xxs:w-full  space-y-1.5">
                <h1 className="mb-2 text-1xl font-semibold tracking-tight text-gray-400 dark:text-white">
                  Features
                </h1>
                {features.map((features, index) => (
                  <ul key={index} className="text-gray-500">
                    <li>● {features}</li>
                  </ul>
                ))}
              </section>
            </section>

            <section className="flex xxs:justify-center sm:justify-normal gap-4">
              <a href={live} target="_blank">
                <button
                  type="button"
                  className=" flex min-w-auto max-w-40 items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-800 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
                >
                  <Globe size={24} />
                  <ShinyText
                    text="Website"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </button>
              </a>
              <a href={repo} target="_blank">
                <button
                  type="button"
                  className=" flex min-w-auto max-w-50 items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-800 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
                >
                  <Github size={24} />
                  <section className="flex gap-1">
                    <ShinyText
                      text="Github"
                      disabled={false}
                      speed={3}
                      className="custom-class"
                    />
                    <span className="xxs:hidden sm:flex">
                      <ShinyText
                        text="Project"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </span>
                  </section>
                </button>
              </a>
            </section>
          </div>
        </div>
        {video && (
          <video
            className="lgg:w-[40%] h-auto xs:w-[80%]"
            src="/videos/Cyber-Reports.mp4"
            controls
            autoPlay
            muted
            loop
          />
        )}
      </div>
    </>
  );
};
