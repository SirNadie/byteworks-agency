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
      a: 'Start launches in 7 to 10 business days. Pro and Elite take 2 to 4 weeks.',
    },
    {
      q: 'What does "monthly update" include?',
      a: "Small tasks like text or image changes, layout tweaks, or product edits. They are time-boxed and do not roll over. See Terms and SLA.",
    },
    {
      q: 'Do you handle online payments?',
      a: 'Not by default. E-Commerce Pro uses manual order flow without gateways. We can quote a custom add-on for payments.',
    },
    {
      q: 'Can I track delivery orders?',
      a: 'Yes. Orders get an internal code to share with customers. Track status in our dashboard.',
    },
    {
      q: 'Who owns the domain and content?',
      a: 'You do. We manage the tech stack while subscribed. You keep ownership of your brand, domain, and content.',
    },
    {
      q: 'Bilingual by default?',
      a: 'Yes. English and Spanish structure included. We can hide one language if needed.',
    },
    {
      q: 'SEO included?',
      a: 'All plans include basic SEO like structure and sitemap. For more visibility, use the Advanced SEO add-on.',
    },
    {
      q: 'Can I migrate later?',
      a: 'Yes. We can export your static site and assets upon cancellation.',
    },
  ],
  es: [
    {
      q: '¿En cuánto tiempo puedo tener mi sitio?',
      a: 'Start sale en 7 a 10 días hábiles desde que recibimos textos y assets. Pro y Elite toman 2 a 4 semanas según alcance y revisiones.',
    },
    {
      q: '¿Qué incluye la “actualización mensual”?',
      a: 'Tareas pequeñas como cambios de texto/imagen, ajustes de diseño o edición de productos. Están acotadas por tiempo según plan y no se acumulan (ver Términos + SLA).',
    },
    {
      q: '¿Incluye pagos en línea?',
      a: 'No por defecto. E-Commerce Pro usa flujo de pedido manual sin pasarela. Si luego necesitas pagos, podemos cotizarlo como add-on.',
    },
    {
      q: '¿Puedo dar seguimiento a pedidos de delivery?',
      a: 'Sí. Cada pedido obtiene un código interno. El estado se maneja en nuestro dashboard interno y se muestra en una página de tracking.',
    },
  ],
};

