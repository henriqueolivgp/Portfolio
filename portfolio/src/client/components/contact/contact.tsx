import { Linkedin, Mail, } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <div id="contact" className="flex justify-center items-center h-96 bg-slate-800">
        <div className="  ">
          <div className="flex flex-col justify-center items-center mb-2">
            <h1 className="flex text-left font-bold text-gray-300 text-3xl ">Contact Me</h1>
            <svg
              width="177"
              height="14"
              viewBox="0 0 177 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.76361 10.5388C135.116 -1.01579 171.945 3.45062 173.941 7.12814"
                stroke="#EFF6FF"
                stroke-width="5.99322"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex gap-6 justify-center items-center w-auto">
            <button
              type="button"
              className=" flex items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-950 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
            >
              <Mail />
              Email
            </button>
            <button
              type="button"
              className=" flex items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-950 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
            >
              <Linkedin />
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
