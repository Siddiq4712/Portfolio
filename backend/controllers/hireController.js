// backend/controllers/hireController.js
import { sendHiringEmail } from '../services/emailService.js';

export const submitInquiry = async (req, res) => {
  try {
    // We extract "message" from the request body here
    const { company, role, email, message } = req.body; 

    if (!company || !role || !email) {
      return res.status(400).json({ status: 'error', message: 'Missing fields' });
    }

    // Pass the message to the email service
    await sendHiringEmail({ company, role, email, message });

    res.status(201).json({
      status: 'success',
      message: 'Email sent with your custom message!',
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to send' });
  }
};