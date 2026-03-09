import mongoose from 'mongoose';

const problemSolvingSchema = new mongoose.Schema({
  platform: { type: String, required: true }, 
  solvedCount: { type: Number, required: true },
  rating: String,
  profileUrl: String
});

export default mongoose.model('ProblemSolving', problemSolvingSchema);