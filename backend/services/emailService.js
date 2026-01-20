// backend/services/emailService.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendHiringEmail = async (details) => {
  const { company, role, email, message } = details;

  const mailOptions = {
    from: `"Portfolio API" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `��� New Hiring Inquiry: ${role} at ${company}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e4e4e7; border-radius: 12px; padding: 24px;">
        <h2 style="color: #2563eb; margin-top: 0;">🚀 New Opportunity</h2>
        <p style="color: #71717a; font-size: 14px;">You received a new inquiry from your Headless Portfolio.</p>
        
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>

        <div style="background: #ffffff; border-left: 4px solid #2563eb; padding: 12px 16px; font-style: italic; color: #3f3f46;">
          "${message || 'No specific message provided.'}"
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #a1a1aa;">
          Tip: You can reply directly to this email to contact the recruiter.
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};