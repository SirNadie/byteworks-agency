export type PlanName = 'Start' | 'Pro' | 'Elite' | 'E-Commerce Pro';

export type HomePlan = {
  name: PlanName;
  price: string;
  yearly: string;
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
      features: [
        'Launch fast with a professional one-page site',
        'Perfect for turning visitors into contacts',
        'Look professional on any device instantly',
      ],
    },
    {
      name: 'Pro',
      price: '$55/mo',
      yearly: '$561/yr',
      features: [
        'Complete multi-page website',
        'Showcase your services and build trust',
        'Manage leads effectively',
      ],
    },
    {
      name: 'E-Commerce Pro',
      price: '$70/mo',
      yearly: '$714/yr',
      features: [
        'Sell without limits',
        'Manage unlimited products and orders',
        'Start selling immediately without complex bank integrations',
      ],
    },
  ],
  es: [
    {
      name: 'Start',
      price: '$45/mes',
      yearly: '$459/año',
      features: [
        'Lanza rápido con un sitio profesional de una página',
        'Perfecto para convertir visitantes en contactos',
        'Luce profesional en cualquier dispositivo al instante',
      ],
    },
    {
      name: 'Pro',
      price: '$55/mes',
      yearly: '$561/año',
      features: [
        'Sitio web completo de varias páginas',
        'Muestra tus servicios y genera confianza',
        'Gestiona leads de manera efectiva',
      ],
    },
    {
      name: 'E-Commerce Pro',
      price: '$70/mes',
      yearly: '$714/año',
      features: [
        'Vende sin límites',
        'Gestiona productos y pedidos ilimitados',
        'Empieza a vender ya sin integraciones bancarias complejas',
      ],
    },
  ],
};

export const HOME_FAQS: Record<'en' | 'es', readonly HomeFaq[]> = {
  en: [
    {
      q: 'How fast can you deliver my website?',
      a: 'Start launches in 7 to 10 business days. Pro and E-Commerce Pro take 2 to 4 weeks depending on scope.',
    },
    {
      q: 'What does "monthly update" include?',
      a: "Small tasks like text or image changes, layout tweaks, or product edits. Work is time-boxed based on your plan.",
    },
    {
      q: 'Do you handle online payments?',
      a: 'Not by default. E-Commerce Pro uses a manual checkout flow (WhatsApp/Email). We can quote custom payment gateways if needed.',
    },
    {
      q: 'Who owns the domain and content?',
      a: 'You do. We manage the tech stack, but you keep full ownership of your brand, domain, and content.',
    },
    {
      q: 'Bilingual by default?',
      a: 'Yes. English and Spanish structure included (SEO-friendly). We can hide one language if you prefer.',
    },
    {
      q: 'SEO included?',
      a: 'Yes. Structure, sitemap, metadata, and fast performance are standard. Advanced SEO/Local listing is an add-on.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. You retain your domain and content. We provide a static backup upon request. Hosting stops at end of cycle.',
    },
  ],
  es: [
    {
      q: '¿Qué tan rápido pueden entregar mi sitio web?',
      a: 'Start sale en 7 a 10 días hábiles. Pro y E-Commerce Pro toman 2 a 4 semanas según alcance.',
    },
    {
      q: '¿Qué incluye la “actualización mensual”?',
      a: 'Tareas pequeñas como cambios de texto/imagen, ajustes de diseño o edición de productos. El trabajo se acota según tu plan.',
    },
    {
      q: '¿Incluye pagos en línea?',
      a: 'No por defecto. E-Commerce Pro usa checkout manual (WhatsApp/Email). Si necesitas pasarelas de pago, podemos cotizarlo.',
    },
    {
      q: '¿Soy dueño de mi dominio y contenido?',
      a: 'Sí. Nosotros gestionamos la tecnología, pero tú conservas la propiedad total de tu marca, dominio y contenido.',
    },
    {
      q: '¿Es bilingüe por defecto?',
      a: 'Sí. Incluye estructura en Inglés y Español (amigable para SEO). Podemos ocultar un idioma si lo prefieres.',
    },
    {
      q: '¿Incluye SEO?',
      a: 'Sí. Estructura, sitemap, metadatos y velocidad vienen de serie. El SEO Avanzado/Local está disponible como add-on.',
    },
    {
      q: '¿Puedo cancelar cuando quiera?',
      a: 'Sí. Conservas tu dominio y contenido. Entregamos un backup estático si lo pides. El hosting se detiene al final del ciclo.',
    },
  ],
};

