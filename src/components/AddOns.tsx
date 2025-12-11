import React from 'react';

interface AddOnsProps {
    lang?: "en" | "es";
    id?: string;
    summaryOnly?: boolean;
}

export const AddOns: React.FC<AddOnsProps> = ({
    lang = "es",
    id = "addons",
    summaryOnly = false,
}) => {
    const isEN = lang === "en";

    const items = [
        {
            key: "appointments",
            titleEN: "Appointments & Booking",
            titleES: "Citas y Reservas",
            priceEN: "+$20/mo",
            priceES: "+$20/mes",
            descriptionEN: "Smart booking system to fill your calendar.",
            descriptionES: "Sistema inteligente de reservas para llenar tu calendario.",
            bulletsEN: [
                "Single calendar, service configuration",
                "Automatic buffer time between appointments",
                "Up to 200 bookings/mo included",
            ],
            bulletsES: [
                "Un solo calendario, configuración de servicios",
                "Tiempo de margen automático entre citas",
                "Hasta 200 reservas/mes incluidas",
            ],
            footEN: "",
            footES: "",
        },
        {
            key: "blog",
            titleEN: "Blog & News Section",
            titleES: "Sección de Blog y Noticias",
            priceEN: "+$25/mo",
            priceES: "+$25/mes",
            descriptionEN: "Boost your authority and SEO with a dynamic news section.",
            descriptionES: "Mejora tu autoridad y SEO con una sección dinámica de noticias.",
            bulletsEN: [
                "Unlimited articles (client-provided content)",
                "Up to 10,000 monthly visits included",
                "SEO-ready routes",
            ],
            bulletsES: [
                "Artículos ilimitados (contenido provisto por cliente)",
                "Hasta 10,000 visitas mensuales incluidas",
                "Rutas listas para SEO",
            ],
            footEN: "",
            footES: "",
        },
        {
            key: "business-center",
            titleEN: "Business Center",
            titleES: "Centro de Negocios",
            priceEN: "Starts at +$35/mo",
            priceES: "Desde +$35/mes",
            descriptionEN: "All-in-one CRM, Quoting, and Invoicing tool.",
            descriptionES: "Herramienta todo-en-uno de CRM, Cotizaciones y Facturación.",
            bulletsEN: [
                "Client database",
                "PDF Quote generator",
                "Invoice tracking",
            ],
            bulletsES: [
                "Base de datos de clientes",
                "Generador de Cotizaciones PDF",
                "Seguimiento de facturas",
            ],
            footEN: "Administrative tool only. Not a substitute for tax/accounting software.",
            footES: "Herramienta administrativa únicamente. No sustituye software contable/fiscal.",
        },
        {
            key: "branding",
            titleEN: "Basic Branding Package",
            titleES: "Paquete Básico de Branding",
            priceEN: "$120 (One-Time)",
            priceES: "$120 (Pago Único)",
            descriptionEN: "Give your business a strong visual identity.",
            descriptionES: "Dale a tu negocio una identidad visual sólida.",
            bulletsEN: [
                "Logo Design (2 proposals, 2 revisions)",
                "Official Color Palette",
                "Typography selection",
                "Final files (SVG, PNG, JPG)",
            ],
            bulletsES: [
                "Diseño de Logo (2 propuestas, 2 revisiones)",
                "Paleta de Colores Oficial",
                "Selección de tipografía",
                "Archivos finales (SVG, PNG, JPG)",
            ],
            footEN: "Single payment. No monthly fees.",
            footES: "Pago único. Sin tarifas mensuales.",
        },
    ];

    return (
        <section id={id} className="mt-20">
            <header className="text-center mb-8 space-y-2">
                <h2 className="hero-animate text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-text-primary font-heading">
                    {isEN ? "Optional Add-Ons" : "Add-ons opcionales"}
                </h2>
                <p className="hero-animate-delay-1 text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    {isEN
                        ? "Activate only what you need. Every add-on integrates smoothly without affecting your design or core plan."
                        : "Activa solo lo que necesites. Cada add-on se integra sin afectar tu diseño ni tu plan base."}
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {items.map((it) => {
                    const title = isEN ? it.titleEN : it.titleES;
                    const price = isEN ? it.priceEN : it.priceES;
                    const description = isEN ? it.descriptionEN : it.descriptionES;
                    const bullets = isEN ? it.bulletsEN : it.bulletsES;
                    const foot = isEN ? it.footEN : it.footES;

                    return (
                        <article key={it.key} className="card-hover border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col bg-white dark:bg-background-dark/50">
                            <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-text-primary font-heading">
                                {title}
                            </h3>
                            <div className="mt-1">
                                <span className="inline-block text-[11px] md:text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">
                                    {price}
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                {description}
                            </p>

                            {!summaryOnly && (
                                <>
                                    <div className="mt-3">
                                        <p className="font-medium text-sm md:text-base">
                                            {isEN ? "Includes:" : "Incluye:"}
                                        </p>
                                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                                            {bullets.map((b, idx) => (
                                                <li key={idx}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {foot && (
                                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                            {foot}
                                        </p>
                                    )}
                                </>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
