import { ComponentProps } from "react";
import { AboutMe } from "../screens/AboutMe";
import { ContactMe } from "../screens/contactme";
import { Projects } from "../screens/projects";
import { Technologies } from "../screens/technologies";

interface screensProps extends ComponentProps <'div'> {}

export const ScreensGroup = (props : screensProps) => {
  return (
    <>
    <div className="" {...props}>
      <div className="about-me h-screen ">
        <AboutMe />
      </div>
      <div className="about-me h-screen ">
        <Projects />
      </div>
      <div className="about-me h-screen ">
        <Technologies />
      </div>
      <div className="about-me h-screen ">
        <ContactMe />
      </div>
    </div>
    </>
  );
};
