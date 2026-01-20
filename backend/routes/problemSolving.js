// backend/routes/problemSolving.js
import express from 'express';
import { getProblemSolvingStats } from '../controllers/problemSolvingController.js';

const router = express.Router();

router.get('/', getProblemSolvingStats);

export default router; // This fixes the SyntaxError