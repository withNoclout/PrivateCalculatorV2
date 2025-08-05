const express = require('express');
const router = express.Router();

// Import route modules
// const calculatorRoutes = require('./calculator');
// const matrixRoutes = require('./matrix');

// Health check for API
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API is running',
    timestamp: new Date().toISOString(),
    endpoints: {
      calculator: '/api/calculator',
      matrix: '/api/matrix'
    }
  });
});

// Welcome endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to PrivateCalculatorV2 API',
    version: '1.0.0',
    description: 'Mathematical calculator API with equation solving and matrix operations',
    documentation: '/api/docs',
    availableEndpoints: [
      'GET /api/health - API health check',
      'POST /api/calculator/solve - Solve equations (coming soon)',
      'POST /api/matrix/operations - Matrix operations (coming soon)'
    ]
  });
});

// Basic calculator endpoint (example)
router.post('/calculator/solve', (req, res) => {
  const { equation } = req.body;
  
  if (!equation) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Equation is required'
    });
  }

  // This is a placeholder response
  res.json({
    message: 'Calculator endpoint - coming soon!',
    receivedEquation: equation,
    solution: 'Feature in development',
    steps: ['Step 1: Parse equation', 'Step 2: Solve equation', 'Step 3: Return solution']
  });
});

// Basic matrix endpoint (example)
router.post('/matrix/operations', (req, res) => {
  const { matrix, operation } = req.body;
  
  if (!matrix || !operation) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Matrix and operation are required'
    });
  }

  // This is a placeholder response
  res.json({
    message: 'Matrix operations endpoint - coming soon!',
    receivedMatrix: matrix,
    operation: operation,
    result: 'Feature in development'
  });
});

// API documentation endpoint
router.get('/docs', (req, res) => {
  res.json({
    title: 'PrivateCalculatorV2 API Documentation',
    version: '1.0.0',
    baseUrl: `${req.protocol}://${req.get('host')}/api`,
    endpoints: {
      'GET /': 'API welcome message',
      'GET /health': 'API health check',
      'POST /calculator/solve': {
        description: 'Solve mathematical equations',
        parameters: {
          equation: 'string - Mathematical equation to solve'
        },
        example: {
          equation: '2x + 3 = 7'
        }
      },
      'POST /matrix/operations': {
        description: 'Perform matrix operations',
        parameters: {
          matrix: 'array - Matrix data',
          operation: 'string - Operation type (solve, determinant, inverse)'
        },
        example: {
          matrix: [[2, 3], [1, -1]],
          operation: 'solve'
        }
      }
    }
  });
});

module.exports = router;
