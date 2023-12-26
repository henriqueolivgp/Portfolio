import React, { useState } from 'react';
import "../theme/css.css"

interface NavBarProps {
    // Add any props if needed
}

const NavBar: React.FC<NavBarProps> = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const button = document.querySelector<HTMLButtonElement>('[data-collapse-toggle="navbar-hamburger"]');
    const menu = document.getElementById('navbar-hamburger');

    if (button && menu) {
        button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const svg = button.querySelector<SVGElement>('svg');

            if (svg) {
                svg.classList.toggle('rotate-90');
            }
        });
    }


    return (
        <>

            <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10  text-gray-500 rounded-lg"
                aria-controls="navbar-hamburger"
                aria-expanded={isNavbarOpen ? 'true' : 'false'}
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className={`w-20 h-20 transition-transform transform ${isNavbarOpen ? '' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    {isNavbarOpen ? (
                        <>
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1l15 12M1 13L16 1"
                            />
                        </>
                    ) : (
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    )}
                </svg>
            </button>
            <div className={` absolute w-auto ${isNavbarOpen ? '' : 'hidden'}`} id="navbar-hamburger">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <li>
                        <img src="../assets/icons/background_icons.svg" alt="" />
                        <a
                            href="#"
                            className="block py-2 px-3"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>




        </>
    );
};

export default NavBar;
