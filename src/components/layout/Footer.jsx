import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/ChatGPT Image Mar 7, 2026, 12_53_16 AM.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-6">

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* LOGO */}
                <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <img
                            src={logo}
                            alt="BridgeLink Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <span className="text-xl font-semibold tracking-wide">
                        BridgeLink
                    </span>

                </div>

                {/* COMPANY TEXT */}
                <p className="text-zinc-400 max-w-xl mb-10 text-sm sm:text-base">
                    We provide modern IT solutions including web development,
                    cybersecurity, cloud infrastructure, hardware services and
                    advanced digital systems for businesses and organizations.
                </p>

                {/* NAV LINKS */}
                <div className="flex flex-wrap justify-center gap-8 mb-8 text-zinc-300 text-sm sm:text-base">

                    <Link
                        to="/"
                        className="hover:text-white transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="hover:text-white transition"
                    >
                        About
                    </Link>

                    <Link
                        to="/services"
                        className="hover:text-white transition"
                    >
                        Services
                    </Link>

                </div>

                {/* SOCIALS */}
                <div className="flex gap-6 text-zinc-400">

                    <a className="hover:text-white transition cursor-pointer">
                        <Facebook size={20} />
                    </a>

                    <a className="hover:text-white transition cursor-pointer">
                        <X size={20} />
                    </a>

                    <a className="hover:text-white transition cursor-pointer">
                        <Instagram size={20} />
                    </a>

                    <a className="hover:text-white transition cursor-pointer">
                        <Linkedin size={20} />
                    </a>

                </div>

            </div>

        </footer>
    );
}