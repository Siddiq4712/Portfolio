// backend/middlewares/requestLogger.js
import { apiStats } from '../services/statsService.js';

export const requestLogger = (req, res, next) => {
  const startTime = Date.now();

  // Record endpoint hit
  if (req.path.startsWith('/api/v1')) {
    apiStats.recordRequest(req.path, req.method);
  }

  // Log request
  console.log(`→ ${req.method} ${req.path} | IP: ${req.ip}`);

  // Capture response
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`← ${res.statusCode} ${req.method} ${req.path} | ${duration}ms`);
  });

  next();
};