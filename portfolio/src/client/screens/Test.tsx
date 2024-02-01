
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

