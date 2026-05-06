import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // TODO: Add Resend integration
    // Uncomment and add your Resend API key when ready:
    /*
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json({ error: 'Newsletter service not configured' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AI Basics <updates@reeceadvisory.com>',
        to: [email],
        subject: 'Welcome to Alongside AI Basics!',
        html: `
          <h1>Thanks for subscribing!</h1>
          <p>You're now part of the Alongside AI Basics community.</p>
          <p>We'll keep you updated when we add new content, features, and resources.</p>
          <p>In the meantime, explore:</p>
          <ul>
            <li><a href="https://alongside-ai-basics.netlify.app/modules/ai-basics">AI Basics Module</a></li>
            <li><a href="https://alongside-ai-basics.netlify.app/prompts">40+ Prompts</a></li>
            <li><a href="https://alongside-ai-basics.netlify.app/practice">Practice Guide</a></li>
          </ul>
          <p>Best wishes,<br>The AI Ark Team</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error('Resend API error:', await response.text());
      return NextResponse.json({ error: 'Failed to send welcome email' }, { status: 500 });
    }
    */

    // For now, just simulate success
    console.log('Newsletter signup:', email);

    return NextResponse.json({
      success: true,
      message: 'Thanks for subscribing! (Newsletter service will be activated soon)'
    });

  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
