import { ProjectsGroup } from "../components/Projects/projectGroup";

export const Projects = () => {
  return (
    <>
      <div id="projects" className="relative pt-28">
        <div className="pl-20">
          <h1 className="relative font-bold mt-4 text-left text-gray-300 text-3xl ">
            Projects
          </h1>
        </div>
        <div className="relative flex mt-16 w-full justify-center items-center">
          <ProjectsGroup />
        </div>
      </div>
    </>
  );
};
