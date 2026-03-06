import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { name, email, idea } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'JBOX Waitlist <onboarding@resend.dev>', // Resend default testing sender, must use a verified domain if modifying
            to: ['contact@jboxai.com'],
            subject: `New Waitlist Signup: ${name}`,
            html: `
                <h2>New JBOX Waitlist Signup!</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Idea:</strong><br/>${idea || 'None provided'}</p>
            `,
        });

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Waitlist API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error while confirming your spot' },
            { status: 500 }
        );
    }
}
