import { Link } from "react-router-dom";
import "../theme/css.css";

export const BottomNavBar = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-transparent border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {/* Home */}
          <Link to="/">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-7 h-7 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500">
                Home
              </span>
            </button>
          </Link>
          {/* About me */}
          <Link to="/about-me">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-7 h-7 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500">
                About-me
              </span>
            </button>
          </Link>
          {/* Projetcs */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-7 h-7 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M3 6c0-1.1.9-2 2-2h5.5a2 2 0 0 1 1.6.7L14 7H3V6Zm0 3v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9H3Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500">
              Projects
            </span>
          </button>
          {/* Contact me */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-7 h-7 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
            </svg>

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-rigthcolor dark:group-hover:text-blue-500">
              Contact-me
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
