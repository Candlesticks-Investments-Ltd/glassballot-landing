// pages/api/demo.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;

      const content = {
        to: ['etadriano2@gmail.com','1040481@cuea.edu'],
        from: 'support@newageai.tech',
        subject: `New Demo Request`,
        text: `Email: ${email}\n`,
      };

      await sgMail.send(content);
      res.status(200).json({ message: 'Demo request sent successfully' });
    } catch (error) {
      console.log("Error: ",error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(403).json({ message: 'Method Not Allowed' });
  }
}
