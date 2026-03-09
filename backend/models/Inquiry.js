import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  message: String,
  status: { type: String, default: 'unread', enum: ['unread', 'read', 'replied'] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Inquiry', inquirySchema);