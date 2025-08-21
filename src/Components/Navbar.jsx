import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Github, Linkedin, Instagram, Mail } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl font-extrabold tracking-wide"
                >
                    <span className="text-blue-500">Hamza</span> Portfolio
                </motion.h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * (i + 1), duration: 0.5 }}
                        >
                            <Link
                                to={link.path}
                                className="hover:text-blue-400 transition duration-300"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}


                </div>

                {/* Resume Button */}
                <motion.a
                    href="/resume.pdf"
                    download
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                    className="hidden md:block ml-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
                >
                    Download CV
                </motion.a>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="md:hidden bg-gray-800 text-center py-6 space-y-6"
                >
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg hover:text-blue-400 transition duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
                    >
                        Download CV
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}

export default Navbar;
