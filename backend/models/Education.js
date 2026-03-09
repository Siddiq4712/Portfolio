import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: String, // e.g., BE Computer Science
  level: { type: String, enum: ['University', 'HSC', 'SSLC'] },
  duration: String,
  cgpa: String,
  percentage: String,
  location: String
});

export default mongoose.model('Education', educationSchema);