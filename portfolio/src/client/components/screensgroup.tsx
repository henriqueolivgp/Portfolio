import { ComponentProps } from "react";
import { AboutMe } from "../screens/AboutMe";
// import { ContactMe } from "../screens/contactme";
import { Projects } from "../screens/projects";
import { Contact } from "./contact/contact";
// import { Technologies } from "../screens/technologies";

interface screensProps extends ComponentProps<"div"> {}

export const ScreensGroup = (props: screensProps) => {
  return (
    <>
      <div className="" {...props}>
        <div className="h-screen relative">
          <AboutMe />
        </div>
        <div className="relative h-auto md:max-h-auto">
          <Projects />
        </div>
        <div className="">
          <Contact />
        </div>
      </div>
    </>
  );
};
