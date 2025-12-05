/// <reference types="astro/client" />

/**
 * Environment variables for ByteWorks Agency
 * 
 * Server-side variables are only available in .astro files and API routes.
 * PUBLIC_ prefixed variables are exposed to client-side code.
 */
interface ImportMetaEnv {
  // ===== Server-side variables =====

  /** Webhook URL for Make.com automation (contact form submissions) */
  readonly MAKE_WEBHOOK_URL?: string;

  // ===== Public variables (exposed to client) =====

  /** WhatsApp phone number for contact widget (E.164 format) */
  readonly PUBLIC_WHATSAPP_PHONE?: string;

  /** Default WhatsApp message */
  readonly PUBLIC_WHATSAPP_MSG?: string;

  /** Contact email address */
  readonly PUBLIC_CONTACT_EMAIL?: string;

  /** Contact phone number */
  readonly PUBLIC_CONTACT_PHONE?: string;

  /** Plausible Analytics domain */
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;

  /** Cloudflare Web Analytics token */
  readonly PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
