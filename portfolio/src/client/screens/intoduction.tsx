import { ComponentProps } from "react";
import { TypewriterText } from "../components/tipeWriter";

interface IntroductionProps extends ComponentProps<"div"> {}

export const Introduction = (props: IntroductionProps) => {
  return (
    <>
      <div
        id="profile"
        {...props}
        className="relative top-0 left-0 w-full h-screen z-10"
      >
        {/* Adiciona imagem ao fundo */}
        <img
          src="/Background.jpg"
          alt="imagem de fundo"
          className="absolute w-full top-0 z-0 h-screen"
        />

        {/* Adicionando uma camada escura */}
        <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-t from-black/100 to-black/35  "></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>

        <div className="container mx-auto space-y-2  font-mono">
          <div className="content flex flex-col justify-center h-screen parallax">
            <div className="flex items-center justify-between ">
              <div className="bg-transparent text-4xl xl:text-6xl">
                <p className="mb-2 tracking-tight text-gray-300">Hi,</p>
                <p className="mb-2 tracking-tight text-gray-300">
                  I’m Henrique Oliveira,
                </p>
                <p className="tracking-tight text-gray-300">
                  <TypewriterText text="Full-Stack Developer." />
                </p>
                <div className="flex gap-4">
                  <a href="../../../doc/CV.pdf" download={true}>
                    <button
                      type="button"
                      className="text-black text-lg bg-P-white hover:bg-gray-400 font-medium rounded-lg px-5 py-2.5 mt-4"
                    >
                      Download CV
                    </button>
                  </a>
                  <a href="mailto:henrique.b.oliveira@outlook.pt">
                    <button
                      type="button"
                      className="text-black text-lg bg-P-white hover:bg-gray-400 font-medium rounded-lg px-5 py-2.5 mt-4 "
                    >
                      Contact-me
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex">
                <a href="https://github.com/henriqueolivgp" target="_blank">
                  <img src="/image.png" alt="my-photo" className="h-96" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
