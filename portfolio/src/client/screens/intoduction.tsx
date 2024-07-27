import { ComponentProps } from "react";
import { TypewriterText } from "../components/tipeWriter";

interface IntroductionProps extends ComponentProps<"div"> {}

export const Introduction = (props: IntroductionProps) => {
  return (
    <>
      <div id="profile"  {...props} className="relative top-0 left-0 w-full h-screen z-10">
        {/* Adiciona imagem ao fundo */}
        <img
          src="/Background.jpg"
          alt="imagem de fundo"
          className="absolute w-full top-0 z-0 h-screen"
        />

        {/* Adicionando uma camada escura */}
        <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-t from-black/100 to-black/0  "></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>

        <div className="container mx-auto space-y-2  font-mono">
          <div className="content flex flex-col justify-center h-screen parallax">
            <div className="flex items-center justify-between ">
              <div className="bg-transparent text-4xl xl:text-6xl">
                <p className="mb-2 tracking-tight text-white">Hi,</p>
                <p className="mb-2 tracking-tight text-white">
                  I’m Henrique Oliveira,
                </p>
                <p className="tracking-tight text-white">I’m a Developer.</p>
                <p className="text-2xl text-white">
                  <TypewriterText text="Full Stack Web Developer"/> {/*  and Mobile Developer */}
                </p>
                <button
                  type="button"
                  className="text-black text-lg bg-P-white hover:bg-gray-400 font-medium rounded-lg px-5 py-2.5 mt-4"
                >
                  Contact-me
                </button>
              </div>
              <div className="flex">
                <img src="/image.png" alt="my-photo" className="h-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
