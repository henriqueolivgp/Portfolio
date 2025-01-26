import { ProjectsGroup } from "../components/SliderProjects/projectGroup";

export const Projects = () => {
  return (
    <>
      <div id="projects" className="pt-28 ">
        <div className="pl-20">
          <h1 className="mt-4 text-left text-white text-4xl ">
            Work Expirience
          </h1>
        </div>
        <div className="flex mt-20 w-full">
          <ProjectsGroup />
        </div>
      </div>
    </>
  );
};
