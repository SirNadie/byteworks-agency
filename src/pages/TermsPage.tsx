import React from 'react';
import { Layout } from '../layouts/Layout';

interface TermsPageProps {
    lang: 'en' | 'es';
}

export const TermsPage: React.FC<TermsPageProps> = ({ lang }) => {
    return (
        <Layout lang={lang} title="Terms">
            <section className="px-6 md:px-10 lg:px-16 max-w-5xl mx-auto py-14 md:py-20 space-y-8">
                <h1 className="text-3xl font-bold font-heading mb-6">{lang === 'en' ? "Terms & Conditions" : "Términos y Condiciones"}</h1>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "1. Service Overview & Subscription Model" : "1. Descripción del Servicio y Modelo de Suscripción"}</h2>
                        <p className="mb-2">
                            {lang === 'en' ? "Welcome to ByteWorks Agency. By subscribing to our services, you agree to the following terms:" : "Bienvenido a ByteWorks Agency. Al suscribirte a nuestros servicios, aceptas los siguientes términos:"}
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <strong>{lang === 'en' ? "Subscription Service:" : "Servicio de Suscripción:"}</strong> {lang === 'en'
                                    ? "ByteWorks provides web design, development, and technical maintenance under a monthly or yearly subscription model. The website and its associated services remain active only as long as the subscription is current."
                                    : "ByteWorks proporciona diseño web, desarrollo y mantenimiento técnico bajo un modelo de suscripción mensual o anual. El sitio web y sus servicios asociados permanecen activos solo mientras la suscripción esté vigente."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Payments:" : "Pagos:"}</strong> {lang === 'en'
                                    ? "Subscriptions are billed in advance. Failure to pay the renewal fee within 5 days of the due date will result in the temporary suspension of the website and services."
                                    : "Las suscripciones se facturan por adelantado. La falta de pago de la tarifa de renovación dentro de los 5 días posteriores a la fecha de vencimiento resultará en la suspensión temporal del sitio web y los servicios."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Cancellations:" : "Cancelaciones:"}</strong> {lang === 'en'
                                    ? "You may cancel your subscription at any time. Upon cancellation, the service will remain active until the end of the paid billing cycle, after which the website will be taken offline."
                                    : "Puedes cancelar tu suscripción en cualquier momento. Tras la cancelación, el servicio permanecerá activo hasta el final del ciclo de facturación pagado, después del cual el sitio web será desactivado."}
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "2. Fair Use Policy & Operational Limits" : "2. Política de Uso Justo y Límites Operativos"}</h2>
                        <p className="mb-2">
                            {lang === 'en'
                                ? "To ensure high performance for all clients, our plans include specific monthly resource allocations:"
                                : "Para asegurar un alto rendimiento para todos los clientes, nuestros planes incluyen asignaciones específicas mensuales de recursos:"}
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-2">
                            <li>
                                <strong>{lang === 'en' ? "Email Notifications:" : "Notificaciones por Email:"}</strong> {lang === 'en' ? "Up to 500 emails/month (includes contact forms and order notifications)." : "Hasta 500 emails/mes (incluye formularios de contacto y notificaciones de pedidos)."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Bookings:" : "Reservas:"}</strong> {lang === 'en' ? "Up to 200 appointments/month (for the Booking Add-on)." : "Hasta 200 citas/mes (para el Add-on de Reservas)."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Web Traffic:" : "Tráfico Web:"}</strong> {lang === 'en' ? "Up to 10,000 visits/month (for the Blog Add-on)." : "Hasta 10,000 visitas/mes (para el Add-on de Blog)."}
                            </li>
                        </ul>
                        <p>
                            <strong>{lang === 'en' ? "Overages:" : "Excedentes:"}</strong> {lang === 'en'
                                ? "If your account exceeds these limits, an automatic fee of $15.00 USD/month will apply to cover additional infrastructure costs. ByteWorks reserves the right to pause notifications in cases of extreme abuse or spam."
                                : "Si tu cuenta excede estos límites, se aplicará una tarifa automática de $15.00 USD/mes para cubrir costos adicionales de infraestructura. ByteWorks se reserva el derecho de pausar notificaciones en casos de abuso extremo o spam."}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "3. Service Disclaimers" : "3. Descargos de Responsabilidad del Servicio"}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>{lang === 'en' ? "Business Center (Invoicing):" : "Centro de Negocios (Facturación):"}</strong> {lang === 'en'
                                    ? "This module is provided strictly as an administrative tool. ByteWorks Agency is not responsible for tax calculations, fiscal compliance, or accounting errors. The User is solely responsible for configuring tax rates according to local laws."
                                    : "Este módulo se proporciona estrictamente como una herramienta administrativa. ByteWorks Agency no es responsable de cálculos de impuestos, cumplimiento fiscal o errores contables. El Usuario es el único responsable de configurar las tasas impositivas según las leyes locales."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "E-Commerce:" : "Comercio Electrónico:"}</strong> {lang === 'en'
                                    ? "Unless specified, the store operates on a \"Manual Checkout\" basis. ByteWorks does not process financial transactions nor store credit card data. Disputes regarding products or refunds are solely between the User and their customers."
                                    : "A menos que se especifique, la tienda opera bajo una base de \"Checkout Manual\". ByteWorks no procesa transacciones financieras ni almacena datos de tarjetas de crédito. Las disputas sobre productos o reembolsos son únicamente entre el Usuario y sus clientes."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Booking System:" : "Sistema de Reservas:"}</strong> {lang === 'en'
                                    ? "ByteWorks is not liable for schedule conflicts (\"double-booking\") if the User accepts appointments via other channels without updating the system availability manually."
                                    : "ByteWorks no es responsable de conflictos de horario (\"doble reserva\") si el Usuario acepta citas por otros canales sin actualizar manualmente la disponibilidad del sistema."}
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "4. Cancellation & Buyout Policy" : "4. Política de Cancelación y Compra (Buyout)"}</h2>
                        <p className="mb-2">
                            {lang === 'en'
                                ? "ByteWorks operates under a SaaS (Software as a Service) model. The code, infrastructure, and dynamic features belong to the Agency."
                                : "ByteWorks opera bajo un modelo SaaS (Software as a Service). El código, infraestructura y funcionalidades dinámicas pertenecen a la Agencia."}
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <strong>{lang === 'en' ? "Domain Name:" : "Nombre de Dominio:"}</strong> {lang === 'en' ? "The User retains full ownership of their domain name." : "El Usuario conserva la plena propiedad de su nombre de dominio."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Buyout Option:" : "Opción de Compra:"}</strong> {lang === 'en'
                                    ? "If the User wishes to migrate the website to an external host, a Buyout Fee of $750.00 USD applies. Upon payment, ByteWorks will provide a static export of the frontend design."
                                    : "Si el Usuario desea migrar el sitio web a un host externo, aplica una Tarifa de Compra de $750.00 USD. Tras el pago, ByteWorks proporcionará una exportación estática del diseño frontend."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Limitations:" : "Limitaciones:"}</strong> {lang === 'en'
                                    ? "Proprietary dynamic features (Invoicing, Booking, CMS, Forms) will cease to function upon migration and are not transferable."
                                    : "Las funcionalidades dinámicas propietarias (Facturación, Reservas, CMS, Formularios) dejarán de funcionar tras la migración y no son transferibles."}
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">{lang === 'en' ? "5. Intellectual Property" : "5. Propiedad Intelectual"}</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <strong>{lang === 'en' ? "Your Content:" : "Tu Contenido:"}</strong> {lang === 'en' ? "You retain all rights to the text, images, and customer data you upload to the platform." : "Conservas todos los derechos sobre el texto, imágenes y datos de clientes que subas a la plataforma."}
                            </li>
                            <li>
                                <strong>{lang === 'en' ? "Our Technology:" : "Nuestra Tecnología:"}</strong> {lang === 'en' ? "ByteWorks Agency retains all rights to the source code, system architecture, and pre-built software components used to power your website." : "ByteWorks Agency conserva todos los derechos sobre el código fuente, la arquitectura del sistema y los componentes de software preconstruidos utilizados para potenciar tu sitio web."}
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </Layout>
    );
};
