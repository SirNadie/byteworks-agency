import React from 'react';
import { Layout } from '../layouts/Layout';
import { ScrollReveal } from '../components/ScrollReveal';

interface HowItWorksPageProps {
    lang: 'en' | 'es';
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ lang }) => {
    const isEN = lang === 'en';
    const title = isEN
        ? "Our Website Design Process | ByteWorks"
        : "Nuestro Proceso de Diseño Web | ByteWorks";

    return (
        <Layout lang={lang} title={title}>
            <section className="px-4 max-w-[960px] mx-auto py-16 md:py-24">
                <header className="text-center space-y-3 mb-10">
                    <h1 className="hero-animate text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-text-primary font-heading">
                        {isEN ? "How It Works" : "Cómo Funciona"}
                    </h1>
                    <p className="hero-animate-delay-1 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {isEN ? "Simple process to bring your site to life. Fast, clear, no stress." : "Proceso simple para dar vida a tu sitio. Rápido, claro, sin estrés."}
                    </p>
                </header>

                <ScrollReveal className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-6">
                    {/* Discovery */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-pulse flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <div className="w-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
                    </div>
                    <article className="card-hover border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-background-dark/50 p-5">
                        <h2 className="text-lg md:text-xl font-bold font-heading text-gray-900 dark:text-text-primary">
                            {isEN ? "Discovery" : "Descubrimiento"}
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {isEN ? "We understand your goals and requirements." : "Entendemos tus objetivos y requisitos."}
                        </p>
                        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div>
                                <p className="font-medium">{isEN ? "What we cover" : "Qué cubrimos"}</p>
                                <ul className="list-disc list-inside space-y-0.5">
                                    <li>{isEN ? "Target audience" : "Público objetivo"}</li>
                                    <li>{isEN ? "Website goals & structure" : "Objetivos y estructura del sitio"}</li>
                                    <li>{isEN ? "Tone, messaging, and success criteria" : "Tono, mensajes y criterios de éxito"}</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium">{isEN ? "What we need" : "Qué necesitamos"}</p>
                                <ul className="list-disc list-inside space-y-0.5">
                                    <li>{isEN ? "Logo and brand colors (if available)" : "Logo y colores de marca (si hay)"}</li>
                                    <li>{isEN ? "Copy drafts or guidance" : "Borradores de texto o guía"}</li>
                                    <li>{isEN ? "Images or placeholders" : "Imágenes o marcadores"}</li>
                                    <li>{isEN ? "Contact details and business info" : "Detalles de contacto e información comercial"}</li>
                                </ul>
                            </div>
                            <p className="font-medium text-gray-500 dark:text-gray-400">
                                {isEN ? "Duration: 1-2 weeks." : "Duración: 1-2 semanas."}
                            </p>
                        </div>
                    </article>

                    {/* Design */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-pulse flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">design_services</span>
                        </div>
                        <div className="w-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
                    </div>
                    <article className="card-hover border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-background-dark/50 p-5">
                        <h2 className="text-lg md:text-xl font-bold font-heading text-gray-900 dark:text-text-primary">
                            {isEN ? "Design" : "Diseño"}
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {isEN ? "We create a stunning, user-friendly design." : "Creamos un diseño impresionante y fácil de usar."}
                        </p>
                        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div>
                                <p className="font-medium">{isEN ? "Deliverables" : "Entregables"}</p>
                                <ul className="list-disc list-inside space-y-0.5">
                                    <li>{isEN ? "Homepage concept" : "Concepto de página de inicio"}</li>
                                    <li>{isEN ? "Key inner pages/sections" : "Páginas/secciones clave internas"}</li>
                                    <li>{isEN ? "Mobile-first behaviors" : "Comportamientos mobile-first"}</li>
                                    <li>{isEN ? "Style and visual guidelines" : "Guías de estilo y visuales"}</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium">{isEN ? "Review rounds" : "Rondas de revisión"}</p>
                                <p>
                                    {isEN ? "Fast feedback via social channels or email. We refine copy and layout quickly." : "Feedback rápido vía redes o email. Refinamos texto y diseño rápidamente."}
                                </p>
                            </div>
                            <p className="font-medium text-gray-500 dark:text-gray-400">
                                {isEN ? "Duration: 2-3 weeks." : "Duración: 2-3 semanas."}
                            </p>
                        </div>
                    </article>

                    {/* Development */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-pulse flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">developer_mode</span>
                        </div>
                        <div className="w-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
                    </div>
                    <article className="card-hover border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-background-dark/50 p-5">
                        <h2 className="text-lg md:text-xl font-bold font-heading text-gray-900 dark:text-text-primary">
                            {isEN ? "Development" : "Desarrollo"}
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {isEN ? "We build with clean code and modern stack. Speed, security, and SEO included." : "Construimos con código limpio y stack moderno. Velocidad, seguridad y SEO incluidos."}
                        </p>
                        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div>
                                <p className="font-medium">{isEN ? "Included" : "Incluido"}</p>
                                <ul className="list-disc list-inside space-y-0.5">
                                    <li>{isEN ? "Domain setup" : "Configuración de dominio"}</li>
                                    <li>{isEN ? "Hosting & SSL" : "Hosting y SSL"}</li>
                                    <li>{isEN ? "Automated backups" : "Backups automatizados"}</li>
                                    <li>{isEN ? "Basic analytics" : "Analíticas básicas"}</li>
                                    <li>{isEN ? "Sitemap + clean metadata" : "Sitemap + metadatos limpios"}</li>
                                </ul>
                            </div>
                            <p className="font-medium text-gray-500 dark:text-gray-400">
                                {isEN ? "Duration: 3-4 weeks." : "Duración: 3-4 semanas."}
                            </p>
                        </div>
                    </article>

                    {/* Launch */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="icon-pulse flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">rocket_launch</span>
                        </div>
                    </div>
                    <article className="card-hover border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-background-dark/50 p-5">
                        <h2 className="text-lg md:text-xl font-bold font-heading text-gray-900 dark:text-text-primary">
                            {isEN ? "Launch" : "Lanzamiento"}
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {isEN ? "We deploy your site and provide ongoing support." : "Desplegamos tu sitio y brindamos soporte continuo."}
                        </p>
                        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div>
                                <p className="font-medium">{isEN ? "Final checks" : "Comprobaciones finales"}</p>
                                <ul className="list-disc list-inside space-y-0.5">
                                    <li>{isEN ? "Cross-device QA" : "QA en múltiples dispositivos"}</li>
                                    <li>{isEN ? "Form testing" : "Pruebas de formularios"}</li>
                                    <li>{isEN ? "Performance pass" : "Revisión de rendimiento"}</li>
                                    <li>{isEN ? "Indexing signals" : "Señales de indexación"}</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium">{isEN ? "Handover" : "Entrega"}</p>
                                <ul className="list-disc list-inside space-y-0.5">
                                    <li>{isEN ? "Quick usage notes" : "Notas rápidas de uso"}</li>
                                    <li>{isEN ? "Admin links (if applicable)" : "Enlaces de admin (si aplica)"}</li>
                                    <li>{isEN ? "Confirmation of support channels" : "Confirmación de canales de soporte"}</li>
                                </ul>
                            </div>
                            <p className="font-medium text-gray-500 dark:text-gray-400">
                                {isEN ? "After launch: Monthly updates included with your plan + optional add-ons (SEO, blog, catalog, etc.)." : "Tras el lanzamiento: Actualizaciones mensuales incluidas con tu plan + complementos opcionales (SEO, blog, catálogo, etc.)."}
                            </p>
                        </div>
                    </article>
                </ScrollReveal>

                <ScrollReveal className="mt-12 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-background-dark/50 p-5" delay={200}>
                    <h2 className="text-lg md:text-xl font-bold font-heading text-gray-900 dark:text-text-primary">
                        {isEN ? "Timeline & Communication" : "Línea de tiempo y comunicación"}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {isEN
                            ? "Small sites launch in 7-10 days. Larger scopes take 2-4 weeks. Communication via social channels. Early previews for quick review."
                            : "Sitios pequeños lanzados en 7-10 días. Proyectos más grandes toman 2-4 semanas. Comunicación vía redes sociales. Previsualizaciones tempranas para revisión rápida."}
                    </p>
                </ScrollReveal>

            </section>
        </Layout>
    );
};
