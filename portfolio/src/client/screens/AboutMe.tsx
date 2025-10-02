import { AboutmeImg } from "../components/AboutMe/me-about";
import Particles from "../utils/Particles";
import ScrollFloat from "../utils/ScrollFloat";

export const AboutMe = () => {
  return (
    <>
      <div
        id="about-me"
        className="relative overflow-hidden bg-slate-800 p-10 flex items-center justify-center min-h-screen"
      >
        {/* ANIMAÇÃO DE PARTÍCULAS AO FUNDO */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>

        {/* SVG DE CIMA */}
        <div className="absolute left-[-122px] top-[-100px] z-0">
          <svg
            className="sm:w-[460px] sm:h-[425px] xs:w-[320px] xs:h-[400px]"
            viewBox="0 0 460 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 362L386 13"
              stroke="#60A5FA"
              strokeOpacity="0.4"
              strokeWidth="26"
              strokeLinecap="round"
            />
            <path
              d="M74 411.5L447 62.5"
              stroke="#60A5FA"
              strokeOpacity="0.4"
              strokeWidth="26"
              strokeLinecap="round"
            />
            <path
              d="M45 386.5L418 37.5"
              stroke="#60A5FA"
              strokeOpacity="0.4"
              strokeWidth="26"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <section className="flex-wrap justify-center items-center w-full">
          <div className="flex lg:flex-wrap xs:flex-wrap w-full justify-center items-center gap-8 ">
            <section className="w-full flex flex-col xs:mt-[10%] lg:mt-0  lg:mb-[8%] items-center relative">

              <h1 className="font-bold text-gray-300 xs:text-3xl sm:text-4xl lg:text-6xl">
                About Me
              </h1>
            </section>
            <AboutmeImg className="flex xs:w-full lg:w-1/2" />
            <div className="flex xs:w-full lg:w-1/2 items-center">
              <p className="font-medium text-gray-300 text-lg text-left">
                I have been studying{" "}
                <span className="text-sky-600">
                  Systems Development for four years
                </span>
                , gaining experience in{" "}
                <span className="text-sky-600">
                  web, mobile, and backend development
                </span>
                . I completed a professional{" "}
                <span className="text-sky-600">
                  university course in Technology and Programming of Information
                  Systems
                </span>{" "}
                at the Polytechnic Institute of Viana do Castelo (IPVC) from
                2021 to 2024.
                <br />
                <br />
                My main technologies include{" "}
                <span className="text-sky-600">
                  HTML, CSS, JavaScript, React, and Next.js
                </span>{" "}
                for web development,{" "}
                <span className="text-sky-600">React Native</span> for mobile,
                and on the backend, I use{" "}
                <span className="text-sky-600">
                  Node.js with Fastify or Nest.js
                </span>
                , integrating <span className="text-sky-600">PostgreSQL</span>{" "}
                as a database and communicating via{" "}
                <span className="text-sky-600">REST API</span>.
                <br />
                <br />
                Get in touch so we can build something great together.
              </p>
            </div>
          </div>
        </section>
        {/* SVG DE BAIXO */}
        <div className="absolute right-[-122px] bottom-[-100px] z-0">
          <svg
            className="sm:w-[460px] sm:h-[425px] xs:w-[320px] xs:h-[400px]"
            viewBox="0 0 460 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 362L386 13"
              stroke="#60A5FA"
              strokeOpacity="0.4"
              strokeWidth="26"
              strokeLinecap="round"
            />
            <path
              d="M74 411.5L447 62.5"
              stroke="#60A5FA"
              strokeOpacity="0.4"
              strokeWidth="26"
              strokeLinecap="round"
            />
            <path
              d="M45 386.5L418 37.5"
              stroke="#60A5FA"
              strokeOpacity="0.4"
              strokeWidth="26"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
