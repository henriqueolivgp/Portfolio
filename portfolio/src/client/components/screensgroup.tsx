import { ComponentProps } from "react";
import { AboutMe } from "../screens/AboutMe";
// import { ContactMe } from "../screens/contactme";
import { Projects } from "../screens/projects";
import { Contact } from "./contact/contact";
// import { Technologies } from "../screens/technologies";

interface screensProps extends ComponentProps<"section"> {}

export const ScreensGroup = (props: screensProps) => {
  return (
    <>
      <section {...props}>
        <section className="relative h-screen xxs:max-h-auto">
          <AboutMe />
        </section>
        <section className="relative h-screen xxs:max-h-auto ">
          <Projects />
        </section>
        <section className="relative h-auto xxs:max-h-auto">
          <Contact />
        </section>
      </section>
    </>
  );
};
