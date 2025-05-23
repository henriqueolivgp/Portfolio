import { useEffect, useRef, useState } from "react";
import Aurora from "../../utils/Aurora";
import ShinyText from "../../utils/ShinyText";

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [message, email]);
  return (
    <>
      <section className="absolute top-0 left-0 bottom-0 w-full z-10 pointer-events-none">
        <Aurora
          colorStops={["#213448", "#547792", "#94B4C1"]}
          blend={0.1}
          amplitude={1.0}
          speed={0.5}
        />
      </section>
      <section
        id="contact"
        className="relative z-20 flex justify-center items-center min-h-96 max-h-auto bg-slate-800 bg-opacity-50"
      >
        <section className="  ">
          <section className="flex flex-col justify-center items-center mb-2">
            <h1 className="flex text-left font-bold text-gray-300 text-3xl ">
              Contact Me
            </h1>
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
          </section>
          <section className="flex gap-6 justify-center items-center w-auto">
            <form
              className="max-w-sm mx-auto"
              action="https://formspree.io/f/mjkwzejg"
              method="POST"
            >
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your Email
              </label>
              <section className="flex-1 space-y-3">
                <section className="relative">
                  <section className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </section>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email-address"
                    className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block ps-10 p-2.5"
                    placeholder="youremail@example.com"
                  />
                </section>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your message
                </label>
                <textarea
                  className="flex-1 w-full min-h-20 max-h-24 resize-none overflow-y-auto bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-2 text-sm scrollbar-thin custom-scrollbar "
                  ref={textareaRef}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a comment..."
                />
                <section className="flex w-full">
                  <button
                    type="submit"
                    className="flex items-center gap-x-2 text-gray-200 border-gray-400 border-2 md:text-lg xs:text-sm bg-slate-950 hover:bg-slate-800 font-medium rounded-lg md:px-5 xs:p-2 py-2.5 mt-4"
                  >
                    <ShinyText
                      text="Submit"
                      disabled={false}
                      speed={3}
                      className="custom-class"
                    />
                  </button>
                </section>
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};
