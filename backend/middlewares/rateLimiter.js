import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: {
    status: 'error',
    message: 'Too many requests from this IP, please try again after 15 minutes',
    hint: 'This is a real rate limiter protecting the API.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});