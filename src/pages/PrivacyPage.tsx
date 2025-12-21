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

                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "Data Retention & Deletion" : "Retención y Eliminación de Datos"}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>{lang === 'en' ? "Active Accounts:" : "Cuentas Activas:"}</strong> {lang === 'en'
                                    ? "Your data is retained as long as your subscription remains active. We maintain regular backups to ensure service continuity."
                                    : "Tus datos se retienen mientras tu suscripción permanezca activa. Mantenemos copias de seguridad regulares para asegurar la continuidad del servicio."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "After Cancellation:" : "Después de la Cancelación:"}</strong> {lang === 'en'
                                    ? "Upon subscription cancellation, your website data is retained for 30 days to allow for potential reactivation. After this period, data is permanently deleted from our active systems."
                                    : "Al cancelar la suscripción, los datos de tu sitio web se retienen por 30 días para permitir una posible reactivación. Después de este período, los datos se eliminan permanentemente de nuestros sistemas activos."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Data Export:" : "Exportación de Datos:"}</strong> {lang === 'en'
                                    ? "You may request an export of your content (text, images, customer data) at any time during an active subscription by contacting our support team."
                                    : "Puedes solicitar una exportación de tu contenido (texto, imágenes, datos de clientes) en cualquier momento durante una suscripción activa contactando a nuestro equipo de soporte."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Deletion Requests:" : "Solicitudes de Eliminación:"}</strong> {lang === 'en'
                                    ? "You may request immediate deletion of your data by contacting us. We will process deletion requests within 14 business days, subject to legal retention requirements."
                                    : "Puedes solicitar la eliminación inmediata de tus datos contactándonos. Procesaremos las solicitudes de eliminación dentro de 14 días hábiles, sujeto a requisitos legales de retención."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Backup Retention:" : "Retención de Respaldos:"}</strong> {lang === 'en'
                                    ? "Backup copies may be retained for up to 90 days for disaster recovery purposes. After this period, all backup data is permanently purged."
                                    : "Las copias de respaldo pueden retenerse hasta 90 días para propósitos de recuperación ante desastres. Después de este período, todos los datos de respaldo se eliminan permanentemente."}
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </Layout>
    );
};
