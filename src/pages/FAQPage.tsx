import React from 'react';

import { Layout } from '../layouts/Layout';
import { FAQAccordion } from '../components/FAQAccordion';
import { ScrollReveal } from '../components/ScrollReveal';

interface FAQPageProps {
    lang: 'en' | 'es';
}

type FAQCategory = {
    title: string;
    items: {
        q: string;
        a: React.ReactNode;
    }[];
};

const faqsEN: FAQCategory[] = [
    {
        title: "General & Timeline",
        items: [
            {
                q: "How fast can you deliver my website?",
                a: (
                    <>
                        <p className="mb-2"><strong>Start Plan:</strong> We typically launch in 7 to 10 business days after receiving your content.</p>
                        <p><strong>Pro & E-Commerce:</strong> These take 2 to 4 weeks, depending on the complexity and the speed of your feedback during the design phase.</p>
                    </>
                )
            },
            {
                q: "Do you write the text for the website?",
                a: "No, you are responsible for providing the text and images. However, if you don't have images, we can use high-quality royalty-free stock photos to get you started."
            },
            {
                q: "Is the website bilingual?",
                a: "Yes. All our sites come structured for English and Spanish by default. We can hide one language if you only need one initially, but the capability is always included."
            }
        ]
    },
    {
        title: "Plans, Limits & Billing",
        items: [
            {
                q: "Do I have to sign a long-term contract?",
                a: "No. Our subscriptions are month-to-month. You can cancel at any time. If you pay annually, you get a discount, but the commitment is for that year."
            },
            {
                q: "What happens if I exceed the monthly limits?",
                a: "Our plans include generous limits (500 emails, 200 bookings, or 10k visits per month). If your business scales beyond this, we will apply a $15 USD/month Infrastructure Fee to your bill to cover the extra server resources and ensure your service stays uninterrupted."
            },
            {
                q: "What does \"Monthly Updates\" include? (Pro Plan)",
                a: "It covers small maintenance tasks like changing a phone number, updating a price, swapping an image, or editing a text paragraph. It does not cover structural changes, adding new pages, or redesigning the layout."
            }
        ]
    },
    {
        title: "Technical & Support",
        items: [
            {
                q: "Do you provide professional email accounts (e.g., info@mydomain.com)?",
                a: "Our service focuses on high-performance web hosting. We do not host email inboxes directly (to prevent spam and security issues). We recommend using professional services like Google Workspace or Zoho Mail. We will happily help you connect your domain to these providers at no extra cost during setup."
            },
            {
                q: "Will my website appear on Google immediately?",
                a: "We build every site with an SEO-friendly structure (clean code, mobile optimization, fast loading) and submit it to Google upon launch. However, ranking on the first page depends on your content strategy. For faster results, we recommend our Advanced SEO Setup service."
            },
            {
                q: "How do I request changes or support?",
                a: "All support requests and content updates must be sent via email to our support team. We typically respond within 24 business hours. We do not accept support requests via WhatsApp to ensure no details are lost."
            }
        ]
    },
    {
        title: "E-Commerce & Tools",
        items: [
            {
                q: "Do you handle online payments (Credit Cards)?",
                a: "By default, the E-Commerce plan uses a \"Manual Checkout\" flow (Cash on Delivery, Bank Transfer, or arranging payment via WhatsApp). If you need automatic processing (Stripe, PayPal, WiPay), contact us for a custom quote as this requires specific banking integrations."
            },
            {
                q: "Does the Invoicing Tool calculate my taxes?",
                a: "The Business Center add-on is an administrative tool to generate PDF invoices and track payments. It is not accounting software. You are responsible for configuring the correct tax rate (%) according to your local laws."
            },
            {
                q: "How does the Booking System work?",
                a: "It is a \"Closed System\". Your clients book slots based on the availability you set in our dashboard. It sends confirmation emails automatically. Please note that it does not sync two-way with personal external calendars (like Google Calendar)."
            }
        ]
    },
    {
        title: "Ownership & Cancellation",
        items: [
            {
                q: "Who owns the domain and the content?",
                a: "You do. You own your domain name (e.g., yourbusiness.com) and all the text/images you provide. You can take these with you at any time."
            },
            {
                q: "Who owns the website code?",
                a: "ByteWorks operates on a SaaS (Subscription) Model. We own the source code, the infrastructure, and the dynamic software (like the dashboard, booking system, and invoicing tool). You are \"renting\" the technology while subscribed."
            },
            {
                q: "Can I take the website to another host if I cancel?",
                a: (
                    <>
                        <p className="mb-2">Yes, but with limitations. Since the technology is ours, you must pay a <strong>Buyout Fee of $750 USD</strong>.</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>What you get:</strong> A static export of the design (HTML/CSS/Images) that looks like your site.</li>
                            <li><strong>What you lose:</strong> All dynamic features (Forms, Invoicing, Bookings, CMS) will stop working because they run on our exclusive servers. You will need to hire a developer to rebuild those functions on your new host.</li>
                        </ul>
                    </>
                )
            }
        ]
    }
];

