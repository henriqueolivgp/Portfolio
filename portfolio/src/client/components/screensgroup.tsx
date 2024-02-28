import { AboutMe } from "../screens/AboutMe";
import { ContactMe } from "../screens/contactme";
import { Projects } from "../screens/projects";


export const ScreensGroup = () => {
  return (
    <>
      <div className="about-me h-screen ">
        <AboutMe />
      </div>
      <div className="about-me h-screen ">
        <Projects />
      </div>
      <div className="about-me h-screen ">
        <ContactMe />
      </div>
    </>
  );
};
