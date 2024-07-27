import { ComponentProps } from "react";
import { AboutMe } from "../screens/AboutMe";
import { ContactMe } from "../screens/contactme";
import { Projects } from "../screens/projects";

interface screensProps extends ComponentProps <'div'> {

}

export const ScreensGroup = (props : screensProps) => {
  return (
    <>
    <div className="z-30" {...props}>
      <div className="about-me h-screen ">
        <AboutMe />
      </div>
      <div className="about-me h-screen ">
        <Projects />
      </div>
      <div className="about-me h-screen ">
        <ContactMe />
      </div>
    </div>
    </>
  );
};
