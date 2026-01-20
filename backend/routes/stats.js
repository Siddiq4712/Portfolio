// backend/routes/stats.js
import express from 'express';
import { apiStats } from '../services/statsService.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    data: apiStats.getStats()
  });
});

export default router;