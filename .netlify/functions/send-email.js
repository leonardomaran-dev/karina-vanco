import Resend from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, subject, message } = JSON.parse(event.body);

        const data = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: ['leo-maran1@hotmail.com'],
            subject: subject,
            html: `<div style="font-family: 'Quicksand', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fdf8fb;">
        // ... seu template HTML existente ...
      </div>`
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao enviar email' })
        };
    }
};