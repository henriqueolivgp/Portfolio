import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className=" bg-gray-900 h-screen lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <h1 className=" text-gray-400 font-bold text-2xl">
              Sorry but you tried to access something that doesn't exist
            </h1>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
          <p className="my-2 text-gray-400">
            Sorry about that! Please visit our HomePage to get where you need to
            go.
          </p>
          <Link to="/">
            <button className="sm:w-full lg:w-auto my-2 md py-4 px-8 rounded-lg text-center bg-bluelite text-white hover:bg-footer-bg focus:outline-none focus:ring-2  focus:ring-blue-600 focus:ring-opacity-50">
              Let's go Home
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
};
