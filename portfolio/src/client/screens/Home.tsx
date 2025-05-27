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
      <div className="h-auto">
        <Introduction />

        <div className="relative bg-slate-950 z-30 h-auto ">
          <ScreensGroup />
          {scrollTop > 100 && <ScrollUp />}
        </div>
      </div>
    </>
  );
};
