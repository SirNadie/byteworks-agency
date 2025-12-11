import React from 'react';

import { Layout } from '../layouts/Layout';
import { FAQAccordion } from '../components/FAQAccordion';
import { ScrollReveal } from '../components/ScrollReveal';

interface FAQPageProps {
    lang: 'en' | 'es';
}

const faqsEN = [
    { q: "How fast can you deliver my website?", a: "Small sites can go live in 7 to 10 business days..." },
    // ... Truncated for brevity, I should paste the full content if possible or generic
    // I will paste the content from the previous artifacts to be accurate.
    { q: "How fast can you deliver my website?", a: "Small sites can go live in 7 to 10 business days once we receive all content. Larger scopes typically take 2 to 4 weeks." },
    { q: "What do you need from me to start?", a: "Logo, colors, page outline, basic copy, and images. For e-commerce: product names, prices, and photos." },
    { q: "What does the monthly update include?", a: "Text or image edits, layout tweaks, SEO adjustments, or fixes. Work amount depends on your plan." },
    { q: "What is NOT included in the monthly update?", a: "Full redesigns, new pages, new features, or custom integrations. These are upgrades or one-time tasks." },
    { q: "Do you write the copy?", a: "Yes. We improve your copy. Full copywriting is available as an add-on." },
    { q: "Do you design logos or brand kits?", a: "Yes. Our Branding Package includes logo, colors, and social assets." },
    { q: "Do you work with a CMS?", a: "We use a modern stack. Simple sites don't need a CMS; updates are included. Blogs use a lightweight dashboard." },
    { q: "Is bilingual included?", a: "Yes. English and Spanish included by default." },
    { q: "How does hosting work?", a: "Hosting, SSL, and backups are included." },
    { q: "Do I own my domain and content?", a: "Yes. You own the domain and all content." },
    { q: "Can you use my existing domain?", a: "Yes. We connect your existing domain." },
    { q: "Do you create email accounts?", a: "We guide you or set up forwarding. Business email can be added separately." },
    { q: "What about SEO?", a: "Sites include structure, sitemap, metadata, and fast performance. Advanced SEO is an add-on." },
    { q: "Do you set up business profiles?", a: "Yes. Included in the Advanced SEO add-on." },
    { q: "Are analytics included?", a: "Yes. Basic analytics are integrated." },
    { q: "Is e-commerce included?", a: "Yes. Via E-Commerce Pro or the Mini Store add-on." },
    { q: "Product limits?", a: "Mini Store: 10 products. E-Commerce Pro: 20 products. Extra blocks available." },
    { q: "How are payments handled?", a: "Manual checkout for local orders. We can guide you on gateways." },
    { q: "Can I cancel anytime? What do I get?", a: "Yes. You keep domain and content. We provide a static backup. Hosting stops." },
    { q: "Will my site be fast and mobile-friendly?", a: "Yes. Mobile-first and optimized for speed." },
    { q: "Accessibility?", a: "We follow best practices for usability." },
    { q: "Backups and security?", a: "Daily backups, SSL, and security included." },
    { q: "Support hours and response times?", a: "Support via social channels and email. Response within 24 hours." },
    { q: "How do we communicate?", a: "WhatsApp, Instagram, or email. We share previews for quick review." },
    { q: "Can you migrate my current site?", a: "Yes. We rebuild or migrate your site. Complex migrations may need a quote." },
];

