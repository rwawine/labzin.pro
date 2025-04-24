import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable, { File } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

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

  const form = formidable();

  try {
    const [fields, files] = await form.parse(req);
    
    const name = fields.name?.[0];
    const company = fields.company?.[0];
    const phone = fields.phone?.[0];
    const email = fields.email?.[0];
    const question = fields.question?.[0];
    const attachedFiles = files.files as File[];

    // Валидация данных
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        message: 'Validation error',
        error: 'Name, phone and email are required'
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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        message: 'Validation error',
        error: 'Invalid email format'
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

    const mailOptions = {
      from: 'rubchenya.work@gmail.com',
      to: 'rubchenya.work@gmail.com',
      subject: 'Новая заявка с сайта (контактная форма)',
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Компания:</strong> ${company || 'Не указана'}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Вопрос:</strong> ${question || 'Не указан'}</p>
        <p><strong>Дата:</strong> ${new Date().toLocaleString('ru-RU')}</p>
      `,
      attachments: attachedFiles ? attachedFiles.map(file => ({
        filename: file.originalFilename || file.newFilename,
        path: file.filepath
      })) : []
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error processing form:', error);
    res.status(500).json({ 
      message: 'Error sending email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 