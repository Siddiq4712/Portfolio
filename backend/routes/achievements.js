// backend/routes/achievements.js
import express from 'express';
import { getAchievements } from '../controllers/achievementsController.js';

const router = express.Router();
router.get('/', getAchievements);
export default router;