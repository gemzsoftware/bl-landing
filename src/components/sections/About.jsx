import React from "react";
import aboutImage from "../../assets/black-company-employees-reviewing-data-finances-office-meeting-consulting-analysis_482257-133852.jpg";

export default function About() {
    return (
        <section className="relative bg-[#050505] text-white overflow-hidden">

            {/* subtle top glow */}
            <div className="absolute top-0 left-0 w-full h-[260px]
            bg-gradient-to-b from-blue-400/10 to-transparent blur-[140px]" />

            {/* HERO */}
            <div className="max-w-[1100px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16 px-6 text-center">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                    About Bridge Link
                </h1>

                <p className="text-gray-400 max-w-[650px] mx-auto mb-8 leading-relaxed text-sm sm:text-base">
                    Bridge Link delivers reliable technology solutions including
                    computer hardware sales, professional repair services,
                    advanced data recovery, and secure cloud storage systems
                    designed to keep individuals and businesses connected.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <button className="px-6 py-3 rounded-lg bg-white text-black hover:opacity-90 transition">
                        Our Services
                    </button>

                    <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition">
                        Contact Us
                    </button>

                </div>

            </div>


            {/* FEATURE STRIP */}
            <div className="max-w-[1100px] mx-auto px-6 pb-16">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition">

                        <h3 className="text-lg font-semibold mb-2">
                            Reliable Hardware
                        </h3>

                        <p className="text-gray-400 text-sm">
                            High-quality computers, storage devices and
                            networking equipment built for stability and performance.
                        </p>

                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition">

                        <h3 className="text-lg font-semibold mb-2">
                            Secure Data
                        </h3>

                        <p className="text-gray-400 text-sm">
                            Advanced data recovery and protection solutions
                            designed to safeguard your critical information.
                        </p>

                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition">

                        <h3 className="text-lg font-semibold mb-2">
                            Cloud Systems
                        </h3>

                        <p className="text-gray-400 text-sm">
                            Secure cloud storage infrastructure enabling
                            reliable backup, collaboration and remote access.
                        </p>

                    </div>

                </div>

            </div>


            {/* COMPANY STORY */}
            <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 px-6 py-20 md:py-24">

                <div>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Technology That Keeps You Moving
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                        At Bridge Link, our mission is to make technology dependable,
                        accessible, and efficient. We work with individuals, startups,
                        and growing businesses to provide the hardware, technical
                        support, and data protection systems needed to operate smoothly.
                    </p>

                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        Whether it's repairing critical devices, recovering valuable
                        data, upgrading systems, or implementing cloud storage
                        infrastructure, Bridge Link ensures technology works for you.
                    </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur">

                    <img
                        src={aboutImage}
                        className="rounded-lg w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                        alt="Bridge Link Technology"
                    />

                </div>

            </div>


            {/* SERVICES GRID */}
            <div className="max-w-[1100px] mx-auto px-6 pb-20 md:pb-28">

                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 md:mb-16">
                    What We Do
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
                        <h3 className="text-lg font-semibold mb-3">
                            Hardware Sales
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Reliable desktops, laptops, storage devices, networking
                            equipment, and components tailored for performance
                            and longevity.
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
                        <h3 className="text-lg font-semibold mb-3">
                            Device Repair
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Professional diagnostics and repair services for computers,
                            hardware failures, overheating issues, and performance
                            optimization.
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
                        <h3 className="text-lg font-semibold mb-3">
                            Data Recovery
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Advanced recovery solutions for corrupted, damaged,
                            or accidentally deleted data from storage devices.
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
                        <h3 className="text-lg font-semibold mb-3">
                            Cloud Storage
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Secure cloud infrastructure to store, protect,
                            and access files from anywhere.
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
                        <h3 className="text-lg font-semibold mb-3">
                            System Upgrades
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Improve system performance with RAM upgrades,
                            storage expansion, and optimized hardware.
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
                        <h3 className="text-lg font-semibold mb-3">
                            Technical Support
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Ongoing support and consultation to ensure your
                            technology environment remains efficient and secure.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}