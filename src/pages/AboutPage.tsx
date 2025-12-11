import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { ScrollReveal } from '../components/ScrollReveal';

interface AboutPageProps {
    lang: 'en' | 'es';
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
    const isEN = lang === 'en';

    const title = isEN
        ? "About Us | ByteWorks | Your Partner for Bilingual Small Business Websites"
        : "Sobre Nosotros | ByteWorks | Tu Socio para Sitios Web Bilingües";
    const description = isEN
        ? "Learn about ByteWorks, a web design studio dedicated to helping small businesses succeed online with professional, bilingual websites and all-inclusive support."
        : "Conoce a ByteWorks, un estudio de diseño web dedicado a ayudar a pequeños negocios a triunfar en línea con sitios profesionales y bilingües.";

    return (
        <Layout lang={lang} title={title} description={description}>
            <section className="px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-16 md:py-24">
                <header className="text-center max-w-3xl mx-auto space-y-3 mb-12">
                    <h1 className="hero-animate text-3xl md:text-5xl font-semibold">
                        {isEN ? "About ByteWorks" : "Sobre ByteWorks"}
                    </h1>
                    <p className="hero-animate-delay-1 text-gray-600 dark:text-gray-300">
                        {isEN
                            ? "We build clean, modern, bilingual websites. Look professional and attract customers. No tech talk. Just reliable service and real results."
                            : "Creamos sitios web limpios, modernos y bilingües. Luce profesional y atrae clientes. Sin tecnicismos. Solo servicio confiable y resultados reales."}
                    </p>
                </header>

                <ScrollReveal className="grid md:grid-cols-2 gap-10 items-start">
                    <article className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-semibold">
                            {isEN ? "What we do" : "Qué hacemos"}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-200">
                            {isEN
                                ? "ByteWorks is a simple website solution for small businesses. Professional online presence without the overwhelm."
                                : "ByteWorks es una solución web simple para pequeños negocios. Presencia profesional en línea sin complicaciones."}
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
                            {isEN ? (
                                <>
                                    <li>English and Spanish included.</li>
                                    <li>Fast, clean, SEO-ready pages.</li>
                                    <li>Hosting, security, and backups handled.</li>
                                    <li>Monthly updates included.</li>
                                    <li>Add-ons for SEO, blog, or products.</li>
                                </>
                            ) : (
                                <>
                                    <li>Inglés y español incluidos.</li>
                                    <li>Páginas rápidas, limpias y listas para SEO.</li>
                                    <li>Hosting, seguridad y backups gestionados.</li>
                                    <li>Actualizaciones mensuales incluidas.</li>
                                    <li>Add-ons para SEO, blog o productos.</li>
                                </>
                            )}
                        </ul>
                    </article>

                    <article className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-semibold">
                            {isEN ? "How we work" : "Cómo trabajamos"}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-200">
                            {isEN
                                ? "Clear pricing. Zero stress. Modern stack for performance and stability."
                                : "Precios claros. Cero estrés. Tecnología moderna para rendimiento y estabilidad."}
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
                            {isEN ? (
                                <>
                                    <li>Fast loading, mobile-first, and accessible.</li>
                                    <li>Flexible content that grows with you.</li>
                                    <li>Direct support via social channels.</li>
                                </>
                            ) : (
                                <>
                                    <li>Carga rápida, mobile-first y accesible.</li>
                                    <li>Contenido flexible que crece contigo.</li>
                                    <li>Soporte directo vía canales sociales.</li>
                                </>
                            )}
                        </ul>
                    </article>
                </ScrollReveal>

                <ScrollReveal className="grid md:grid-cols-2 gap-10 items-start mt-12" delay={200}>
                    <article className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold">
                            {isEN ? "Process" : "Proceso"}
                        </h2>
                        <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
                            {isEN ? (
                                <>
                                    <li>We understand your goals</li>
                                    <li>We organize content and structure</li>
                                    <li>We design and build your site</li>
                                    <li>You review and approve</li>
                                    <li>Launch, updates, and support</li>
                                </>
                            ) : (
                                <>
                                    <li>Entendemos tus objetivos</li>
                                    <li>Organizamos contenido y estructura</li>
                                    <li>Diseñamos y construimos tu sitio</li>
                                    <li>Revisas y apruebas</li>
                                    <li>Lanzamiento, actualizaciones y soporte</li>
                                </>
                            )}
                        </ol>
                    </article>

                    <article className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold">
                            {isEN ? "What you get" : "Qué obtienes"}
                        </h2>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
                            {isEN ? (
                                <>
                                    <li>A professional website that inspires trust</li>
                                    <li>Fast load times and smooth experience</li>
                                    <li>SEO-friendly pages and clean metadata</li>
                                    <li>Analytics for simple insights</li>
                                    <li>Maintenance, backups, and support</li>
                                </>
                            ) : (
                                <>
                                    <li>Un sitio web profesional que inspira confianza</li>
                                    <li>Tiempos de carga rápidos y experiencia fluida</li>
                                    <li>Páginas amigables para SEO y metadatos limpios</li>
                                    <li>Analíticas para insights simples</li>
                                    <li>Mantenimiento, backups y soporte</li>
                                </>
                            )}
                        </ul>
                    </article>
                </ScrollReveal>

                <div className="mt-12 text-center">
                    <Link
                        to={isEN ? "/en/contact" : "/es/contacto"}
                        className="btn-hover inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                    >
                        {isEN ? "Work with us" : "Trabaja con nosotros"}
                    </Link>
                </div>
            </section>
        </Layout>
    );
};
