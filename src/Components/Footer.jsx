import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 sm:w-auto">
            <div
                className={`bg-gray-900/60 backdrop-blur-lg w-sm text-white 
                            px-4 sm:px-6 py-3 rounded-2xl shadow-lg 
                            flex justify-around sm:justify-evenly 
                            space-x-4 sm:space-x-6 max-w-sm mx-auto
                            transition-all duration-700 ease-in-out 
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-gray-300"
                >
                    <FaGithub className="text-3xl sm:text-4xl" />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-blue-400"
                >
                    <FaLinkedin className="text-3xl sm:text-4xl" />
                </a>
                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-pink-500"
                >
                    <FaInstagram className="text-3xl sm:text-4xl" />
                </a>
                <a
                    href="mailto:youremail@example.com"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-red-400"
                >
                    <FaEnvelope className="text-3xl sm:text-4xl" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
