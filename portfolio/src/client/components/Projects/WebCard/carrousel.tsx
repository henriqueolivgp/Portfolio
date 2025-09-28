import { useState, useEffect, useRef } from "react";

interface CardSliderProps {
  slides: {
    src: string,
    alt: string
  }[];
}

export function CardSlider({ slides }: CardSliderProps) {

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // autoplay com reset sempre que current muda
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
 
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="max-w-full">
      <div className="relative rounded-lg overflow-hidden shadow-lg h-80 md:h-96">
        {/* Slides */}
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}


        {/* Indicadores */}
        <div className="flex absolute bottom-5 left-1/2 -translate-x-1/2 space-x-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Botão prev */}
        <button
          onClick={prevSlide}
          className="flex absolute top-1/2 left-3 -translate-y-1/2 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Botão next */}
        <button
          onClick={nextSlide}
          className="flex absolute top-1/2 right-3 -translate-y-1/2 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}





