import { useState } from 'react';

const servicesOptions = [
    'Hardware Procurement',
    'Component Sales',
    'System Repair',
    'Data Recovery',
    'Cloud Infrastructure',
    'Network Security'
];

export default function BridgeLinkContact() {
    const [formData, setFormData] = useState({
        email: '',
        service: [],
        description: '',
    });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            const updatedServices = checked
                ? [...formData.service, value]
                : formData.service.filter(s => s !== value);

            setFormData(prev => ({ ...prev, service: updatedServices }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.service.length === 0) {
            setStatus({ type: 'error', message: 'Please select at least one service.' });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Transmission Successful. Technician assigned.' });
                setFormData({ email: '', service: [], description: '' });
            } else {
                setStatus({ type: 'error', message: 'Connection failed. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Server unreachable.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-slate-200 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-30 ">

                {/* HEADER */}
                <div className="mb-20 border-l-4 border-red-600 pl-6">
                    <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                        BRIDGE <span className="text-blue-500">LINK</span>
                    </h1>
                    <p className="text-blue-400 font-mono tracking-[4px] mt-4 text-sm uppercase">
                        ADVANCED COMPUTING • HARDWARE SOLUTIONS
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">

                    {/* MAIN FORM */}
                    <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm p-12 md:p-16 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-14">

                            {/* Email */}
                            <div>
                                <label className="text-xs font-mono text-blue-400 tracking-widest block mb-3">
                                    01 — CLIENT IDENTIFICATION
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="CLIENT@DOMAIN.COM"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-slate-700 focus:border-red-600
                                               text-2xl py-5 outline-none transition-colors placeholder:text-slate-600 font-light"
                                />
                            </div>

                            {/* Services - FIXED CHECKBOXES */}
                            <div>
                                <label className="text-xs font-mono text-blue-400 tracking-widest block mb-6">
                                    02 — SERVICE SELECTION
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {servicesOptions.map((service) => {
                                        const isChecked = formData.service.includes(service);
                                        return (
                                            <label
                                                key={service}
                                                className={`group flex items-center gap-4 p-6 border rounded-2xl cursor-pointer transition-all duration-200 select-none
                                                    ${isChecked
                                                    ? 'border-red-600 bg-red-950/40'
                                                    : 'border-slate-800 hover:border-slate-600 hover:bg-slate-900/50'
                                                }`}
                                            >
                                                {/* Real checkbox - visible to browser but styled minimally */}
                                                <input
                                                    type="checkbox"
                                                    name="service"
                                                    value={service}
                                                    checked={isChecked}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 accent-red-600 cursor-pointer"
                                                />

                                                <span className={`font-semibold tracking-tight text-base uppercase
                                                    ${isChecked ? 'text-white' : 'text-slate-400'}`}
                                                >
                                                    {service}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="text-xs font-mono text-blue-400 tracking-widest block mb-3">
                                    03 — TECHNICAL BRIEF
                                </label>
                                <textarea
                                    name="description"
                                    rows={7}
                                    placeholder="Describe your requirements, hardware specifications, or issue details..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-950/70 border border-slate-800 focus:border-blue-500
                                               rounded-2xl p-7 text-sm font-mono resize-y min-h-[160px] outline-none transition-colors"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group w-full md:w-auto px-20 py-6 bg-blue-600 hover:bg-red-600
                                           disabled:bg-slate-700 disabled:cursor-not-allowed transition-all duration-300
                                           font-black uppercase tracking-[2px] text-lg flex items-center justify-center gap-4 rounded-full"
                            >
                                {loading ? (
                                    "PROCESSING TRANSMISSION..."
                                ) : (
                                    <>
                                        INITIALIZE CONTACT
                                        <span className="text-3xl group-hover:translate-x-3 transition-transform">→</span>
                                    </>
                                )}
                            </button>

                            {/* Status Message */}
                            {status && (
                                <div className={`p-6 rounded-2xl font-mono text-sm border-l-4 flex items-center gap-4
                                    ${status.type === 'success'
                                    ? 'border-blue-500 bg-blue-950/40 text-blue-300'
                                    : 'border-red-500 bg-red-950/40 text-red-300'
                                }`}
                                >
                                    <span className="font-black uppercase tracking-widest text-xs px-3 py-1 border border-current rounded">
                                        {status.type.toUpperCase()}
                                    </span>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* SIDEBAR - unchanged */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-2xl text-white">
                            <h3 className="text-3xl font-black uppercase mb-5 tracking-tighter">Direct Support</h3>
                            <p className="text-blue-100 leading-relaxed mb-8">
                                Technical bay is open for emergency hardware diagnostics and rapid data recovery.
                            </p>
                            <a
                                href="mailto:ops@bridgelink.com"
                                className="font-mono text-sm inline-flex items-center gap-2 hover:text-white/80 transition-colors"
                            >
                                ops@bridgelink.com
                                <span className="text-xl">↗</span>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}