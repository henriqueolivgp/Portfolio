import { BgAnimation } from "../components/BgAnimation";


export const AboutMe = () => {
  return (
    <>
      <BgAnimation />
      <div className="bg-gradient-to-r from-leftcolor to-rigthcolor h-screen">
        <div className="container mx-auto  ">
          <div className="content mx-auto ">
            <h1 className=" text-white text-center">About me</h1>
            <div className=" p-20"></div>
          </div>
        </div>
      </div>
    </>
  );
};
