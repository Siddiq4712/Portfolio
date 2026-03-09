import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  type: { type: String, enum: ['Hackathon', 'Certification', 'Internship'], required: true },
  title: { type: String, required: true },
  organization: String, 
  role: String,
  description: String,
  date: String
});

export default mongoose.model('Achievement', achievementSchema);