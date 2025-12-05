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
      yearly: '$459/yr (save 15%)',
      features: [
        'Launch fast with a clean one-page site',
        'Looks great on mobile',
        'Simple contact so people can reach you',
      ],
    },
    {
      name: 'Pro',
      price: '$55/mo',
      yearly: '$561/yr (save 15%)',
      features: [
        'Multi-page site for services',
        'Explain what you do clearly',
        'Brand-aligned look that builds trust',
      ],
    },
    {
      name: 'Elite',
      price: '$70/mo',
      yearly: '$714/yr (save 15%)',
      features: [
        'Bigger site with custom sections',
        'Faster, more polished experience',
        'Monthly improvements included',
      ],
    },
    {
      name: 'E-Commerce Pro',
      price: '$95/mo',
      yearly: '$969/yr (save 15%)',
      features: [
        'Show products and take orders',
        'Simple cart and manual checkout',
        'Easy order management',
      ],
    },
  ],
  es: [
    {
      name: 'Start',
      price: '$45/mes',
      yearly: '$459/año (ahorra 15%)',
      features: [
        'Lanza rápido con una página clara',
        'Se ve perfecto en móviles',
        'Contacto simple para que te escriban',
      ],
    },
    {
      name: 'Pro',
      price: '$55/mes',
      yearly: '$561/año (ahorra 15%)',
      features: [
        'Sitio con varias secciones para servicios',
        'Explica con claridad lo que haces',
        'Diseño alineado a tu marca',
      ],
    },
    {
      name: 'Elite',
      price: '$70/mes',
      yearly: '$714/año (ahorra 15%)',
      features: [
        'Sitio más completo y a medida',
        'Más rápido y pulido',
        'Mejoras mensuales incluidas',
      ],
    },
    {
      name: 'E-Commerce Pro',
      price: '$95/mes',
      yearly: '$969/año (ahorra 15%)',
      features: [
        'Muestra productos y recibe pedidos',
        'Carrito simple y checkout manual',
        'Gestión fácil de pedidos',
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

