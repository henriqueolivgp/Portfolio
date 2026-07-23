import backgroundIcon from "../assets/icons/BackgroundIcon.png";
import { ChevronsUp } from 'lucide-react'

export const ScrollUp = () => {


  // function for scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <>
      <div data-dial-init className="fixed end-6 bottom-6 group z-[9999]">
        <button
          type="button"
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
          onClick={scrollToTop}
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

