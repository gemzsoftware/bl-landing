import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import webImage from "../../assets/modern-office-equipment-blue-desk-generated-by-ai.jpg";
import cyberImage from "../../assets/hacker-dark-neon-lit-underground-hq-coding-malware.jpg";
import cloudImage from "../../assets/global-communication-equipment-futuristic-server-room-generated-by-ai.jpg";

const services = [
    {
        title: "Web Development",
        description:
            "Modern high performance web applications built with scalable technologies.",
        features: [
            "React & Next.js",
            "High performance architecture",
            "SEO optimized systems",
        ],
        image: webImage,
    },
    {
        title: "Cyber Security",
        description:
            "Enterprise-grade cybersecurity systems protecting infrastructure and data.",
        features: [
            "Threat detection",
            "Security monitoring",
            "Infrastructure protection",
        ],
        image: cyberImage,
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Reliable cloud architecture designed for scalability and high availability.",
        features: [
            "AWS / Azure systems",
            "Scalable deployment",
            "High availability architecture",
        ],
        image: cloudImage,
    },
];

export default function Services() {

    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {

        if (isMobile) return;

        const handleScroll = () => {

            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const total = rect.height + windowHeight;
            const current = windowHeight - rect.top;

            let percent = current / total;
            percent = Math.max(0, Math.min(1, percent));

            setProgress(percent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [isMobile]);

    const activeIndex = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
    );

    return (
        <section
            ref={containerRef}
            className="relative bg-black text-white py-32 overflow-hidden"
        >

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 opacity-20 pointer-events-none
            bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)]
            bg-[size:60px_60px] animate-[gridmove_20s_linear_infinite]" />

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* TIMELINE (desktop only) */}
                {!isMobile && (
                    <div className="absolute left-6 top-0 w-[3px] h-full bg-zinc-800">

                        <div
                            className="absolute top-0 left-0 w-[3px] bg-gradient-to-b from-blue-400 to-cyan-500 shadow-[0_0_25px_#3b82f6]"
                            style={{ height: `${progress * 110}%` }}
                        />

                        <div
                            className="absolute -left-[6px] w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_25px_#3b82f6]"
                            style={{ top: `${progress * 110}%` }}
                        />

                    </div>
                )}

                <div className="flex flex-col gap-24 md:gap-40">

                    {services.map((service, index) => {

                        const active = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[60px_1fr_1fr] gap-10 items-center"
                            >

                                <div className="hidden md:block" />

                                {/* TEXT */}
                                <div
                                    className={`transition-all duration-700 ${
                                        isMobile
                                            ? "opacity-100"
                                            : active
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-40 translate-x-6"
                                    }`}
                                >

                                    <h3 className="text-3xl font-semibold mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-zinc-400 mb-6 max-w-lg">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm">
                                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                </div>

                                {/* CARD */}
                                <div className={`${isMobile ? "" : "sticky top-32"}`}>

                                    <div className="group perspective">

                                        <div
                                            className={`bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform-gpu ${
                                                isMobile
                                                    ? "opacity-100"
                                                    : active
                                                        ? "opacity-100 translate-y-0"
                                                        : "opacity-0 translate-y-10"
                                            } group-hover:rotate-y-6 group-hover:rotate-x-3`}
                                        >

                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-56 object-cover"
                                            />

                                            <div className="p-6">
                                                <p className="text-zinc-400 text-sm">
                                                    Powerful systems designed for modern digital
                                                    infrastructure and enterprise performance.
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* SEE MORE BUTTON */}
                <div className="flex justify-center mt-24">

                    <button
                        onClick={() => navigate("/services")}
                        className="cursor-pointer relative px-10 py-4 text-blue-400 border border-blue-500/40 rounded-full backdrop-blur-md overflow-hidden group transition-all duration-300 hover:scale-105 hover:border-blue-400"
                    >

                        <span className="relative z-10 font-medium tracking-wide">
                            See More
                        </span>

                        <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

                        <span className="absolute top-0 -left-[120%] h-full w-[120%] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:left-[120%] transition-all duration-1000"></span>

                        <span className="absolute -inset-1 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></span>

                    </button>

                </div>

            </div>

        </section>
    );
}