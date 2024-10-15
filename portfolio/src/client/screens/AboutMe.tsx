import { Avatar } from "flowbite-react";

export const AboutMe = () => {
  return (
    <>
      <div
        id="About-me"
        className="h-screen flex items-center justify-center mx-auto"
      >
        <div className="w-1/2 h-1/2  p-6 rounded-lg ">
          <h1 className="text-left text-white text-4xl mb-4">About-me</h1>

          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>

          {/* <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl text-white mb-4">
                I'm a full stack web developer and Network and Computer Systems
                student and I study <br />
                mobile development with Android Studio and React <br />
                Native by my choice
              </p>
            </div>
            <div className="flex-row w-1/2">
              <Avatar />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
