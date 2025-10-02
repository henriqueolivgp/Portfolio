import { ComponentProps } from "react";
import { Github, Globe } from "lucide-react";
import ShinyText from "../../utils/ShinyText";
import { Badge } from "../badge/badge";
import { CardSlider } from "./WebCard/carrousel";

interface ProjectWebCardProps extends ComponentProps<"div"> {
  name: string;
  badge: {
    web?: boolean;
    mobile?: boolean;
    front?: boolean;
    back?: boolean;
  };
  images: {
    src: string;
    alt: string;
  }[];
  video: string;
  description: string;
  technologies: string[];
  features: string[];
  repo: string;
  live: string;
  order: string;
  imgSlider: boolean;
}

export const ProjectWebCard = ({
  name,
  badge,
  images,
  video,
  description,
  technologies,
  features,
  repo,
  live,
  order,
  imgSlider,
}: ProjectWebCardProps) => {
  const badges = [
    {
      condition: badge.web,
      text1: "Web",
      Icon: Globe,
      bgColor: "bg-orange-500",
    },
    {
      condition: badge.back,
      text1: "Back",
      text2: "-end",
      Icon: Globe,
      bgColor: "bg-gray-700",
    },
    {
      condition: badge.front,
      text1: "Front",
      text2: "-end",
      Icon: Globe,
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <>
      <div className="flex 2xl:flex-row xl:flex-col xs:flex-col xs:justify-center xs:items-center justify-center h-auto gap-8">
        <div
          style={{ order }}
          className={` flex lg:w-[40%] xs:w-auto flex-col border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          <div className="flex w-full flex-col p-4 leading-normal space-y-2">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
              {name}
            </h1>
            <section className="flex w-full gap-2">
              {badges.map(
                (b, i) =>
                  b.condition && (
                    <Badge
                      key={i}
                      text1={b.text1}
                      text2={b.text2}
                      Icon={b.Icon}
                      bgColor={b.bgColor}
                    />
                  )
              )}
            </section>
            <p className=" font-normal text-gray-200 dark:text-gray-400">
              {description}
            </p>

            <section className="flex sm:flex-nowrap xs:flex-wrap xs:w-full gap-4">
              <section className="flex flex-col sm:w-1/2 xs:w-full space-y-1.5">
                <h1 className="mb-2 text-1xl font-semibold tracking-tight text-gray-400 dark:text-white">
                  Technologies
                </h1>
                {technologies.map((tech, index) => (
                  <ul key={index} className="flex w-auto text-gray-500">
                    <li>● {tech}</li>
                  </ul>
                ))}
              </section>

              <section className="flex flex-col sm:w-1/2 xs:w-full  space-y-1.5">
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

            <section className="flex xs:justify-center sm:justify-normal gap-4">
              {live && (
                <a href={live} target="_blank">
                  <button
                    type="button"
                    className=" flex min-w-auto max-w-auto items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-800 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
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
              )}
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
                    <span className="hidden lg:flex">
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
            className="lg:w-[40%] h-auto xs:w-auto"
            src={video}
            controls
            autoPlay
            muted
            loop
          />
        )}

        {imgSlider && (
          <div className="lg:w-[40%] h-auto xs:w-[80%]">
            {imgSlider && <CardSlider slides={images} />}
          </div>
        )}
      </div>
    </>
  );
};
