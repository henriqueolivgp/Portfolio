import { ComponentProps } from "react";
import { TypewriterText } from "../components/tipeWriter";
import { Me } from "../components/introduction/me";
import { Github, Linkedin } from "lucide-react";

interface IntroductionProps extends ComponentProps<"div"> {}

export const Introduction = (props: IntroductionProps) => {
  return (
    <>
      <div
        id="profile"
        {...props}
        className="relative top-0 left-0 w-full h-screen z-10 "
      >
        {/* Adiciona imagem ao fundo */}
        <img
          src="/Background.jpg"
          alt="imagem de fundo"
          className="absolute md:w-full top-0 z-0 h-screen"
        />

        {/* Adicionando uma camada escura */}
        <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-t from-black/100 to-black/35  "></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>

        <div className="container mx-auto space-y-2 ">
          <div className="content flex flex-col justify-center h-screen parallax">
            <div className="flex md:justify-between xs:justify-center xs:items-center xs:flex">
              <div className="bg-transparent font-normal">
                <div>
                  <div className="flex justify-center md:justify-end">
                    {/* Imagem para telas pequenas (xs) */}
                    <a href="https://github.com/henriqueolivgp" target="_blank">
                      <img
                        src="/image.png"
                        alt="my-photo"
                        className="block md:hidden h-64 w-64 object-cover"
                      />
                    </a>
                  </div>
                  <p className="md:mb-2 md:tracking-tight text-gray-300  text-4xl lg:text-6xl xs:text-2xl ">
                    Hi,
                  </p>
                  <p className="md:mb-2 tracking-tight text-gray-300  text-4xl xl:text-6xl xs:text-2xl ">
                    I’m Henrique Oliveira,
                  </p>
                  <span className="tracking-tight text-gray-300  text-4xl xl:text-6xl xs:text-2xl ">
                    <TypewriterText text="Full-Stack Developer." />
                  </span>
                  <svg
                    width="100%"
                    height="32"
                    viewBox="0 0 713 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 24.6382C314.835 -2.35291 400.867 8.08049 405.529 16.6711"
                      stroke="#60A5FA"
                      stroke-width="14"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="flex gap-4 ml-[6%]">
                  <a
                    href="https://www.linkedin.com/in/henrique-oliveira-gp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className=" flex items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-950 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
                    >
                      <Linkedin />
                      LinkedIn
                    </button>
                  </a>
                  <a
                    href="https://github.com/henriqueolivgp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="flex items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-950 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4 "
                    >
                      <Github size={24} />
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
              {}
              <Me />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
