import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const alreadyAnimated = localStorage.getItem("footerAnimated");

        if (!alreadyAnimated) {
            // First visit → play animation
            setTimeout(() => setIsVisible(true), 100);
            localStorage.setItem("footerAnimated", "true");
        } else {
            // Skip animation for next visits
            setIsVisible(true);
        }
    }, []);

    return (
        <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 sm:w-auto">
            <div
                className={`glass-effect w-sm text-white 
                            px-4 sm:px-6 py-3 rounded-2xl shadow-lg 
                            flex justify-around sm:justify-evenly 
                            space-x-4 sm:space-x-6 max-w-sm mx-auto
                            transition-all duration-700 ease-in-out 
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <a
                    href="https://github.com/hamzamughal-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-emerald-400 cursor-pointer"
                >
                    <FaGithub className="text-3xl sm:text-4xl" />
                </a>
                <a
                    href="https://linkedin.com/in/muhammad-hamza-mughal-b83944377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-emerald-400 cursor-pointer"
                >
                    <FaLinkedin className="text-3xl sm:text-4xl" />
                </a>
                <a
                    href="https://instagram.com/muhamadhamzamughal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-amber-400 cursor-pointer"
                >
                    <FaInstagram className="text-3xl sm:text-4xl" />
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhamzamughal1053@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-amber-400 cursor-pointer"
                >
                    <FaEnvelope className="text-3xl sm:text-4xl" />
                </a>

            </div>
        </footer>
    );
}

export default Footer;
