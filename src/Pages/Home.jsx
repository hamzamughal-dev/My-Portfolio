import { useEffect, useState, useRef } from "react";
import Footer from "../Components/Footer";

export default function Home() {
  const titles = ["Computer Scientist", "Full Stack Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const charIndexRef = useRef(0);
  const frameRef = useRef();

  const typeSpeed = 100;   // ms per character
  const eraseSpeed = 60;   // ms per character
  const pause = 1000;      // pause after typing

  useEffect(() => {
    const animate = () => {
      const currentTitle = titles[titleIndex];

      if (typing) {
        if (charIndexRef.current < currentTitle.length) {
          charIndexRef.current += 1;
          setDisplayedText(currentTitle.slice(0, charIndexRef.current));
          frameRef.current = setTimeout(animate, typeSpeed);
        } else {
          setTyping(false);
          frameRef.current = setTimeout(animate, pause);
        }
      } else {
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setDisplayedText(currentTitle.slice(0, charIndexRef.current));
          frameRef.current = setTimeout(animate, eraseSpeed);
        } else {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTyping(true);
          frameRef.current = setTimeout(animate, typeSpeed);
        }
      }
    };

    frameRef.current = setTimeout(animate, typeSpeed);

    return () => clearTimeout(frameRef.current);
  }, [titleIndex, typing]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

        {/* Name */}
        {/* Name with blue theme + subtle letter-by-letter glow */}
        <h1 className="text-6xl pb-4 sm:text-7xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 inline-block">
          {"Hamza Mughal".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-700 hover:glow"
            >
              {char}
            </span>
          ))}
        </h1>

        <style>
          {`
    /* Subtle glow effect on single letter when hovered */
    .hover\\:glow:hover {
      text-shadow: 0 0 4px #60a5fa, 0 0 8px #3b82f6;
    }
  `}
        </style>


        {/* Smooth Typewriter */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mt-2 relative inline-block">
          {displayedText}
          <span className="inline-block w-1 h-[1.2em] bg-white align-bottom animate-[blink_1s_infinite] ml-1"></span>
        </p>

        {/* Available for Work Button */}
        <button className="mt-8 px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-lg hover:scale-103 hover:shadow-blue-400/20 transition-transform duration-500">
          Available for Work
        </button>

        {/* Decorative underline */}
        {/* <div className="mt-6 w-32 h-1 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse"></div> */}
      </main>
      <Footer />

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
