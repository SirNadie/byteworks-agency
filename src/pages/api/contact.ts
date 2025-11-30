export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { name, email, phone, message } = data;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Faltan campos requeridos (Nombre, Email, Mensaje)",
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
        name,
        email,
        phone,
        message,
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
      { status: 200 }
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
