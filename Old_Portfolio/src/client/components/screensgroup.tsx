import { ComponentProps } from "react";
import { AboutMe } from "../screens/AboutMe";
import { Projects } from "../screens/projects";
import { Contact } from "./contact/contact";

interface screensProps extends ComponentProps<"section"> {}

export const ScreensGroup = (props: screensProps) => {
  return (
    <>
      <section {...props} className="flex flex-col h-auto">
        <section className="relative min-h-screen xs:max-h-auto">
          <AboutMe />
        </section>
        <section className="relative min-h-screen max-h-auto ">
          <Projects />
        </section>
        <section className="relative h-auto xs:max-h-auto">
          <Contact />
        </section>
      </section>
    </>
  );
};
