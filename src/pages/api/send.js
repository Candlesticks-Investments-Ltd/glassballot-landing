// pages/api/send.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { f_name, l_name, email, company_name, phone, message } = req.body;

      const content = {
        to: ['info@glassballot.xyz'],
        from: 'adrian@candlesticksinvestments.com',
        subject: `New GlassBallot Inquiry by ${f_name} from ${company_name}`,
        text: `Name: ${f_name} ${l_name}\nEmail: ${email}\nCompany: ${company_name}\nPhone: ${phone}\nMessage: ${message}`,
      };

      await sgMail.send(content);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(403).json({ message: 'Method Not Allowed' });
  }
}
