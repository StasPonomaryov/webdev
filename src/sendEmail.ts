"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailFormData {
  name: string;
  email: string;
  task: string;
  message?: string;
};

export const sendEmail = async (formData: EmailFormData) => {
  const { name, email, task, message } = formData;
  let taskReal: string;
  switch (task) {
    case 'create': taskReal = 'Development'; break;
    case 'hire': taskReal = 'Update'; break;
    case 'ask':
    default: taskReal = 'Optimize'; break;
  }
  try {
    await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'ponomaryov.stas@gmail.com',
      reply_to: email,
      subject: 'New message from personal site',
      text: `New message from personal site:\n\n${message}\n\nChoice: ${taskReal}\n\nEmail: ${email}\n\nName: ${name}`
    });
  } catch (error) {
    return {
      error: error.message
    };
  }
};
