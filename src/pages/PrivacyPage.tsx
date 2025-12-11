import React from 'react';
import { Layout } from '../layouts/Layout';

interface PrivacyPageProps {
    lang: 'en' | 'es';
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ lang }) => {
    return (
        <Layout lang={lang} title="Privacy Policy">
            <section className="px-6 md:px-10 lg:px-16 max-w-5xl mx-auto py-14 md:py-20 space-y-8">
                <h1 className="text-3xl font-bold font-heading mb-6">{lang === 'en' ? "Privacy Policy" : "Política de Privacidad"}</h1>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "Data Processing & Third-Party Information" : "Procesamiento de Datos e Información de Terceros"}</h2>
                        <p className="mb-2">
                            {lang === 'en'
                                ? "By using our Business Center, E-Commerce, or Booking modules, you may store personal information of your own clients (Third-Party Data) on our infrastructure."
                                : "Al utilizar nuestros módulos de Centro de Negocios, Comercio Electrónico o Reservas, es posible que almacenes información personal de tus propios clientes (Datos de Terceros) en nuestra infraestructura."}
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <strong>{lang === 'en' ? "Our Role:" : "Nuestro Rol:"}</strong> {lang === 'en' ? "ByteWorks acts as a Data Processor. We store this data solely for the purpose of enabling your business operations." : "ByteWorks actúa como Encargado del Tratamiento (Data Processor). Almacenamos estos datos únicamente con el propósito de permitir tus operaciones comerciales."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Confidentiality:" : "Confidencialidad:"}</strong> {lang === 'en' ? "We do NOT share, sell, or use your clients' database for our own marketing purposes or for any third parties." : "NO compartimos, vendemos ni utilizamos la base de datos de tus clientes para nuestros propios fines de marketing ni para terceros."}
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "Infrastructure & Sub-processors" : "Infraestructura y Sub-procesadores"}</h2>
                        <p className="mb-2">
                            {lang === 'en'
                                ? "To ensure high availability and security, our services operate on enterprise-grade cloud infrastructure. By using our platform, you acknowledge that data may be processed by:"
                                : "Para garantizar alta disponibilidad y seguridad, nuestros servicios operan en infraestructura en la nube de nivel empresarial. Al utilizar nuestra plataforma, reconoces que los datos pueden ser procesados por:"}
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-2">
                            <li>
                                <strong>{lang === 'en' ? "Cloud Hosting & Computing Providers:" : "Proveedores de Hosting y Computación en la Nube:"}</strong> {lang === 'en' ? "To securely host the application and serverless functions." : "Para alojar de forma segura la aplicación y las funciones serverless."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Database Management Services:" : "Servicios de Gestión de Bases de Datos:"}</strong> {lang === 'en' ? "To encrypt and store business and client records." : "Para cifrar y almacenar registros comerciales y de clientes."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Transactional Email Gateways:" : "Pasarelas de Email Transaccional:"}</strong> {lang === 'en' ? "To ensure the delivery of your notifications and invoices." : "Para asegurar la entrega de tus notificaciones y facturas."}
                            </li>
                        </ul>
                        <p>
                            <strong>{lang === 'en' ? "Security Commitment:" : "Compromiso de Seguridad:"}</strong> {lang === 'en'
                                ? "All our infrastructure partners are selected based on strict security standards (SOC2/ISO 27001 compliance) to protect your information."
                                : "Todos nuestros socios de infraestructura son seleccionados en base a estrictos estándares de seguridad (cumplimiento SOC2/ISO 27001) para proteger tu información."}
                        </p>
                    </section>
                </div>
            </section>
        </Layout>
    );
};
