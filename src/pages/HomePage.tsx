import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { ScrollReveal } from '../components/ScrollReveal';
import { StaggerReveal } from '../components/StaggerReveal';
import { PlanIcon } from '../components/PlanIcon';
import { AddOns } from '../components/AddOns';
import { FAQAccordion } from '../components/FAQAccordion';
import { HOME_PLANS, HOME_FAQS } from '../content/home';

interface HomePageProps {
    lang: 'en' | 'es';
}

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
    const isEN = lang === 'en';
    const homePlans = HOME_PLANS[lang];
    const faqs = HOME_FAQS[lang];

    const title = isEN
        ? "ByteWorks | Modern bilingual websites. Upkeep included."
        : "ByteWorks | Sitios web bilingües modernos. Mantenimiento incluido.";

    const description = isEN
        ? "Fast bilingual sites. Transparent pricing, hosting, SSL, and maintenance included. We design, develop, and update it for you."
        : "Sitios bilingües rápidos. Precios transparentes, hosting, SSL y mantenimiento incluidos. Diseñamos, desarrollamos y actualizamos por ti.";

    return (
        <Layout lang={lang} title={title} description={description}>
            <section className="px-4 max-w-[960px] mx-auto py-20" id="about">
                {/* HERO */}
                <div className="text-center space-y-6">
                    <h1 className="hero-animate text-4xl md:text-6xl font-extrabold leading-tight tracking-[-0.033em] text-gray-900 dark:text-text-primary font-heading">
                        {isEN ? "Professional Web Design for Your Business" : "Diseño Web Profesional para tu Negocio"}
                    </h1>
                    <p className="hero-animate-delay-1 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {isEN
                            ? "Subscription-based web design for entrepreneurs and small businesses."
                            : "Diseño web por suscripción para emprendedores y pequeños negocios."}
                    </p>
                    <div className="hero-animate-delay-2 flex items-center justify-center">
                        <a
                            href="#pricing"
                            className="btn-hover inline-flex items-center justify-center h-12 px-6 rounded-lg bg-transparent text-gray-900 dark:text-white border border-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                        >
                            {isEN ? "See Plans" : "Ver Planes"}
                        </a>
                    </div>
                </div>

                {/* BENEFITS */}
                <StaggerReveal className="mt-16 grid md:grid-cols-3 gap-6">
                    <div className="card-hover p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-4xl text-primary mb-3">translate</span>
                        <h3 className="font-heading font-bold text-gray-900 dark:text-text-primary mb-2">
                            {isEN ? "Bilingual by default" : "Bilingüe por defecto"}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {isEN
                                ? "English and Spanish structure ready. SEO-friendly routes."
                                : "Estructura en inglés y español lista. Rutas amigables para SEO."}
                        </p>
                    </div>
                    <div className="card-hover p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-4xl text-primary mb-3">paid</span>
                        <h3 className="font-heading font-bold text-gray-900 dark:text-text-primary mb-2">
                            {isEN ? "Transparent pricing" : "Precios transparentes"}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {isEN
                                ? "Clear pricing. Maintenance included. No surprises."
                                : "Precios claros. Mantenimiento incluido. Sin sorpresas."}
                        </p>
                    </div>
                    <div className="card-hover p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-4xl text-primary mb-3">rocket_launch</span>
                        <h3 className="font-heading font-bold text-gray-900 dark:text-text-primary mb-2">
                            {isEN ? "Fast & secure" : "Rápido y seguro"}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {isEN
                                ? "Performance-focused. SSL and backups included."
                                : "Enfocado en rendimiento. SSL y backups incluidos."}
                        </p>
                    </div>
                </StaggerReveal>

                {/* PLANS */}
                <ScrollReveal className="mt-20" id="pricing">
                    <div className="flex flex-col gap-4 text-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.033em] text-gray-900 dark:text-text-primary font-heading">
                            {isEN ? "Transparent Pricing" : "Precios Transparentes"}
                        </h2>
                        <p className="text-base font-normal leading-normal max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                            {isEN ? "Choose your plan. No hidden fees." : "Elige tu plan. Sin tarifas ocultas."}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {homePlans.map((p) => (
                            <div
                                key={p.name}
                                className={`card-hover relative flex h-full flex-col rounded-xl bg-white dark:bg-background-dark/50 p-6 ${p.name === "Pro" ? "border-2 border-primary" : "border border-gray-200 dark:border-gray-700"}`}
                            >
                                {p.name === "Pro" && (
                                    <p className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-xs font-medium tracking-[0.015em] rounded-full bg-secondary px-3 py-1 text-center">
                                        {isEN ? "Most Popular" : "Más Popular"}
                                    </p>
                                )}
                                <div className="space-y-1">
                                    <h3 className={`flex items-center gap-3 text-2xl md:text-3xl font-extrabold tracking-[-0.025em] font-heading ${p.name === "Pro" ? "text-primary" : "text-gray-900 dark:text-text-primary"}`}>
                                        <PlanIcon name={p.name} />
                                        {p.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-text-primary">
                                            {p.price}
                                        </p>
                                        <span className="inline-block text-[11px] md:text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">
                                            {p.yearly}
                                        </span>
                                    </div>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    {p.features.map((f, i) => (
                                        <li key={i} className="flex gap-3 items-center">
                                            <span className="material-symbols-outlined text-primary text-base">
                                                check
                                            </span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <Link
                                        to={isEN ? "/en/pricing" : "/es/pricing"}
                                        className="btn-hover inline-flex w-full items-center justify-center h-10 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
                                    >
                                        {isEN ? "See Plans" : "Ver Planes"}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
                        {isEN ? "Prices in USD. For other payment methods/currencies, contact us." : "Precios en USD. Para otros métodos de pago/monedas, contáctanos."}
                    </p>
                </ScrollReveal>

                <AddOns lang={lang} id="add-ons" summaryOnly={true} />

                {/* HOW IT WORKS */}
                <div className="mt-20" id="how-it-works">
                    <div className="flex flex-col gap-4 text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.033em] text-gray-900 dark:text-text-primary font-heading">
                            {isEN ? "Our Structured Process" : "Nuestro Proceso Estructurado"}
                        </h2>
                        <p className="text-base font-normal leading-normal max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                            {isEN ? "We follow a clear process to bring your vision to life." : "Seguimos un proceso claro para dar vida a tu visión."}
                        </p>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 max-w-md mx-auto">
                        {/* Simple Steps - simplified for React/JSX mapping */}
                        {[
                            { icon: 'search', titleEN: 'Discovery', titleES: 'Descubrimiento', descEN: 'We start by understanding your goals and requirements. (1-2 Weeks)', descES: 'Empezamos entendiendo tus objetivos y requisitos. (1-2 Semanas)', last: false },
                            { icon: 'design_services', titleEN: 'Design', titleES: 'Diseño', descEN: 'We create a stunning, user-friendly design. (2-3 Weeks)', descES: 'Creamos un diseño impresionante y fácil de usar. (2-3 Semanas)', last: false },
                            { icon: 'developer_mode', titleEN: 'Development', titleES: 'Desarrollo', descEN: 'We build your site with clean code and modern tech. (3-4 Weeks)', descES: 'Construimos tu sitio con código limpio y tecnología moderna. (3-4 Semanas)', last: false },
                            { icon: 'rocket_launch', titleEN: 'Launch', titleES: 'Lanzamiento', descEN: 'We deploy your site and provide ongoing support. (1 Week)', descES: 'Desplegamos tu sitio y brindamos soporte continuo. (1 Semana)', last: true },
                        ].map((step, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="icon-pulse flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined">{step.icon}</span>
                                    </div>
                                    {!step.last && <div className="w-px bg-gray-300 dark:bg-gray-600 flex-grow"></div>}
                                </div>
                                <div className={step.last ? "" : "pb-8"}>
                                    <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-text-primary">
                                        {isEN ? step.titleEN : step.titleES}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {isEN ? step.descEN : step.descES}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* FAQ SECTION */}
                <ScrollReveal className="mt-20" delay={100}>
                    <div id="faq">
                        <div className="flex flex-col gap-4 text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.033em] text-gray-900 dark:text-text-primary font-heading">
                                {isEN ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
                            </h2>
                            <p className="text-base font-normal leading-normal max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                                {isEN ? "Quick answers to common questions." : "Respuestas rápidas a preguntas comunes."}
                            </p>
                        </div>
                        <FAQAccordion faqs={faqs} lang={lang} />
                        <p className="text-center mt-6">
                            <Link to={isEN ? "/en/faq" : "/es/faq"} className="text-primary hover:underline font-medium">
                                {isEN ? "View all FAQs →" : "Ver todas las preguntas →"}
                            </Link>
                        </p>
                    </div>
                </ScrollReveal>
            </section>
        </Layout>
    );
};
