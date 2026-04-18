import React, { useState } from "react";

const faqs = [
    {
        question: "What services does Bridge Link provide?",
        answer:
            "Bridge Link provides professional computer hardware sales, device repairs, advanced data recovery services, and secure cloud storage solutions for individuals and businesses."
    },
    {
        question: "Do you repair all types of computers?",
        answer:
            "Yes. Our technicians repair desktops, laptops, and workstations. We handle motherboard faults, overheating systems, damaged ports, power issues, and other hardware failures."
    },
    {
        question: "Can you recover deleted or damaged data?",
        answer:
            "In many situations, yes. Bridge Link offers professional data recovery for SSDs, HDDs, flash drives, and external storage devices, even in cases of accidental deletion or system corruption."
    },
    {
        question: "Do you sell computer hardware and accessories?",
        answer:
            "Yes. We supply reliable hardware including storage drives, RAM upgrades, processors, networking equipment, and complete computer systems for home or business use."
    },
    {
        question: "Do you offer cloud storage solutions?",
        answer:
            "Bridge Link helps businesses and individuals implement secure cloud storage systems for file backup, collaboration, and long-term data protection."
    },
    {
        question: "How long does a typical repair take?",
        answer:
            "Most diagnostics and repairs are completed within 24–72 hours depending on the complexity of the issue and availability of replacement components."
    }
];

export default function FAQ() {

    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="relative bg-[#050505] text-white py-24 md:py-32 px-6 overflow-hidden">

            {/* Top Accent Glow */}
            <div className="absolute top-0 left-0 w-full h-[220px]
            bg-gradient-to-b from-blue-500/20 to-transparent
            blur-3xl animate-pulse"></div>

            <div className="max-w-[900px] mx-auto text-center relative z-10">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                    Frequently Asked Questions
                </h2>

                <p className="text-gray-400 mb-12 md:mb-16 max-w-[600px] mx-auto text-sm sm:text-base">
                    Learn more about Bridge Link’s hardware solutions, repair services,
                    data recovery, and cloud storage systems.
                </p>

                <div className="space-y-4 text-left">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="border border-white/10 rounded-xl
                            bg-white/[0.02] backdrop-blur-md
                            transition-all duration-300
                            hover:border-blue-400/30"
                        >

                            <button
                                onClick={() => toggle(index)}
                                aria-expanded={active === index}
                                className="w-full flex justify-between items-center p-5 md:p-6 text-base md:text-lg font-medium"
                            >
                                {faq.question}

                                <span
                                    className={`text-xl transition-transform duration-300 ${
                                        active === index ? "rotate-45" : ""
                                    }`}
                                >
                                    +
                                </span>

                            </button>

                            <div
                                className={`px-6 text-gray-400 leading-relaxed text-sm md:text-base transition-all duration-300 overflow-hidden ${
                                    active === index ? "max-h-40 pb-6" : "max-h-0"
                                }`}
                            >
                                {faq.answer}
                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}