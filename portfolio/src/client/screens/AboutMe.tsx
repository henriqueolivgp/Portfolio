import { Skills } from "../components/AboutMe/skills";

export const AboutMe = () => {
  return (
    <>
      <div id="About-me" className="pt-28 bg-gray-900">
        <div className="pl-20 xs:pl-0">
          <h1 className="mt-4 xs:mt-0 xs:text-center text-left text-gray-300 font-mono text-4xl">
            About me
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-20 w-full px-4">
          {/* Imagem à esquerda */}
          <div className="md:w-1/3 flex justify-center">
            <img className="w-96 xs:w-72 rounded-md" src="/me.jpg" alt="My portrait" />
          </div>
          {/* Texto à direita */}
          <div className="md:w-2/3 mt-8 md:mt-0 md:pl-10">
            <p className="text-gray-400 text-xl xs:text-sm xs:text-center font-bold max-w-4xl leading-relaxed">
              I'm a Full-stack developer graduated in the course of Technology
              and Programming of Information Systems, TPSI at the Polytechnic
              Institute of Viana do Castelo-IPVC. I work with state-of-the-art
              technologies: React, React Native, Next.js, PostgreSQL,
              TypeScript, and JavaScript, besides developing REST and RESTful
              APIs. I love to program in my free time. <br></br>See the final result of my
              projects, making sure everything is working perfectly.
            </p>
            <div className="flex-wrap mt-10 w-auto">
              <h1 className="text-3xl text-gray-300 mb-8">My Skills</h1>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
