import webDev from "../../assets/modern-office-equipment-blue-desk-generated-by-ai.jpg";
import cyber from "../../assets/hacker-dark-neon-lit-underground-hq-coding-malware.jpg";
import cloudInfra from "../../assets/global-communication-equipment-futuristic-server-room-generated-by-ai.jpg";
import hardware from "../../assets/computer-chip-dark-background-with-word-intel-it.jpg";
import repair from "../../assets/computer-motherboard-diagnostics-close-up-programmer-inspecting-circuit-note-results-paper-electronic-repair-fix-renovation-concept_279525-1069.jpg";
import recovery from "../../assets/high-angle-hard-drive-components-laptop.jpg";
import storage from "../../assets/woman-using-laptop-upload-with-cloud-icon-hologram-effect_105092-945.jpg";

const services = [
    {
        title: "Web Development",
        description:
            "Modern high-performance web applications built with scalable technologies.",
        features: [
            "React & Next.js",
            "High performance architecture",
            "SEO optimized systems",
        ],
        image: webDev,
    },
    {
        title: "Cyber Security",
        description:
            "Enterprise-grade cybersecurity solutions protecting digital infrastructure.",
        features: [
            "Threat detection",
            "Network protection",
            "Security monitoring",
        ],
        image: cyber,
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Reliable cloud architecture designed for scalability and availability.",
        features: [
            "AWS / Azure deployment",
            "Cloud scalability",
            "High availability systems",
        ],
        image: cloudInfra,
    },
    {
        title: "Computer Hardware",
        description:
            "Professional supply and installation of high quality computing hardware.",
        features: [
            "Workstations & office systems",
            "Server hardware setup",
            "Networking equipment",
        ],
        image: hardware,
    },
    {
        title: "Computer Repair",
        description:
            "Advanced diagnostics and repair services for computers and IT systems.",
        features: [
            "Laptop & desktop repair",
            "Component replacement",
            "System optimization",
        ],
        image: repair,
    },
    {
        title: "Data Recovery",
        description:
            "Recover critical business and personal data from damaged storage devices.",
        features: [
            "Hard drive recovery",
            "SSD & flash recovery",
            "Corrupted file restoration",
        ],
        image: recovery,
    },
    {
        title: "Cloud Storage Solutions",
        description:
            "Secure cloud storage systems for businesses and organizations.",
        features: [
            "Encrypted cloud storage",
            "Backup automation",
            "Secure remote access",
        ],
        image: storage,
    },
];

export default function ServiceFull() {
    return (
        <section className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden">

            {/* grid background */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-16 md:mb-20">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                        Our Services
                    </h1>

                    <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                        We deliver professional IT solutions, modern infrastructure and
                        advanced digital systems designed for businesses and organizations.
                    </p>

                </div>

                {/* SERVICES */}
                <div className="space-y-20 md:space-y-24">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="grid md:grid-cols-2 gap-10 md:gap-12 items-center"
                        >

                            {/* TEXT */}
                            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>

                                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                    {service.title}
                                </h2>

                                <p className="text-zinc-400 mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-sm text-zinc-300"
                                        >
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-[0_0_10px_#3b82f6]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            {/* IMAGE CARD */}
                            <div
                                className={`group relative ${
                                    index % 2 === 1 ? "md:order-1" : ""
                                }`}
                            >

                                <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-lg shadow-2xl">

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                </div>

                                {/* accents */}
                                <div className="absolute -top-4 -right-4 w-14 h-14 border-t-2 border-r-2 border-blue-500 opacity-70" />
                                <div className="absolute -bottom-4 -left-4 w-14 h-14 border-b-2 border-l-2 border-blue-500 opacity-70" />

                            </div>

                        </div>

                    ))}

                </div>

                {/* CTA */}
                <div className="mt-20 md:mt-24">

                    <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] border border-zinc-800 rounded-xl px-8 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">

                        <h3 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                            Let’s Build Your Next Technology Solution
                        </h3>

                        <button className="px-7 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300">
                            Contact Us
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}