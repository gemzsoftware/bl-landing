import { useState } from 'react';

const servicesOptions = [
    'Computer Hardware Sales',
    'Device Repair & Maintenance',
    'Data Recovery Services',
    'Cloud Storage Solutions',
    'Network Installation',
    'IT Consultation'
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        email: '',
        service: [],
        description: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            const updatedService = [...formData.service];
            if (checked) {
                updatedService.push(value);
            } else {
                const index = updatedService.indexOf(value);
                if (index > -1) updatedService.splice(index, 1);
            }
            setFormData({ ...formData, [name]: updatedService });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.service.length === 0) {
            setStatus({ type: 'error', message: 'Please select at least one service.' });
            return;
        }

        setLoading(true);
        setStatus({ type: 'info', message: 'Connecting to Bridge Link...' });

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Request sent! Our technicians will contact you shortly.' });
                setFormData({ email: '', service: [], description: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Please check your connection.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact-us">
            {/* Red and Blue Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-100/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                            Bridge Link IT Solutions
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 uppercase">
                            Reliable Tech. <span className="text-red-600">Seamless Connection.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-slate-600 max-w-xs border-l-4 border-blue-600 pl-4">
                        Providing expert hardware sales, repairs, and enterprise cloud infrastructure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    {/* Form Side */}
                    <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-2xl shadow-xl shadow-blue-900/5 border-t-8 border-blue-600">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Your Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-tight">How can Bridge Link help?</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {servicesOptions.map((service, index) => (
                                        <label
                                            key={index}
                                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                                formData.service.includes(service)
                                                    ? 'bg-blue-50 border-blue-300'
                                                    : 'bg-white border-slate-100 hover:border-blue-200'
                                            }`}
                                        >
                                            <input
                                                name="service"
                                                type="checkbox"
                                                value={service}
                                                checked={formData.service.includes(service)}
                                                onChange={handleChange}
                                                className="h-5 w-5 rounded border-slate-300 text-red-600 focus:ring-red-500"
                                            />
                                            <span className="text-sm font-semibold text-slate-700">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight">Project Details / Issue Description</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Tell us about your hardware needs or data recovery urgency..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg text-sm font-medium ${
                                    status.type === 'success' ? 'bg-blue-100 text-blue-800' :
                                        status.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-700'
                                }`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-red-600 transform hover:-translate-y-1 transition-all shadow-lg shadow-blue-200 disabled:opacity-60 uppercase tracking-widest"
                            >
                                {loading ? "Processing..." : "Bridge the Gap"}
                            </button>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex-1 bg-slate-900 p-10 rounded-2xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <svg width="120" height="120" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-6">Immediate Assistance</h4>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Our data recovery and hardware specialists are on standby for emergency repairs and system deployments.
                            </p>
                            <a href="mailto:solutions@bridgelink.com" className="text-xl font-bold text-red-500 hover:text-white transition-colors block">
                                solutions@bridgelink.com
                            </a>
                        </div>

                        <div className="bg-red-600 p-10 rounded-2xl text-white shadow-xl shadow-red-200">
                            <h4 className="text-xl font-bold mb-2">Visit Our Workshop</h4>
                            <p className="opacity-90">Certified Hardware & Recovery Center</p>
                            <div className="mt-6 h-1 w-12 bg-white/40" />
                            <p className="mt-6 font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}