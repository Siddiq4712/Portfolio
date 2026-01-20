// backend/server.js
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import { config } from './config/config.js';
import { rateLimiter } from './middlewares/rateLimiter.js';
import { requestLogger } from './middlewares/requestLogger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import identityRouter from './routes/identity.js';
import educationRouter from './routes/education.js';
import skillsRouter from './routes/skills.js';
import projectsRouter from './routes/projects.js';
import achievementsRouter from './routes/achievements.js';
import problemSolvingRouter from './routes/problemSolving.js';
import hireRouter from './routes/hire.js';
import statsRouter from './routes/stats.js';

const app = express();

// Security middlewares
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  },
}));

app.use(cors({
  origin: config.corsOrigin,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Request parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Sanitization
app.use(mongoSanitize());

// Custom middlewares
app.use(requestLogger);
app.use(rateLimiter);

// API Routes
const API_PREFIX = '/api/v1';

app.use(`${API_PREFIX}/identity`, identityRouter);
app.use(`${API_PREFIX}/education`, educationRouter);
app.use(`${API_PREFIX}/skills`, skillsRouter);
app.use(`${API_PREFIX}/projects`, projectsRouter);
app.use(`${API_PREFIX}/achievements`, achievementsRouter);
app.use(`${API_PREFIX}/problem-solving`, problemSolvingRouter);
app.use(`${API_PREFIX}/hire`, hireRouter);
app.use(`${API_PREFIX}/stats`, statsRouter);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'System operational',
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint - API documentation reference
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Mohamed Abubacker Siddiq\'s Headless Portfolio API',
    documentation: 'Visit the frontend for interactive API documentation',
    version: 'v1',
    endpoints: {
      identity: `${API_PREFIX}/identity`,
      education: `${API_PREFIX}/education`,
      skills: `${API_PREFIX}/skills`,
      projects: `${API_PREFIX}/projects`,
      achievements: `${API_PREFIX}/achievements`,
      problemSolving: `${API_PREFIX}/problem-solving`,
      hire: `${API_PREFIX}/hire`,
      stats: `${API_PREFIX}/stats`,
    },
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found',
    hint: 'Check the API documentation for valid endpoints',
    requestedPath: req.originalUrl,
  });
});

// Global error handler
app.use(errorHandler);

const PORT = config.port || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🔒 Rate limiting: ${config.rateLimit.max} requests per ${config.rateLimit.windowMs / 60000} minutes`);
});

export default app;