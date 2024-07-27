import { ScreensGroup } from "../components/screensgroup";
import { ScrollUp } from "../components/scrollup";
import { useEffect, useState } from "react";
import "../theme/parallax.css";
import { Introduction } from "./intoduction";

export const Home = () => {

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollTop(scrollPosition);

      const parallax = document.querySelectorAll(".parallax");
      parallax.forEach((el) => {
        if (el instanceof HTMLElement) {
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

        <div className="relative bg-gray-900  z-30">
          <div className="">
            <ScreensGroup />
          </div>
          {scrollTop > 100 && <ScrollUp />}
        </div>
        
      </div>
    </>
  );
};
