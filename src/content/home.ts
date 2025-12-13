export type PlanName = 'Start' | 'Pro' | 'E-Commerce';

export type HomePlan = {
  name: PlanName;
  price: string;
  yearly: string;
  bestFor: string;
  description: string;
  keyBenefit: string;
  features: readonly string[];
};

export type HomeFaq = {
  q: string;
  a: string;
};

export const HOME_PLANS: Record<'en' | 'es', readonly HomePlan[]> = {
  en: [
    {
      name: 'Start',
      price: '$45/mo',
      yearly: '$459/yr',
      bestFor: 'Validation & Personal Profiles.',
      description: 'Launch fast with a professional one-page site. Perfect for turning visitors into contacts.',
      keyBenefit: 'Look professional on any device instantly.',
      features: [
        'Single-Page Application (SPA)',
        'Mobile-First & Fully Responsive',
        'High-conversion Contact Form',
        'Managed Hosting & SSL Included',
        'Advanced SEO Integration',
      ],
    },
    {
      name: 'Pro',
      price: '$55/mo',
      yearly: '$561/yr',
      bestFor: 'Small Businesses & Services.',
      description: 'A complete multi-page website to showcase your services, build trust, and manage leads effectively.',
      keyBenefit: 'Strengthen your brand identity and credibility.',
      features: [
        'Multi-Page Architecture',
        'Custom UI/UX Design',
        'Centralized Lead Management',
        'Priority Support & Content Updates',
        'Advanced SEO Integration',
      ],
    },
    {
      name: 'E-Commerce',
      price: '$70/mo',
      yearly: '$714/yr',
      bestFor: 'Online Stores.',
      description: 'Sell without limits. Manage unlimited products and orders with a simplified checkout process.',
      keyBenefit: 'Start selling online immediately without complex bank integrations.',
      features: [
        'Full E-Commerce Architecture',
        'Unlimited Inventory & Dashboard',
        'Simplified Manual Checkout',
        '500 Transactional Emails/mo',
        'Advanced SEO Integration',
      ],
    },
  ],
  es: [
    {
      name: 'Start',
      price: '$45/mes',
      yearly: '$459/año',
      bestFor: 'Validación y Perfiles Personales.',
      description: 'Lanza rápido con un sitio profesional de una página. Perfecto para convertir visitantes en contactos.',
      keyBenefit: 'Luce profesional en cualquier dispositivo al instante.',
      features: [
        'Aplicación de una sola página (SPA)',
        'Diseño Mobile-First y Responsivo',
        'Formulario de contacto de alta conversión',
        'Hosting Gestionado y SSL Incluido',
        'Integración SEO Avanzada',
      ],
    },
    {
      name: 'Pro',
      price: '$55/mes',
      yearly: '$561/año',
      bestFor: 'Pequeños Negocios y Servicios.',
      description: 'Un sitio web completo multipágina para mostrar tus servicios, generar confianza y gestionar leads efectivamente.',
      keyBenefit: 'Fortalece tu identidad de marca y credibilidad.',
      features: [
        'Arquitectura Multi-Página',
        'Diseño UI/UX Personalizado',
        'Gestión Centralizada de Leads',
        'Soporte Prioritario y Actualizaciones',
        'Integración SEO Avanzada',
      ],
    },
    {
      name: 'E-Commerce',
      price: '$70/mes',
      yearly: '$714/año',
      bestFor: 'Tiendas Online.',
      description: 'Vende sin límites. Gestiona productos y pedidos ilimitados con un proceso de pago simplificado.',
      keyBenefit: 'Empieza a vender online inmediatamente sin integraciones bancarias complejas.',
      features: [
        'Arquitectura E-Commerce Completa',
        'Inventario Ilimitado y Dashboard',
        'Checkout Manual Simplificado',
        '500 Emails Transaccionales/mes',
        'Integración SEO Avanzada',
      ],
    },
  ],
};

export const HOME_FAQS: Record<'en' | 'es', readonly HomeFaq[]> = {
  en: [
    {
      q: 'How fast can you deliver my website?',
      a: 'Start Plan: 7-10 business days. Pro & E-Commerce: 2-4 weeks depending on scope.',
    },
    {
      q: 'Do you write the text for the website?',
      a: 'No, you provide text and images. We can use stock photos to get you started.',
    },
    {
      q: 'Is the website bilingual?',
      a: 'Yes. English and Spanish structure included by default.',
    },
    {
      q: 'Do I have to sign a long-term contract?',
      a: 'No. Subscriptions are month-to-month. Cancel anytime.',
    },
    {
      q: 'What does "Monthly Updates" include?',
      a: "Small maintenance tasks like text/image changes. No structural changes or new pages.",
    },
    {
      q: 'Who owns the domain and content?',
      a: 'You do. You keep your domain and content.',
    },
  ],
  es: [
    {
      q: '¿Qué tan rápido pueden entregar mi sitio web?',
      a: 'Plan Start: 7-10 días hábiles. Pro y E-Commerce: 2-4 semanas según alcance.',
    },
    {
      q: '¿Escriben el texto para el sitio web?',
      a: 'No, tú provees textos e imágenes. Podemos usar fotos de stock para empezar.',
    },
    {
      q: '¿Es bilingüe el sitio web?',
      a: 'Sí. Estructura en Inglés y Español incluida por defecto.',
    },
    {
      q: '¿Debo firmar un contrato a largo plazo?',
      a: 'No. Suscripciones mes a mes. Cancela cuando quieras.',
    },
    {
      q: '¿Qué incluyen las "Actualizaciones Mensuales"?',
      a: 'Tareas pequeñas como cambios de texto/imagen. No cambios estructurales ni páginas nuevas.',
    },
    {
      q: '¿Quién es dueño del dominio y el contenido?',
      a: 'Tú. Conservas tu dominio y contenido.',
    },
  ],
};

