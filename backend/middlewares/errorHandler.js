// backend/middlewares/errorHandler.js

export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  const response = {
    status,
    message: err.message || 'Internal server error',
  };

  // Include stack trace in development
  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
  }

  // Add helpful hints for common errors
  if (statusCode === 404) {
    response.hint = 'Check the API documentation for valid endpoints';
  } else if (statusCode === 400) {
    response.hint = 'Verify your request body matches the expected format';
  } else if (statusCode === 429) {
    response.hint = 'You\'re making requests too quickly. Please slow down.';
  } else if (statusCode >= 500) {
    response.hint = 'This is a server error. Please try again later or contact support.';
  }

  res.status(statusCode).json(response);
};