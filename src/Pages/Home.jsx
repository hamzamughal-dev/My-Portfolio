import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { TITLES, NAME_CHARS } from "../constants";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const typeSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && displayedText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentTitle.slice(0, displayedText.length - 1)
          : currentTitle.slice(0, displayedText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <div className="flex flex-col min-h-screen gradient-bg text-white">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl pb-4 font-extrabold mb-6 text-gradient inline-block whitespace-nowrap">
          {NAME_CHARS.map((char, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-700 hover:animate-glow cursor-pointer"
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mt-2 relative inline-block">
          {displayedText}
          <span className="inline-block w-1 h-[1.2em] bg-emerald-400 align-bottom animate-[blink_1s_infinite] ml-1"></span>
        </p>

        <button className="mt-8 px-8 py-3 text-xl font-semibold text-white accent-gradient rounded-full shadow-lg hover:scale-105 hover:shadow-emerald-400/20 transition-all duration-500 animate-float cursor-pointer">
          Available for Work
        </button>

        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-emerald-400/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </main>
      <Footer />
    </div>
  );
}
