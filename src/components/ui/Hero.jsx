import React from "react";
import heroImage from "../../assets/ChatGPT Image Mar 7, 2026, 04_44_43 PM.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-28 md:pt-32 bg-[#030712] text-white overflow-hidden">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            {/* BLUE RADIAL GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.5),_transparent_60%)] pointer-events-none"></div>

            {/* FLOATING PARTICLES */}
            <div className="absolute inset-0 pointer-events-none">
                <span className="absolute w-2 h-2 bg-blue-500 rounded-full top-[15%] left-[30%] animate-pulse"></span>
                <span className="absolute w-1 h-1 bg-blue-400 rounded-full top-[40%] left-[70%] animate-ping"></span>
                <span className="absolute w-2 h-2 bg-blue-300 rounded-full top-[70%] left-[20%] animate-pulse"></span>
                <span className="absolute w-1 h-1 bg-blue-500 rounded-full top-[60%] left-[80%] animate-ping"></span>
            </div>

            {/* HERO IMAGE (Hidden on Mobile) */}
            <div className="hidden md:block absolute bottom-[-120px] left-1/2 -translate-x-1/2 pointer-events-none w-max">

                {/* BLUE HALO */}
                <div className="absolute w-[700px] lg:w-[900px] h-[700px] lg:h-[900px]
                bg-blue-500/30 blur-[140px] rounded-full bottom-[-200px] left-1/2 -translate-x-1/2"></div>

                <img
                    src={heroImage}
                    alt="VR Technology"
                    className="relative
                    scale-x-[-1]
                    md:w-[900px]
                    lg:w-[1050px]
                    xl:w-[1150px]
                    2xl:w-[1250px]
                    max-w-none
                    drop-shadow-[0_0_120px_rgba(37,99,235,0.8)]"
                />
            </div>

            {/* CONTENT */}
            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 xl:gap-60 items-center text-center lg:text-left">

                {/* LEFT SERVICES */}
                <div className="space-y-6 z-10 order-2 lg:order-1">

                    <h4 className="text-gray-400 text-sm sm:text-lg tracking-widest uppercase">
                        Our Services
                    </h4>

                    <div className="space-y-4 text-sm sm:text-base">

                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Computer Hardware Sales</span>
                            <span className="text-gray-500">01</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Computer Repair</span>
                            <span className="text-gray-500">02</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Data Recovery</span>
                            <span className="text-gray-500">03</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Cloud Storage</span>
                            <span className="text-gray-500">04</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span>IT Support</span>
                            <span className="text-gray-500">05</span>
                        </div>

                    </div>

                </div>

                {/* RIGHT TEXT */}
                <div className="space-y-6 z-10 order-1 lg:order-2">

                    <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400">
                        IT Solutions Company
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                        YOUR TECH <br />
                        SOLUTIONS <br />
                        REIMAGINED
                    </h1>

                    <p className="text-gray-400 max-w-md text-sm sm:text-base mx-auto lg:mx-0">
                        We provide reliable computer hardware, professional repair services,
                        secure data recovery, and scalable cloud storage solutions for
                        businesses and individuals.
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/30">
                        Explore Services
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Hero;