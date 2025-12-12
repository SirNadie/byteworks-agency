import React, { useState } from 'react';
import { Layout } from '../layouts/Layout';

interface ContactPageProps {
    lang: 'en' | 'es';
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
    const isEN = lang === 'en';
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Temporary placeholder: API removed to be re-implemented with Payload/new automation
        console.log("Form submitted (logic pending replacement):", formData);

        setStatus('loading');
        // Simulate delay
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <Layout lang={lang} title={isEN ? "Contact Us" : "Contacto"}>
            <section className="px-6 md:px-10 lg:px-16 max-w-3xl mx-auto py-16 md:py-24 text-center space-y-8">
                <h1 className="text-3xl md:text-5xl font-semibold">
                    {isEN ? "Let’s work together" : "Trabajemos juntos"}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {isEN
                        ? "Ready to start? We're here to help. Pick any social link from the “Follow Us” section or fill the form below."
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
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
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
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
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
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
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
                            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition disabled:opacity-50"
                    >
                        {status === 'loading' ? (isEN ? 'Sending...' : 'Enviando...') : (isEN ? 'Send Message' : 'Enviar Mensaje')}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-600 dark:text-green-400 text-center font-bold">
                            {isEN ? "Message Sent!" : "¡Mensaje Enviado!"}
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-600 dark:text-red-400 text-center font-bold">
                            {errorMessage}
                        </p>
                    )}
                </form>
            </section>
        </Layout>
    );
};
