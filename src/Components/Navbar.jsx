import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Download, ExternalLink, ChevronDown } from "lucide-react";
import CV from "../assets/Docs/Muhammad_Hamza-Mughal_CV.pdf";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? "glass-effect shadow-2xl border-b border-emerald-500/20"
                    : "bg-transparent"
            }`}
        >
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-amber-600/5 to-emerald-600/10"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Premium Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center space-x-3"
                    >
                        <motion.div 
                            className="relative w-12 h-12 lg:w-14 lg:h-14 accent-gradient rounded-2xl flex items-center justify-center shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            <span className="text-white font-bold text-xl lg:text-2xl">H</span>
                            <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-emerald-400/50"
                                animate={{
                                    scale: isHovered ? 1.1 : 1,
                                    opacity: isHovered ? 0.8 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl lg:text-2xl font-bold text-gradient">
                                Hamza Mughal
                            </h1>
                            <p className="text-xs text-slate-400 -mt-1">Portfolio</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {navLinks.map((link, i) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                    className="relative"
                                >
                                    <Link
                                        to={link.path}
                                        className={`relative px-6 py-3 text-slate-300 hover:text-white font-medium transition-all duration-300 group rounded-xl cursor-pointer ${
                                            isActive ? "text-emerald-400" : ""
                                        }`}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        
                                        {/* Hover background */}
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-xl opacity-0 group-hover:opacity-100"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        
                                        {/* Active indicator */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-0 left-1/2 w-0 h-1 accent-gradient rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "80%" }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                style={{ transform: "translateX(-50%)" }}
                                            />
                                        )}
                                        
                                        {/* Hover underline */}
                                        <motion.div 
                                            className="absolute bottom-0 left-1/2 w-0 h-0.5 accent-gradient group-hover:w-full group-hover:left-0 transition-all duration-300"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%", left: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Premium CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <motion.a
                            href={CV}
                            download="Hamza_Mughal_CV.pdf"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="group relative flex items-center space-x-2 px-6 py-3 accent-gradient text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <Download size={16} />
                                <span>Download CV</span>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-600 opacity-0 group-hover:opacity-100"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative p-3 rounded-xl glass-effect hover:bg-emerald-500/20 transition-all duration-300 group cursor-pointer"
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                        >
                            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.button>
                </div>
            </div>

            {/* Premium Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden glass-effect border-t border-emerald-500/20"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-4 text-slate-300 hover:text-white hover:bg-emerald-500/20 rounded-xl transition-all duration-300 border border-transparent hover:border-emerald-500/30 cursor-pointer ${
                                                isActive ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" : ""
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{link.name}</span>
                                                {isActive && (
                                                    <motion.div
                                                        className="w-2 h-2 bg-emerald-400 rounded-full"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.2 }}
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile CTA Buttons */}
                            <motion.div 
                                className="pt-4 space-y-3 border-t border-emerald-500/20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                            >
                                <motion.a
                                    href={CV}
                                    download="Hamza_Mughal_CV.pdf"
                                    className="flex items-center justify-center space-x-2 w-full px-4 py-4 accent-gradient text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Download size={18} />
                                    <span>Download CV</span>
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;