const faqsES = [
    {
        q: "¿Qué tan rápido pueden entregar mi sitio web?",
        a: "Los sitios pequeños pueden lanzarse en 7 a 10 días hábiles una vez que recibimos todo el contenido. Alcances más grandes suelen tomar 2 a 4 semanas.",
    },
    {
        q: "¿Qué necesitan de mi parte para comenzar?",
        a: "Logo y colores de marca (si existen), esquema de páginas o secciones clave, textos básicos, imágenes o placeholders y un email/teléfono de contacto. Para e-commerce también necesitamos nombres, precios y fotos de productos.",
    },
    {
        q: "¿Qué incluye la actualización mensual?",
        a: "Puedes solicitar cambios de texto o contenido, nuevas imágenes, pequeños ajustes de layout, mejoras SEO menores, actualización de servicios o correcciones en secciones existentes. El alcance depende de tu plan.",
    },
    {
        q: "¿Qué NO incluye la actualización mensual?",
        a: "Rediseños completos o páginas nuevas, funcionalidades grandes, expansiones masivas de catálogo, integraciones/automatizaciones a medida o branding nuevo. Eso se maneja como upgrade o tarea puntual.",
    },
    {
        q: "¿Escriben el copy?",
        a: "Sí, podemos dar forma o mejorar el copy con la información que compartas. La redacción completa está incluida en el plan o como add-on.",
    },
    {
        q: "¿Diseñan logos o brand kits?",
        a: "Sí, ofrecemos el Paquete Básico de Branding con logo, colores, tipografía y assets para redes.",
    },
    {
        q: "¿Trabajan con un CMS?",
        a: "Usamos una stack moderna y de alto rendimiento con frameworks de última generación. En sitios simples no hace falta CMS porque las actualizaciones están cubiertas en tu plan. Para blogs o catálogos usamos un dashboard interno ligero o contenido estructurado.",
    },
    {
        q: "¿El sitio es bilingüe?",
        a: "Sí, todos los planes incluyen Inglés + Español por defecto, con rutas listas para SEO.",
    },
    {
        q: "¿Cómo funciona el hosting?",
        a: "Hosting, SSL y backups se gestionan por completo y están incluidos en tu plan mensual.",
    },
    {
        q: "¿Soy dueño de mi dominio y contenido?",
        a: "Por supuesto. El dominio puede estar a tu nombre y todo el contenido es tuyo.",
    },
    {
        q: "¿Pueden usar mi dominio actual?",
        a: "Sí, conectamos cualquier dominio que ya tengas.",
    },
    {
        q: "¿Crean cuentas de correo?",
        a: "Podemos guiarte o configurar reenvíos. Correos corporativos (ej. Google Workspace) se agregan por separado si los necesitas.",
    },
    {
        q: "¿Qué hay del SEO?",
        a: "Todos los sitios incluyen estructura limpia, sitemap, páginas indexables, metadatos/Open Graph y rendimiento rápido. El add-on de SEO Avanzado y Posicionamiento Local está disponible si quieres más.",
    },
    {
        q: "¿Configuran perfiles de negocio?",
        a: "Sí, viene incluido en el add-on de SEO Avanzado y Posicionamiento Local (Google Business Profile, listados locales, etc.).",
    },
    {
        q: "¿Incluyen analíticas?",
        a: "Sí, integramos analíticas básicas en tu sitio o dashboard.",
    },
    {
        q: "¿Incluyen e-commerce?",
        a: "Sí, mediante el plan E-Commerce Pro o el add-on de Mini Tienda Online.",
    },
    {
        q: "¿Límites de productos?",
        a: "Mini tienda online: hasta 10 productos. E-Commerce Pro: hasta 20 productos. Puedes sumar bloques extra de 20 como add-on y, si el catálogo es más grande, ver un plan a medida.",
    },
    {
        q: "¿Cómo manejan los pagos?",
        a: "Soportamos checkout manual para pedidos locales y podemos guiarte en opciones de pasarela de pago si lo necesitas.",
    },
    {
        q: "¿Puedo cancelar cuando quiera? ¿Qué recibo?",
        a: "Sí, conservas tu dominio y contenido, y podemos entregar un backup estático si lo solicitas. El hosting y las actualizaciones se detienen después de cancelar.",
    },
    {
        q: "¿Mi sitio será rápido y mobile-friendly?",
        a: "Totalmente. El diseño mobile-first y la optimización de rendimiento son la base de cada proyecto.",
    },
    {
        q: "¿Accesibilidad?",
        a: "Seguimos buenas prácticas de accesibilidad para que el sitio sea claro y usable para todos.",
    },
    {
        q: "¿Backups y seguridad?",
        a: "Backups automáticos, SSL y prácticas modernas de seguridad están incluidos en todos los planes.",
    },
    {
        q: "¿Horarios y tiempos de respuesta?",
        a: "Atendemos por nuestras redes (WhatsApp, Instagram) y email, con respuestas habituales dentro de las 24 horas.",
    },
    {
        q: "¿Cómo nos comunicamos?",
        a: "Comunicación ágil por WhatsApp, Instagram o email. Tú eliges. También compartimos previews tempranos para que revises rápido.",
    },
    {
        q: "¿Pueden migrar mi sitio actual?",
        a: "Sí, podemos reconstruir o migrar tu sitio a nuestro sistema moderno. Si la migración es compleja, podría requerir una cotización a medida.",
    },
];

