import { ComponentProps } from "react";
import { TypewriterText } from "../utils/tipeWriter";
import { Me } from "../components/introduction/me";
import { Github, Linkedin } from "lucide-react";
import ShinyText from "../utils/ShinyText";

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
        <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-t from-black/100 lg:to-black/35 xxs:to-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>

        <div className="container mx-auto space-y-2 parallax h-screen flex justify-center items-center w-full">
            <div className="flex w-full lg:p-10 lgg:p-10 xxs:flex-wrap gap-4 lg:justify-between xxs:justify-center items-center">
              <div className="flex w-full xxs:w-full sm:w-1/2 md:w-1/2 bg-transparent font-normal">
                <div className="flex flex-col">
                  <section className="flex flex-col">
                    <p className="md:mb-2 md:tracking-tight text-gray-300  text-4xl xl:text-4xl xs:text-2xl lg:text-3xl ">
                      Hi,
                    </p>
                    <p className=" md:mb-2 tracking-tight text-gray-300  text-4xl xl:text-4xl xs:text-2xl lg:text-3xl ">
                      I’m Henrique Oliveira,
                    </p>
                    <span className="tracking-tight text-gray-300  text-4xl xl:text-4xl xs:text-2xl lg:text-3xl ">
                      <TypewriterText text="Full-Stack Developer." />
                    </span>
                  </section>
                  <div className="flex ">
                    <svg className="w-4/5 h-8" viewBox="0 0 713 32">
                      <path
                        className=""
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
                        className=" flex items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-800 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
                      >
                        <Linkedin />

                        <ShinyText
                          text="LinkedIn"
                          disabled={false}
                          speed={3}
                          className="custom-class"
                        />
                      </button>
                    </a>
                    <a
                      href="https://github.com/henriqueolivgp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        className="flex items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-800 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4 "
                      >
                        <Github size={24} />

                        <ShinyText
                          text="Github"
                          disabled={false}
                          speed={3}
                          className="custom-class"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <section className="flex lg:w-1/3 sm:w-1/2 xxs:w-full">
                <Me />
              </section>
            </div>
          </div>
        </div>
      
    </>
  );
};
