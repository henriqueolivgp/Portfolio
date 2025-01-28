import { Skills } from "../components/AboutMe/skills";

export const AboutMe = () => {
  return (
    <>
      <div
        id="about-me"
        className=" xs:pt-4 bg-gray-900 flex justify-center min-h-screen"
      >
        <div className="pl-20 pt-28 flex-none">
          <h1 className="relative font-bold mt-4 text-left text-gray-300 text-3xl ">
            About-me
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:mt-10 xs:mt-6 w-full">
          {/* Imagem à esquerda */}
          <div className="md:w-1/3 flex justify-center">
            <img
              className="md:w-[400px] xs:w-72 rounded-md"
              src="/me.jpg"
              alt="My portrait"
            />
          </div>
          {/* Texto à direita */}
          <div className="md:w-2/3 mt-8 md:mt-0 flex flex-col">
            <p className="text-gray-400 md:text-lg xs:text-sm xs:text-center md:text-left font-bold max-w-4xl leading-relaxed">
              I'm a Full-stack developer graduated in the course of Technology
              and Programming of Information Systems, TPSI at the Polytechnic
              Institute of Viana do Castelo-IPVC. I work with state-of-the-art
              technologies: React, React Native, Next.js, PostgreSQL,
              TypeScript, and JavaScript, besides developing REST and RESTful
              APIs. I love to program in my free time. <br></br>See the final
              result of my projects, making sure everything is working
              perfectly.
            </p>
            <div className="flex-wrap mt-10 w-auto">
              <h1 className="text-xl text-gray-300 mb-8 font-semibold">My Skills</h1>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
