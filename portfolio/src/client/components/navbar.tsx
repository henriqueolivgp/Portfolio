import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { NavMobileLi } from "./navbarComponents/navmobileli";
import { NavLi } from "./navbarComponents/navli";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Node;

    // Verifica se o clique foi fora do menu
    if (menuRef.current && !menuRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    let timeoutId: ReturnType<typeof setTimeout>;

    if (isOpen) {
      // Define one timeout at 5 seconds for close the menu automatically
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }

    // Clean timeout when component is down, when isOpen changed for false or when menu is close manualy
    return () => {  
      document.removeEventListener("click", handleOutsideClick);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-PPurple-medium/30 dark:bg-gray-900 fixed w-full z-40  ">
        <div
          ref={menuRef}
          className="max-w-screen-xl flex flex-wrap items-center lgg:justify-between mx-auto p-4"
        >
          <div className="flex justify-between w-full lgg:w-0 ">
            <a
              href="#profile"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-7" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Henrique Oliveira
              </span>
            </a>
            <button
              onClick={handleClick}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex xs:mr-6 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lgg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full xs:block xs:w-auto" id="navbar-default">
            {isOpen ? (
              <div className="flex absolute lgg:hidden right-0 translate-y-8 -translate-x-6 bg-PPurple-medium/30 rounded-md w-[150px]">
                <ul className=" space-y-4 p-2 text-sm font-medium text-white bg-PPurple-medium/30 border rounded-lg w-[150px]">
                  <NavMobileLi name="Profile" to="#profile" />
                  <NavMobileLi name="About-me" to="#about-me" />
                  <NavMobileLi name="Projects" to="#projects" />
                  {/* <NavMobileLi name="Technologies" to="#technologies" />
                  <NavMobileLi name="Contact-me" to="#Contact-me" /> */}
                </ul>
              </div>
            ) : (
              <ul className="font-medium hidden gap-8 flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-12 lgg:flex rtl:space-x-reverse md:mt-0 md:border-0 text-white">
                <NavLi name="Profile" to="#profile" />
                <NavLi name="About-me" to="#about-me" />
                <NavLi name="Projects" to="#projects" />
                {/* <NavLi name="Technologies" to="#technologies" />
                <NavLi name="Contact-me" to="#Contact-me" /> */}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