const faqsES: FAQCategory[] = [
    {
        title: "General y Cronograma",
        items: [
            {
                q: "¿Qué tan rápido pueden entregar mi sitio web?",
                a: (
                    <>
                        <p className="mb-2"><strong>Plan Start:</strong> Normalmente lanzamos en 7 a 10 días hábiles después de recibir tu contenido.</p>
                        <p><strong>Pro y E-Commerce:</strong> Toman de 2 a 4 semanas, dependiendo de la complejidad y la velocidad de tu feedback durante la fase de diseño.</p>
                    </>
                )
            },
            {
                q: "¿Escriben el texto para el sitio web?",
                a: "No, tú eres responsable de proporcionar el texto y las imágenes. Sin embargo, si no tienes imágenes, podemos usar fotos de stock de alta calidad libres de derechos para empezar."
            },
            {
                q: "¿Es bilingüe el sitio web?",
                a: "Sí. Todos nuestros sitios vienen estructurados para Inglés y Español por defecto. Podemos ocultar un idioma si solo necesitas uno inicialmente, pero la capacidad siempre está incluida."
            }
        ]
    },
    {
        title: "Planes, Límites y Facturación",
        items: [
            {
                q: "¿Debo firmar un contrato a largo plazo?",
                a: "No. Nuestras suscripciones son mes a mes. Puedes cancelar en cualquier momento. Si pagas anualmente, obtienes un descuento, pero el compromiso es por ese año."
            },
            {
                q: "¿Qué pasa si excedo los límites mensuales?",
                a: "Nuestros planes incluyen límites generosos (500 correos, 200 reservas o 10k visitas por mes). Si tu negocio escala más allá de esto, aplicaremos una Tarifa de Infraestructura de $15 USD/mes a tu factura para cubrir los recursos extra del servidor y asegurar que tu servicio no se interrumpa."
            },
            {
                q: "¿Qué incluyen las \"Actualizaciones Mensuales\"? (Plan Pro)",
                a: "Cubre tareas pequeñas de mantenimiento como cambiar un número de teléfono, actualizar un precio, cambiar una imagen o editar un párrafo de texto. No cubre cambios estructurales, agregar nuevas páginas o rediseñar el layout."
            }
        ]
    },
    {
        title: "Técnico y Soporte",
        items: [
            {
                q: "¿Proveen cuentas de correo profesional (ej: info@midominio.com)?",
                a: "Nuestro servicio se enfoca en hosting web de alto rendimiento. No alojamos bandejas de correo directamente (para prevenir spam y problemas de seguridad). Recomendamos usar servicios profesionales como Google Workspace o Zoho Mail. Con gusto te ayudaremos a conectar tu dominio a estos proveedores sin costo extra durante la configuración."
            },
            {
                q: "¿Mi sitio aparecerá en Google inmediatamente?",
                a: "Construimos cada sitio con una estructura amigable para SEO (código limpio, optimización móvil, carga rápida) y lo enviamos a Google al lanzar. Sin embargo, rankear en la primera página depende de tu estrategia de contenido. Para resultados más rápidos, recomendamos nuestro servicio de Configuración SEO Avanzada."
            },
            {
                q: "¿Cómo solicito cambios o soporte?",
                a: "Todas las solicitudes de soporte y actualizaciones de contenido deben enviarse por correo a nuestro equipo de soporte. Normalmente respondemos dentro de 24 horas hábiles. No aceptamos solicitudes de soporte por WhatsApp para asegurar que no se pierdan detalles."
            }
        ]
    },
    {
        title: "E-Commerce y Herramientas",
        items: [
            {
                q: "¿Manejan pagos en línea (Tarjetas de Crédito)?",
                a: "Por defecto, el plan E-Commerce usa un flujo de \"Checkout Manual\" (Pago Contra Entrega, Transferencia Bancaria o coordinar pago por WhatsApp). Si necesitas procesamiento automático (Stripe, PayPal, WiPay), contáctanos para una cotización personalizada ya que esto requiere integraciones bancarias específicas."
            },
            {
                q: "¿La Herramienta de Facturación calcula mis impuestos?",
                a: "El add-on Business Center es una herramienta administrativa para generar facturas PDF y rastrear pagos. No es un software contable. Eres responsable de configurar la tasa de impuestos correcta (%) de acuerdo a tus leyes locales."
            },
            {
                q: "¿Cómo funciona el Sistema de Reservas?",
                a: "Es un \"Sistema Cerrado\". Tus clientes reservan espacios basados en la disponibilidad que configures en nuestro dashboard. Envía correos de confirmación automáticamente. Ten en cuenta que no se sincroniza en dos vías con calendarios externos personales (como Google Calendar)."
            }
        ]
    },
    {
        title: "Propiedad y Cancelación",
        items: [
            {
                q: "¿Quién es dueño del dominio y el contenido?",
                a: "Tú. Eres dueño de tu nombre de dominio (ej: tu-negocio.com) y todo el texto/imágenes que proveas. Puedes llevártelos en cualquier momento."
            },
            {
                q: "¿Quién es dueño del código del sitio web?",
                a: "ByteWorks opera bajo un Modelo SaaS (Suscripción). Nosotros somos dueños del código fuente, la infraestructura y el software dinámico (como el dashboard, sistema de reservas y herramienta de facturación). Estás \"rentando\" la tecnología mientras estás suscrito."
            },
            {
                q: "¿Puedo llevarme el sitio a otro host si cancelo?",
                a: (
                    <>
                        <p className="mb-2">Sí, pero con limitaciones. Dado que la tecnología es nuestra, debes pagar una <strong>Tarifa de Compra (Buyout Fee) de $750 USD</strong>.</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Lo que obtienes:</strong> Una exportación estática del diseño (HTML/CSS/Imágenes) que se ve como tu sitio.</li>
                            <li><strong>Lo que pierdes:</strong> Todas las funciones dinámicas (Formularios, Facturación, Reservas, CMS) dejarán de funcionar porque corren en nuestros servidores exclusivos. Necesitarás contratar a un desarrollador para reconstruir esas funciones en tu nuevo host.</li>
                        </ul>
                    </>
                )
            }
        ]
    }
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
                        {isEN ? "Answers to common questions about our services." : "Respuestas a preguntas frecuentes sobre nuestros servicios."}
                    </p>
                </header>

                <ScrollReveal className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 mb-16 bg-white dark:bg-background-dark/50">
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

                <div>
                    {faqs.map((cat, idx) => (
                        <ScrollReveal key={idx} delay={idx * 100} className="mb-12">
                            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-text-primary mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                                {cat.title}
                            </h2>
                            <FAQAccordion faqs={cat.items} lang={lang} />
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </Layout>
    );
};
