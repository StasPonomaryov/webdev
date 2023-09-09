import type { ReactElement, JSXElementConstructor } from 'react';
import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'ponomaryov.stas@gmail.com',
      reply_to: formData.email,
      subject: 'New message from personal site',
      react: EmailTemplate(formData) as ReactElement<any, string | JSXElementConstructor<any>>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
