import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { PlanIcon } from '../components/PlanIcon';
import { AddOns } from '../components/AddOns';
import { HOME_PLANS } from '../content/home';
import { ScrollReveal } from '../components/ScrollReveal';
import { StaggerReveal } from '../components/StaggerReveal';

interface PricingPageProps {
    lang: 'en' | 'es';
}

const planMeta: Record<string, any> = {
    Start: {
        pages: "Modern Single-Page Application",
        updates: "1 update",
        seo: "Foundational SEO setup",
        automation: "Includes up to 500 auto-response emails/mo",
    },
    Pro: {
        pages: "Multi-Page Architecture",
        updates: "Monthly content updates",
        seo: "Custom Brand Identity alignment",
        automation: "Includes up to 500 auto-response emails/mo",
    },
    "E-Commerce Pro": {
        pages: "Full Online Store",
        updates: "Unlimited Inventory",
        seo: "Enhanced SEO + catalog upkeep",
        automation: "Includes up to 500 transaction emails/mo",
    },
};

export const PricingPage: React.FC<PricingPageProps> = ({ lang }) => {
    const [expanded, setExpanded] = useState(false);
    const isEN = lang === 'en';
    const plans = HOME_PLANS[lang];

    const extendedPlans = plans.map(p => {
        let bestFor = "";
        if (p.name === "Start") bestFor = isEN ? "Validation & Personal Profiles." : "Validación y Perfiles Personales.";
        if (p.name === "Pro") bestFor = isEN ? "Small Businesses & Services." : "Pequeños Negocios y Servicios.";
        if (p.name === "E-Commerce Pro") bestFor = isEN ? "Online Stores." : "Tiendas Online.";

        return { ...p, bestFor };
    });

    const title = isEN
        ? "Pricing & Plans | ByteWorks - Affordable Monthly Website Subscriptions"
        : "Precios y Planes | ByteWorks - Suscripciones Web Mensuales Accesibles";

    const description = isEN
        ? "Find the perfect website plan for your business. Our monthly subscriptions include web design, hosting, maintenance, and support, all with transparent pricing."
        : "Encuentra el plan web perfecto para tu negocio. Nuestras suscripciones mensuales incluyen diseño, hosting, mantenimiento y soporte, todo con precios transparentes.";

    return (
        <Layout lang={lang} title={title} description={description}>
            <section className="px-4 max-w-[960px] mx-auto py-16 md:py-24">
                <header className="text-center space-y-3">
                    <h1 className="hero-animate text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-text-primary font-heading">
                        {isEN ? "Plans" : "Planes"}
                    </h1>
                    <p className="hero-animate-delay-1 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {isEN
                            ? "Clear pricing with maintenance included. Bilingual structure by default."
                            : "Precios claros con mantenimiento incluido. Estructura bilingüe por defecto."}
                    </p>
                </header>

                <StaggerReveal className="grid md:grid-cols-2 gap-8 mt-10">
                    {extendedPlans.map((p) => (
                        <article
                            key={p.name}
                            className={`card-hover relative h-full rounded-xl p-6 flex flex-col bg-white dark:bg-background-dark/50 ${p.name === "Pro" ? "border-2 border-primary" : "border border-gray-200 dark:border-gray-700"}`}
                        >
                            {p.name === "Pro" && (
                                <p className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-xs font-medium tracking-[0.015em] rounded-full bg-secondary px-3 py-1 text-center">
                                    {isEN ? "Most Popular" : "Más Popular"}
                                </p>
                            )}
                            <div className="space-y-2">
                                <h2 className={`flex items-center gap-3 text-2xl md:text-3xl font-extrabold tracking-[-0.025em] font-heading ${p.name === "Pro" ? "text-primary" : "text-gray-900 dark:text-text-primary"}`}>
                                    <PlanIcon name={p.name} />
                                    {p.name}
                                </h2>
                                <div className="flex items-center gap-2">
                                    <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-text-primary">
                                        {p.price}
                                    </p>
                                    <span className="inline-block text-[11px] md:text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">
                                        {p.yearly}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{p.bestFor}</p>
                            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
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
                                    to={isEN ? "/en/contact" : "/es/contacto"}
                                    className="btn-hover w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
                                >
                                    {isEN ? "Request a Quote" : "Solicitar Cotización"}
                                </Link>
                            </div>
                        </article>
                    ))}
                </StaggerReveal>

                <div className="mt-10 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                        aria-expanded={expanded}
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded
                            ? (isEN ? "Hide comparison" : "Ocultar comparación")
                            : (isEN ? "Compare plans" : "Comparar planes")}
                    </button>
                </div>

                {expanded && (
                    <section id="plan-comparison" className="mt-16 animate-slide-down">
                        <header className="text-center space-y-2 mb-8">
                            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900 dark:text-text-primary">
                                {isEN ? "Compare plans at a glance" : "Comparar planes de un vistazo"}
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                                {isEN
                                    ? "Key differences in scope, monthly care, and SEO focus so you can pick the right fit."
                                    : "Diferencias clave en alcance, cuidado mensual y enfoque SEO para elegir el adecuado."}
                            </p>
                        </header>

                        <div className="hidden md:block">
                            <div className="overflow-x-auto">
                                <table className="w-full md:min-w-[720px] border-collapse text-sm text-left bg-white dark:bg-background-dark/60 rounded-xl shadow-sm">
                                    <thead>
                                        <tr className="bg-background-light dark:bg-background-dark/80 text-gray-900 dark:text-text-primary">
                                            <th scope="col" className="px-4 py-3 font-semibold">
                                                {isEN ? "What you get" : "Qué obtienes"}
                                            </th>
                                            {extendedPlans.map((p) => (
                                                <th key={p.name} scope="col" className="px-4 py-3 font-semibold text-center">
                                                    {p.name}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <th scope="row" className="px-4 py-3 font-medium text-gray-700 dark:text-gray-200">
                                                {isEN ? "Best for" : "Ideal para"}
                                            </th>
                                            {extendedPlans.map((p) => (
                                                <td key={p.name} className="px-4 py-3 text-center text-gray-600 dark:text-gray-300">
                                                    {p.bestFor}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th scope="row" className="px-4 py-3 font-medium text-gray-700 dark:text-gray-200">
                                                {isEN ? "Pages included" : "Páginas incluidas"}
                                            </th>
                                            {extendedPlans.map((p) => (
                                                <td key={p.name} className="px-4 py-3 text-center text-gray-600 dark:text-gray-300">
                                                    {(planMeta[p.name] || planMeta["Start"]).pages}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th scope="row" className="px-4 py-3 font-medium text-gray-700 dark:text-gray-200">
                                                {isEN ? "Monthly updates" : "Actualizaciones mensuales"}
                                            </th>
                                            {extendedPlans.map((p) => (
                                                <td key={p.name} className="px-4 py-3 text-center text-gray-600 dark:text-gray-300">
                                                    {(planMeta[p.name] || planMeta["Start"]).updates}
                                                </td>
                                            ))}
                                        </tr>
                                        {/* Simplified for brevity (SEO, Automation) similar pattern */}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="md:hidden space-y-4">
                            {extendedPlans.map((p) => (
                                <article key={p.name} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/60 p-4 shadow-sm">
                                    <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-text-primary">
                                        {p.name}
                                    </h3>
                                    <dl className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <div>
                                            <dt className="font-medium text-gray-900 dark:text-text-primary">
                                                {isEN ? "Best for" : "Ideal para"}
                                            </dt>
                                            <dd>{p.bestFor}</dd>
                                        </div>
                                        {/* More fields */}
                                    </dl>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                <ScrollReveal className="mt-16">
                    <AddOns lang={lang} id="addons" />
                </ScrollReveal>
            </section>
        </Layout>
    );
};
