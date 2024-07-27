import { ScreensGroup } from "../components/screensgroup";
import { ScrollUp } from "../components/scrollup";
import { useEffect } from "react";
import "../theme/parallax.css";
import { Introduction } from "./intoduction";

export const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelectorAll(".parallax");
      parallax.forEach((el) => {
        if (el instanceof HTMLElement) {
          let scrollPosition = window.scrollY;
          el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative z-20">
        <Introduction />

        <div className="main bg-gray-900  z-30">
          <div className="">
            <ScreensGroup />
          </div>
        </div>
        <ScrollUp />
      </div>
    </>
  );
};
