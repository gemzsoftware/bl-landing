import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/ChatGPT Image Mar 7, 2026, 12_53_16 AM.png";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full flex justify-center pt-6 fixed top-0 left-0 z-50 px-4">

            <div
                className="w-full max-w-[1200px] flex items-center justify-between px-6 py-3
                bg-[#0A0A0A]/80 backdrop-blur-xl
                border border-[#1E293B]
                rounded-full
                shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
            >

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-lg font-semibold">

                    <img
                        src={logo}
                        alt="BridgeLink Logo"
                        className="w-8 h-auto"
                    />

                    <h1 className="text-gray-200">
                        Bridge <span className="text-blue-500">Link</span>
                    </h1>

                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 text-[14px] text-gray-400 font-medium">

                    <li>
                        <Link to="/" className="text-white">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="hover:text-white transition-colors duration-300"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/services"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Services
                        </Link>
                    </li>

                </ul>

                {/* Desktop Button */}
                <Link
                    to="/contact"
                    className="hidden md:block px-5 py-2 text-sm font-medium
                    bg-[#111827]
                    border border-[#1E293B]
                    rounded-full
                    text-white
                    hover:bg-blue-600
                    transition-all duration-300"
                >
                    Let’s Talk
                </Link>

                {/* Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px]
                    bg-[#0A0A0A]/95 backdrop-blur-xl
                    border border-[#1E293B]
                    rounded-2xl p-6 md:hidden"
                >

                    <ul className="flex flex-col gap-6 text-gray-300 font-medium">

                        <li>
                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/services"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-white"
                            >
                                Services
                            </Link>
                        </li>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 px-5 py-3
                            bg-blue-600
                            rounded-full
                            text-white
                            hover:bg-blue-700 transition"
                        >
                            Let’s Talk
                        </button>

                    </ul>

                </div>
            )}

        </nav>
    );
};

export default Navbar;