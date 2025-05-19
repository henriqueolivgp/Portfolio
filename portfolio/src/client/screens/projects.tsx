import { ProjectsGroup } from "../components/Projects/projectGroup";
import RotatingText from "../utils/RotatingText";

export const Projects = () => {
  return (
    <>
      <div id="projects" className="flex w-full justify-center h- mt-10 ">
        <section className="relative top-24 flex-col">
          <section className="  flex gap-2">
            <h1 className="font-bold text-left text-gray-300 text-6xl ">
              Projects
            </h1>
            <RotatingText
              texts={["Web", "Mobile"]}
              mainClassName="px-2 sm:px-2 md:px-3 text-gray-300 text-6xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2  rounded-lg w-60"
              style={{ backgroundColor: "#385B87" }}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </section>
          <svg
            width="493"
            height="38"
            viewBox="0 0 863 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.99999 34.4052C659.392 -0.143978 847.224 1.07128 859.09 5.99756"
              stroke="#EFF6FF"
              stroke-width="5.9029"
              stroke-linecap="round"
            />
          </svg>
        </section>
      </div>
      <div className="flex w-full h-full justify-center">
        <ProjectsGroup />
      </div>
    </>
  );
};
