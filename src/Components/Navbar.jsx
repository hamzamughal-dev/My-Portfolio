import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Download, Sparkles } from "lucide-react";
import CV from "../assets/Docs/Muhammad_Hamza-Mughal_CV.pdf";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Certifications", path: "/certifications" },
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled
                    ? "glass-effect shadow-2xl border-b border-emerald-500/10 backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            {/* Subtle animated background pattern */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: isScrolled
                        ? "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.03) 0%, transparent 70%)"
                        : "transparent"
                }}
                transition={{ duration: 0.7 }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Refined Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex items-center space-x-4 group cursor-pointer"
                    >
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 via-emerald-600 to-amber-500 rounded-xl flex items-center justify-center shadow-lg ring-1 ring-white/10">
                                <span className="text-white font-bold text-lg tracking-wider">H</span>
                            </div>
                            <motion.div
                                className="absolute -inset-0.5 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-20 blur-sm"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                        <div>
                            <motion.h1
                                className="text-2xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent"
                                whileHover={{ scale: 1.02 }}
                            >
                                Hamza Mughal
                            </motion.h1>
                            <motion.p
                                className="text-xs text-slate-400 tracking-wide font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Full-Stack Developer
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Premium Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center space-x-1 p-1 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/20">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                                        className="relative"
                                    >
                                        <Link
                                            to={link.path}
                                            className="relative block px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl group"
                                        >
                                            <span className={`relative z-10 transition-colors duration-300 ${isActive
                                                    ? "text-emerald-400"
                                                    : "text-slate-300 group-hover:text-white"
                                                }`}>
                                                {link.name}
                                            </span>

                                            {/* Active state background */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-amber-500/20 rounded-xl border border-emerald-500/20"
                                                    layoutId="activeTab"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 30
                                                    }}
                                                />
                                            )}

                                            {/* Hover background */}
                                            {!isActive && (
                                                <motion.div
                                                    className="absolute inset-0 bg-slate-700/40 rounded-xl opacity-0 group-hover:opacity-100"
                                                    initial={{ scale: 0.8 }}
                                                    whileHover={{ scale: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <motion.a
                            href={CV}
                            download="Hamza_Mughal_CV.pdf"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-300" />
                            <div className="relative flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold transition-all duration-300 group-hover:bg-slate-800">
                                <Download size={16} className="group-hover:scale-110 transition-transform duration-200" />
                                <span className="tracking-wide">Download CV</span>
                                <Sparkles size={14} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.a>
                    </div>

                    {/* Elegant Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative p-3 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 hover:bg-slate-700/50 transition-all duration-300"
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <X size={22} className="text-white" />
                            ) : (
                                <Menu size={22} className="text-white" />
                            )}
                        </motion.div>
                    </motion.button>
                </div>
            </div>

            {/* Refined Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/20"
                    >
                        <div className="px-6 py-8 space-y-2">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 ${isActive
                                                    ? "bg-gradient-to-r from-emerald-500/20 to-amber-500/20 text-emerald-400 border border-emerald-500/30"
                                                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                                                }`}
                                        >
                                            <span className="font-medium text-lg tracking-wide">{link.name}</span>
                                            {isActive && (
                                                <motion.div
                                                    className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile CTA */}
                            <motion.div
                                className="pt-6 border-t border-slate-700/30 mt-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <motion.a
                                    href={CV}
                                    download="Hamza_Mughal_CV.pdf"
                                    className="group relative block"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-xl opacity-70 group-active:opacity-90 blur transition duration-200" />
                                    <div className="relative flex items-center justify-center space-x-3 w-full px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold transition-all duration-200">
                                        <Download size={20} />
                                        <span className="text-lg tracking-wide">Download CV</span>
                                        <Sparkles size={16} className="opacity-70" />
                                    </div>
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