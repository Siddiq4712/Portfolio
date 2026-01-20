// backend/routes/hire.js
import express from 'express';
import { submitInquiry } from '../controllers/hireController.js';

const router = express.Router();

// This matches the POST /api/v1/hire endpoint
router.post('/', submitInquiry);

export default router; // <--- This line fixes your specific error!