export function FilterMenu() {
  return (
    <>
      <div className="flex items-center justify-center flex-wrap">
        <button
          type="button"
          className="text-PPurple-medium hover:text-white border border-PDark bg-white hover:bg-PPurple-medium focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full md:text-md xs:text-sm font-medium md:px-5 xs:px-3 py-2.5 text-center me-3 mb-3 "
        >
          All categories
        </button>
        <button
          type="button"
          className="text-gray-900 border  border-PDark hover:border-gray-200 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base xs:text-sm font-medium md:px-5 xs:px-3 py-2.5 text-center me-3 mb-3 "
        >
          Web
        </button>
        <button
          type="button"
          className="text-gray-900 border  border-PDark hover:border-gray-200 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base xs:text-sm font-medium md:px-5 xs:px-3 py-2.5 text-center me-3 mb-3 "
        >
          Mobile
        </button>
        {/* <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
        >
          Desktop Comming Soon...
        </button> */}
      </div>
    </>
  );
}