export const FAQPage: React.FC<FAQPageProps> = ({ lang }) => {
    const isEN = lang === 'en';
    const faqs = isEN ? faqsEN : faqsES;

    const title = isEN
        ? "Frequently Asked Questions | ByteWorks Website Services"
        : "Preguntas Frecuentes | ByteWorks Servicios Web";
    const description = isEN
        ? "Questions about our subscriptions? Find answers on process, pricing, SEO, and plans."
        : "Preguntas sobre nuestras suscripciones? Encuentra respuestas sobre el proceso, precios, SEO y planes.";

    return (
        <Layout lang={lang} title={title} description={description}>
            <section className="px-4 max-w-[960px] mx-auto py-20">
                <header className="text-center space-y-3 mb-8">
                    <h1 className="hero-animate text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-text-primary font-heading">
                        {isEN ? "FAQ" : "Preguntas Frecuentes"}
                    </h1>
                    <p className="hero-animate-delay-1 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {isEN ? "Answers to common questions." : "Respuestas a preguntas frecuentes."}
                    </p>
                </header>

                <ScrollReveal className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 mb-10 bg-white dark:bg-background-dark/50">
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary font-heading">
                        {isEN ? "What ByteWorks does" : "Qué hace ByteWorks"}
                    </h2>
                    <div className="mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                        {isEN ? (
                            <p>
                                Professional websites shouldn't be complicated. We handle design, hosting, security, and updates. You focus on your business.
                            </p>
                        ) : (
                            <>
                                <p>
                                    En ByteWorks creemos que tener un sitio profesional no debería ser complicado ni caro. Nos encargamos de todo. Diseño, desarrollo, hosting, seguridad, actualizaciones y soporte para que puedas enfocarte en tu negocio.
                                </p>
                                <p>
                                    Cada sitio que construimos es rápido, moderno, mobile-friendly y está diseñado para generar confianza desde el primer contacto.
                                </p>
                            </>
                        )}
                    </div>

                    <div className="mt-3">
                        <div className="font-medium mb-1 text-gray-900 dark:text-text-primary">
                            {isEN ? "What's included:" : "Qué incluye:"}
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            {isEN ? (
                                <>
                                    <li>Domain + hosting (no extra payments)</li>
                                    <li>Clean, professional, functional design</li>
                                    <li>Social links and contact form</li>
                                    <li>Basic SEO to appear in search</li>
                                    <li>Monthly maintenance and real support</li>
                                </>
                            ) : (
                                <>
                                    <li>Dominio + hosting (sin pagos extra)</li>
                                    <li>Diseño limpio, profesional y funcional</li>
                                    <li>Enlaces a redes y formulario de contacto</li>
                                    <li>SEO básico para aparecer en buscadores</li>
                                    <li>Mantenimiento mensual y soporte real</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {isEN
                            ? "In short: You run your business. We take care of the digital side."
                            : "En resumen: tú manejas tu negocio. Nosotros cuidamos la parte digital."
                        }
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <FAQAccordion faqs={faqs} lang={lang} />
                </ScrollReveal>
            </section>
        </Layout>
    );
};
