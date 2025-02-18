import { MeAbout } from "../components/AboutMe/me-about";
// import { Skills } from "../components/AboutMe/skills";

export const AboutMe = () => {
  return (
    <>
      <div
        id="about-me"
        className="flex relative overflow-hidden bg-slate-800 p-10 items-center xs:pt-4 justify-center min-h-screen"
      >
        <div className="absolute left-[-122px] top-[-100px]">
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
              stroke-opacity="0.4"
              stroke-width="26"
              stroke-linecap="round"
            />
            <path
              d="M74 411.5L447 62.5"
              stroke="#60A5FA"
              stroke-opacity="0.4"
              stroke-width="26"
              stroke-linecap="round"
            />
            <path
              d="M45 386.5L418 37.5"
              stroke="#60A5FA"
              stroke-opacity="0.4"
              stroke-width="26"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="flex justify-center items-center w-full h-auto gap-8 ">
          <MeAbout />
          <div className="flex flex-col w-[40%]">
            <div className="mb-6">
              <h1 className="flex text-left font-bold text-gray-300 text-3xl ">
                About Me
              </h1>
              <svg
                width="146"
                height="12"
                viewBox="0 0 136 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.14131 8.21839C103.179 -0.581582 131.229 2.82004 132.748 5.62084"
                  stroke="#EFF6FF"
                  stroke-width="4.56445"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p className=" font-medium text-gray-300 text-lg text-left">
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
              on the backend, I use
              <span className="text-sky-600">
                Node.js with Fastify or Nest.js
              </span>
              , integrating <span className="text-sky-600">PostgreSQL</span> as
              a database and communicating via{" "}
              <span className="text-sky-600">REST API</span>.<br />
              <br />
              Get in touch so we can build something great together.
            </p>
            {/* <Skills /> */}
          </div>
        </div>
        <div className="absolute right-[-122px] bottom-[-100px]">
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
              stroke-opacity="0.4"
              stroke-width="26"
              stroke-linecap="round"
            />
            <path
              d="M74 411.5L447 62.5"
              stroke="#60A5FA"
              stroke-opacity="0.4"
              stroke-width="26"
              stroke-linecap="round"
            />
            <path
              d="M45 386.5L418 37.5"
              stroke="#60A5FA"
              stroke-opacity="0.4"
              stroke-width="26"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
