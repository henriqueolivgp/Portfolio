import { Link } from "react-router-dom";
import instagram from '../assets/SocialNetworks/instagram.png'
import linkedin from '../assets/SocialNetworks/linkedin.png'
import twitch from '../assets/SocialNetworks/twitch.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-slate-950 font-monoshadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-10 md:flex items-center justify-between">
          <span className="text-sm text-PCinza sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <Link to="https://github.com/henriqueolivgp" target="_blank" className="hover:underline">
              Henrique Oliveira™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center text-sm mr-10 font-medium text-PCinza sm:mt-0">
              <a href="#profile" className="hover:underline me-4 md:me-6">
                <img className=" w-6" src={linkedin} alt="linkedin" />
              </a>
              <a href="#profile" className="hover:underline me-4 md:me-6">
                <img className=" w-6" src={instagram} alt="instagram" />
              </a>
              <a href="#profile" className="hover:underline me-4 md:me-6">
                <img className=" w-6" src={twitch} alt="twitch" />
              </a>
          </div>
        </div>
      </footer>
    </>
  );
};
