import React, { useState } from 'react';
import { Layout } from '../layouts/Layout';

interface ContactPageProps {
    lang: 'en' | 'es';
}

// API URL - Dashboard de ByteWorks (Payload CMS)
const API_URL = import.meta.env.VITE_DASHBOARD_API_URL || 'http://localhost:3000';

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
    const isEN = lang === 'en';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        bot_field: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-Spam Check
        if (formData.bot_field) {
            setStatus('success');
            setShowModal(true);
            return;
        }

        // Phone Validation
        const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            setStatus('error');
            setErrorMessage(isEN
                ? "Please enter a valid phone number (min 7 digits)."
                : "Por favor ingresa un número de teléfono válido (mín. 7 dígitos).");
            setShowModal(true);
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch(`${API_URL}/api/contact-requests`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || '',
                    message: formData.message,
                    source: 'byteworks-website',
                    bot_field: formData.bot_field,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Failed to send message');
            }

            setStatus('success');
            setShowModal(true);
            setFormData({ name: '', email: '', phone: '', message: '', bot_field: '' });
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('error');
            setErrorMessage(
                isEN
                    ? 'Something went wrong. Please try again or contact us directly.'
                    : 'Algo salió mal. Intenta de nuevo o contáctanos directamente.'
            );
            setShowModal(true);
        }
    };

    const handleAccept = () => {
        if (status === 'success') {
            // Redirect to home
            window.location.href = isEN ? '/' : '/es';
        } else {
            // Close modal and allow retry
            setShowModal(false);
            setStatus('idle');
        }
    };

    return (
        <Layout lang={lang} title={isEN ? "Contact Us" : "Contacto"}>
            {/* Modal Overlay */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
                        onClick={() => status === 'error' && handleAccept()}
                    />

                    {/* Modal Card */}
                    <div className="relative bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl max-w-sm w-full p-8 animate-scale-up overflow-hidden">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center text-center animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                                {/* Success Icon */}
                                <div className="mb-6 relative">
                                    <div className="relative w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                                        <svg className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Success Title */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                                    {isEN ? "Message Sent!" : "¡Mensaje Enviado!"}
                                </h3>

                                {/* Success Message */}
                                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-[15px]">
                                    {isEN
                                        ? "Thanks for reaching out. We've received your inquiry and will respond shortly via email."
                                        : "Gracias por contactarnos. Hemos recibido tu consulta y responderemos pronto vía email."
                                    }
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center text-center animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                                {/* Error Icon */}
                                <div className="mb-6 relative w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                                    <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>

                                {/* Error Title */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                                    {isEN ? "Submission Failed" : "Error al Enviar"}
                                </h3>

                                {/* Error Message */}
                                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-[15px]">
                                    {errorMessage}
                                </p>
                            </div>
                        )}

                        {/* Accept Button */}
                        <button
                            onClick={handleAccept}
                            className="w-full py-3.5 px-6 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/5 dark:shadow-white/5 animate-slide-up-fade"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {status === 'success'
                                ? (isEN ? "Back to Home" : "Volver al Inicio")
                                : (isEN ? "Try Again" : "Intentar de Nuevo")
                            }
                        </button>
                    </div>
                </div>
            )}

            <section className="px-6 md:px-10 lg:px-16 max-w-3xl mx-auto py-16 md:py-24 text-center space-y-8">
                <h1 className="text-3xl md:text-5xl font-semibold">
                    {isEN ? "Let's work together" : "Trabajemos juntos"}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {isEN
                        ? "Ready to start? We're here to help. Pick any social link from the 'Follow Us' section or fill the form below."
                        : "Listo para empezar? Estamos aquí para ayudar. Elige un enlace social o llena el formulario."}
                </p>

                <form onSubmit={handleSubmit} className="mt-12 text-left space-y-5 max-w-md mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">{isEN ? "Name / Brand" : "Nombre / Marca"}</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">{isEN ? "Preferred contact" : "Contacto preferido"}</label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">{isEN ? "Message" : "Mensaje"}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white disabled:opacity-50"
                        ></textarea>
                    </div>

                    {/* Honeypot Field (Hidden) */}
                    <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden">
                        <label htmlFor="bot_field">Website</label>
                        <input
                            type="text"
                            id="bot_field"
                            name="bot_field"
                            value={formData.bot_field}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' && (
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {status === 'loading'
                            ? (isEN ? 'Sending...' : 'Enviando...')
                            : (isEN ? 'Send Message' : 'Enviar Mensaje')
                        }
                    </button>
                </form>
            </section>

            {/* CSS Animations */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scale-up {
                    from { 
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes slide-up-fade {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
                .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-slide-up-fade { animation: slide-up-fade 0.4s ease-out forwards; opacity: 0; }
            `}</style>
        </Layout>
    );
};
