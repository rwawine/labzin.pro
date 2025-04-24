import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  phone: string;
}

interface ApiResponse {
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone } = req.body as FormData;

  // Валидация данных
  if (!name || !phone) {
    return res.status(400).json({ 
      message: 'Validation error',
      error: 'Name and phone are required'
    });
  }

  if (name.length < 2) {
    return res.status(400).json({ 
      message: 'Validation error',
      error: 'Name must be at least 2 characters long'
    });
  }

  if (!/^\+?[\d\s-()]+$/.test(phone)) {
    return res.status(400).json({ 
      message: 'Validation error',
      error: 'Invalid phone number format'
    });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'rubchenya.work@gmail.com',
      pass: 'hlgn esco lpts wjah'
    }
  });

  try {
    await transporter.sendMail({
      from: 'rubchenya.work@gmail.com',
      to: 'rubchenya.work@gmail.com',
      subject: 'Новая заявка с сайта',
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Дата:</strong> ${new Date().toLocaleString('ru-RU')}</p>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 