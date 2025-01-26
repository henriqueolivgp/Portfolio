import { ComponentProps } from "react";
import { AboutMe } from "../screens/AboutMe";
import { ContactMe } from "../screens/contactme";
import { Projects } from "../screens/projects";
import { Technologies } from "../screens/technologies";

interface screensProps extends ComponentProps<"div"> {}

export const ScreensGroup = (props: screensProps) => {
  return (
    <>
      <div className="" {...props}>
        <div className="h-screen ">
          <AboutMe />
        </div>
        <div className="h-screen ">
          <Projects />
        </div>
        <div className="h-screen ">
          <Technologies />
        </div>
        <div className="h-screen ">
          <ContactMe />
        </div>
      </div>
    </>
  );
};
