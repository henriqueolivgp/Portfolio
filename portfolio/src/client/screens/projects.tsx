import { ProjectsGroup } from "../components/Projects/projectGroup";

export const Projects = () => {
  return (
    <>
      <div id="projects" className="relative pt-28">
        <div className="pl-20">
          <h1 className="relative font-bold mt-4 text-left text-gray-300 text-3xl ">
            Projects
          </h1>
          <svg
            width="136"
            height="11"
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
        <div className="relative flex mt-16 w-full justify-center items-center">
          <ProjectsGroup />
        </div>
      </div>
    </>
  );
};
