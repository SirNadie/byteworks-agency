import React, { useState } from 'react';
import { Layout } from '../layouts/Layout';
import { API } from '../config';

interface ContactPageProps {
    lang: 'en' | 'es';
}

// API URL from centralized config
const API_URL = API.dashboardUrl;

type ContactMethod = 'whatsapp' | 'email' | null;
type FormStep = 'method' | 'details';

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
    const isEN = lang === 'en';

    // Step management
    const [step, setStep] = useState<FormStep>('method');
    const [contactMethod, setContactMethod] = useState<ContactMethod>(null);

    // Form data
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
    const [formLoadTime] = useState(() => Date.now()); // Track when form loaded for anti-spam

    const handleMethodSelect = (method: ContactMethod) => {
        setContactMethod(method);
        setStep('details');
    };

    const handleBack = () => {
        setStep('method');
        setContactMethod(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-Spam Check 1: Honeypot
        if (formData.bot_field) {
            setStatus('success');
            setShowModal(true);
            return;
        }

        // Anti-Spam Check 2: Time-based (bots submit too fast)
        const timeSpentMs = Date.now() - formLoadTime;
        if (timeSpentMs < 3000) { // Less than 3 seconds
            setStatus('success'); // Fake success for bots
            setShowModal(true);
            return;
        }

        // Phone Validation for WhatsApp
        if (contactMethod === 'whatsapp') {
            const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
            if (!formData.phone || !phoneRegex.test(formData.phone)) {
                setStatus('error');
                setErrorMessage(isEN
                    ? "Please enter a valid WhatsApp number (min 7 digits)."
                    : "Por favor ingresa un número de WhatsApp válido (mín. 7 dígitos).");
                setShowModal(true);
                return;
            }
        }

        // Email Validation for Email method
        if (contactMethod === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email || !emailRegex.test(formData.email)) {
                setStatus('error');
                setErrorMessage(isEN
                    ? "Please enter a valid email address."
                    : "Por favor ingresa un correo electrónico válido.");
                setShowModal(true);
                return;
            }
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch(`${API_URL}/api/contacts/public`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email || `${formData.phone.replace(/\D/g, '')}@whatsapp.placeholder`,
                    phone: formData.phone || '',
                    message: formData.message,
                    contact_method: contactMethod,
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
            window.location.href = isEN ? '/' : '/es';
        } else {
            setShowModal(false);
            setStatus('idle');
        }
    };

    // Get the method label for the confirmation message
    const getMethodLabel = () => {
        if (contactMethod === 'whatsapp') {
            return isEN ? 'WhatsApp' : 'WhatsApp';
        }
        return isEN ? 'email' : 'correo electrónico';
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

                                {/* Success Message - Updated with 24-48 hours and contact method */}
                                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-[15px]">
                                    {isEN
                                        ? `Thank you for reaching out! We've received your message and will contact you within 24-48 hours via ${getMethodLabel()}.`
                                        : `¡Gracias por contactarnos! Hemos recibido tu mensaje y te contactaremos en 24-48 horas vía ${getMethodLabel()}.`
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

                {/* FREE Badge */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold shadow-lg">
                        <span className="material-symbols-outlined text-lg">verified</span>
                        {isEN ? "100% FREE CONSULTATION" : "CONSULTA 100% GRATIS"}
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {isEN
                        ? "Get a detailed, custom quote for your project. No payment required. No commitment. Just tell us about your vision."
                        : "Obtén una cotización detallada y personalizada para tu proyecto. Sin pago. Sin compromiso. Solo cuéntanos tu visión."}
                </p>

                {/* Step 1: Choose Contact Method */}
                {step === 'method' && (
                    <div className="mt-12 max-w-md mx-auto animate-slide-up-fade">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            {isEN ? "How would you prefer to be contacted?" : "¿Cómo prefieres que te contactemos?"}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {/* WhatsApp Option */}
                            <button
                                onClick={() => handleMethodSelect('whatsapp')}
                                className="group relative flex flex-col items-center justify-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">WhatsApp</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {isEN ? "Quick response" : "Respuesta rápida"}
                                </span>
                            </button>

                            {/* Email Option */}
                            <button
                                onClick={() => handleMethodSelect('email')}
                                className="group relative flex flex-col items-center justify-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">Email</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {isEN ? "Detailed info" : "Info detallada"}
                                </span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Contact Form */}
                {step === 'details' && (
                    <div className="mt-12 animate-slide-up-fade">
                        {/* Back Button */}
                        <button
                            onClick={handleBack}
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {isEN ? "Back" : "Volver"}
                        </button>

                        {/* Method Badge */}
                        <div className="flex justify-center mb-6">
                            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${contactMethod === 'whatsapp'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                                }`}>
                                {contactMethod === 'whatsapp' ? (
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                                {isEN
                                    ? `Contact via ${contactMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}`
                                    : `Contacto por ${contactMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}`
                                }
                            </span>
                        </div>

                        <form onSubmit={handleSubmit} className="text-left space-y-5 max-w-md mx-auto">
                            {/* Name / Company */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    {isEN ? "Name / Company" : "Nombre / Empresa"}
                                </label>
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

                            {/* Contact Field - Conditional based on method */}
                            {contactMethod === 'whatsapp' ? (
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                        {isEN ? "WhatsApp Number" : "Número de WhatsApp"}
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder={isEN ? "+1 868 000 0000" : "+1 868 000 0000"}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white disabled:opacity-50"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white disabled:opacity-50"
                                    />
                                </div>
                            )}

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    {isEN ? "Tell us about your project" : "Cuéntanos sobre tu proyecto"}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
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
                                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white transition disabled:opacity-50 disabled:cursor-not-allowed ${contactMethod === 'whatsapp'
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
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
                    </div>
                )}
            </section>
        </Layout>
    );
};
