// import { useRef } from 'react';
// import { useState } from 'react';

// const HorizontalScrollPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const scrollRef = useRef<HTMLDivElement>(null); // Provide the type information

//   const scrollToPage = (pageNumber: number) => {
//     if (scrollRef.current) {
//       const pageWidth = scrollRef.current.offsetWidth;
//       scrollRef.current.scrollTo({
//         left: (pageNumber - 1) * pageWidth,
//         behavior: 'smooth',
//       });
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div className="overflow-x-auto whitespace-no-wrap">
//       <div className="flex" ref={scrollRef}>
//         {/* Your page content */}
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           className={`mx-2 ${
//             currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//           onClick={() => scrollToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Anterior
//         </button>
//         <button
//           className={`mx-2 ${
//             currentPage === 2 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//           onClick={() => scrollToPage(currentPage + 1)}
//           disabled={currentPage === 2}
//         >
//           Próxima
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScrollPage;

import { useRef, useState } from 'react';
import { Home } from './Home';
import { AboutMe } from './AboutMe';

const HorizontalScrollPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const pageWidth = scrollRef.current.clientWidth;
      const newPage = Math.round(scrollRef.current.scrollLeft / pageWidth) + 1;
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div
        className="whitespace-no-wrap overflow-x- overflow-y-hidden"
        style={{ scrollSnapType: 'x mandatory',  display: 'flex' }}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <div className="flex">
          <div className="w-screen flex-shrink-0">
            <div className="page-content">
              <Home />
            </div>
          </div>
          <div className="w-screen flex-shrink-0">
            <div className="page-content">
              <AboutMe />
            </div>
          </div>
          {/* Add more pages as needed */}
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollPage;

