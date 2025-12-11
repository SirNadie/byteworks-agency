export const config = {
    runtime: 'edge', // or 'nodejs'
};

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const data = await request.json();
        const { name, email, phone, message } = data;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: 'Missing fields' }), { status: 400 });
        }

        const webhookUrl = process.env.MAKE_WEBHOOK_URL;
        if (!webhookUrl) {
            return new Response(JSON.stringify({ message: 'Server configuration error' }), { status: 500 });
        }

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
                date: new Date().toISOString(),
                source: "ByteWorks Website React",
            }),
        });

        if (!response.ok) {
            throw new Error('Webhook failed');
        }

        return new Response(JSON.stringify({ message: 'Sent successfully' }), { status: 200 });

    } catch (err: any) {
        return new Response(JSON.stringify({ message: err.message }), { status: 500 });
    }
}
