import { Avatar } from "flowbite-react";

export const AboutMe = () => {
  return (
    <>
      <div className=" h-screen">
        <div className="container mx-auto  ">
          <div className="content mx-auto ">
            <div className="">
              <h1 id="About-me" className=" text-left text-white text-4xl ">About-me</h1>
              <div className="flex justify-center content-center">
                <p className=" text-[40px] text-left text-white">
                  <span className="text-[40px] text-left text-white">
                    I'm a full stack web developer student and I study{" "}
                  </span>
                  <br />
                  <span className="text-[40px] text-left text-white">
                    mobile development with Android Studio and React{" "}
                  </span>
                  <br />
                  <span className="text-[40px] text-left text-white">
                    Native by my choice
                  </span>
                  <Avatar/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
