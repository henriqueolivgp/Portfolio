import { MeAbout } from "../components/AboutMe/me-about";
import Particles from "../utils/Particles";

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
        <div className="absolute left-[-122px] top-[-100px] z-10">
          <svg
            width="460"
            height="425"
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
        <section className="flex-1 absolute left-[22%] top-40">
          <h1 className="text-left font-bold text-gray-300 text-5xl">
            About Me
          </h1>
          <svg
            width="246"
            height="22"
            viewBox="0 0 136 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.14131 8.21839C103.179 -0.581582 131.229 2.82004 132.748 5.62084"
              stroke="#EFF6FF"
              strokeWidth="4.56445"
              strokeLinecap="round"
            />
          </svg>
        </section>
        <div className="relative z-20 flex justify-center items-center w-[70%] h-auto gap-8">
          <MeAbout />
          <div className="flex flex-col w-[40%]">
            <div className="mb-6"></div>
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
              at the Polytechnic Institute of Viana do Castelo (IPVC) from 2021
              to 2024.
              <br />
              <br />
              My main technologies include{" "}
              <span className="text-sky-600">
                HTML, CSS, JavaScript, React, and Next.js
              </span>{" "}
              for web development,{" "}
              <span className="text-sky-600">React Native</span> for mobile, and
              on the backend, I use{" "}
              <span className="text-sky-600">
                Node.js with Fastify or Nest.js
              </span>
              , integrating <span className="text-sky-600">PostgreSQL</span> as
              a database and communicating via{" "}
              <span className="text-sky-600">REST API</span>.
              <br />
              <br />
              Get in touch so we can build something great together.
            </p>
          </div>
        </div>

        {/* SVG DE BAIXO */}
        <div className="absolute right-[-122px] bottom-[-100px] z-10">
          <svg
            width="460"
            height="425"
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
