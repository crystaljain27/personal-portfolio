// Located at: app/api/contact/route.js

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'crystaljain2711@gmail.com'; // IMPORTANT: Change this to your personal email

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // This is a default from Resend, or use your verified domain
      to: [toEmail],
      subject: `New Portfolio Message: ${subject}`,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    });
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
