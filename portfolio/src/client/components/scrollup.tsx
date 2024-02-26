import backgroundIcon from "../assets/icons/BackgroundIcon.png";
import { ChevronsUp } from 'lucide-react'

export const ScrollUp = () => {
  return (
    <>
      <div data-dial-init className="fixed end-6 bottom-6 group">
        {/* <button
          type="button"
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
          className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button> */}
        <button
          type="button"
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
        >
          <div className="flex items-center justify-center text-white rounded-full ">
            <img
              className=" w-16" // Definindo largura e altura totais para o ícone SVG
              src={backgroundIcon}
              alt="background-icon"
            />
            <ChevronsUp className="absolute" size={35}/>
          </div>
        </button>
      </div>
    </>
  );
};
