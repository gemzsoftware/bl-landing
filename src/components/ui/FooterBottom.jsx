import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterBottom() {
    return (
        <div className="border-t border-zinc-800 bg-black text-zinc-400 py-6 px-6">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* LEFT - LOGO */}

                <div className="flex items-center gap-3">

                    {/* Replace with your logo */}
                    <div className="w-8 h-8 rounded-md  flex items-center justify-center text-white font-bold">
                        <img src="src/assets/ChatGPT Image Mar 7, 2026, 12_53_16 AM.png" alt=""/>
                    </div>

                    <span className="text-white font-medium">
            Bridge Link
          </span>

                </div>


                {/* CENTER - COPYRIGHT */}

                <p className="text-sm">
                    Copyright {new Date().getFullYear()} © Bridge Link
                </p>


                {/* RIGHT - SOCIALS */}

                <div className="flex items-center gap-5">

                    <a className="hover:text-white transition">
                        <Facebook size={18} />
                    </a>

                    <a className="hover:text-white transition">
                        <Twitter size={18} />
                    </a>

                    <a className="hover:text-white transition">
                        <Linkedin size={18} />
                    </a>

                    <a className="hover:text-white transition">
                        <Instagram size={18} />
                    </a>

                </div>

            </div>

        </div>
    );
}