export const prerender = false;

import type { APIRoute } from "astro";

// Simple in-memory rate limiting
// Note: In production with multiple instances, use Redis or similar
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60 seconds
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per window

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up old entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - record.count, resetIn: record.resetTime - now };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // Rate limiting check
  const ip = clientAddress || request.headers.get('x-forwarded-for') || 'unknown';
  const rateLimit = getRateLimitInfo(ip);

  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({
        message: "Too many requests. Please try again later.",
        retryAfter: Math.ceil(rateLimit.resetIn / 1000),
      }),
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil(rateLimit.resetIn / 1000)),
          'X-RateLimit-Remaining': '0',
        }
      }
    );
  }

  const data = await request.json();
  const { name, email, phone, message } = data;

  // Sanitize inputs: strip HTML tags, limit length
  function sanitize(input: unknown, maxLength = 500): string {
    if (typeof input !== 'string') return '';
    return input
      .replace(/<[^>]*>/g, '') // Strip HTML tags
      .replace(/[<>]/g, '')    // Remove remaining angle brackets
      .trim()
      .slice(0, maxLength);
  }

  const cleanName = sanitize(name, 100);
  const cleanEmail = sanitize(email, 254);
  const cleanPhone = sanitize(phone, 30);
  const cleanMessage = sanitize(message, 2000);

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return new Response(
      JSON.stringify({
        message: "Faltan campos requeridos (Nombre, Email, Mensaje)",
      }),
      { status: 400 }
    );
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return new Response(
      JSON.stringify({
        message: "Formato de email inválido",
      }),
      { status: 400 }
    );
  }

  const makeWebhookUrl = import.meta.env.MAKE_WEBHOOK_URL;

  if (!makeWebhookUrl) {
    console.error("SERVER ERROR: MAKE_WEBHOOK_URL is missing from environment variables.");
    return new Response(
      JSON.stringify({
        message: "Configuration Error: Webhook URL not found.",
        debug: "Check .env file and restart server."
      }),
      { status: 500 }
    );
  }

  try {
    const response = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        message: cleanMessage,
        date: new Date().toISOString(),
        source: "ByteWorks Website",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Make Webhook Failed: ${response.status} ${response.statusText} - ${errorText}`);
      throw new Error(`Make API Error: ${response.status} ${response.statusText}`);
    }

    return new Response(
      JSON.stringify({
        message: "¡Mensaje enviado con éxito!",
      }),
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        }
      }
    );
  } catch (error: any) {
    console.error("Server Exception:", error);
    return new Response(
      JSON.stringify({
        message: "Error interno del servidor.",
        error: error.message || String(error),
      }),
      { status: 500 }
    );
  }
};
