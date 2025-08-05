# Development Guide

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation
1. Clone the repository
2. Install dependencies for both frontend and backend
3. Set up environment variables
4. Start development servers

### Project Structure

The project follows a monorepo structure with separate frontend and backend applications:

```
PrivateCalculatorV2/
├── frontend/          # React.js application
├── backend/           # Node.js/Express API
├── docs/              # Documentation
└── package.json       # Root workspace configuration
```

## Technology Choices

### Backend: Node.js + Express.js
**Why this choice:**
- **JavaScript Ecosystem**: Consistent language across frontend and backend
- **Rapid Development**: Express.js provides minimal setup with extensive middleware ecosystem
- **Mathematical Libraries**: Rich ecosystem with math.js, ml-matrix for calculations
- **Deployment**: Easy deployment on modern platforms (Vercel, Railway, Render)
- **Scalability**: Event-driven architecture suitable for mathematical computations

### Frontend: React.js + TypeScript
**Why this choice:**
- **Modern Development**: Hooks, concurrent features, excellent developer experience
- **TypeScript**: Type safety for complex mathematical operations and API interactions
- **Component Architecture**: Perfect for pixel art UI component library
- **Ecosystem**: Extensive library support for animations and UI interactions
- **Performance**: Virtual DOM and React 18 features for smooth animations

### Build Tools: Vite
**Why this choice:**
- **Fast Development**: Lightning-fast HMR and build times
- **Modern Bundling**: Native ES modules support
- **TypeScript Support**: Built-in TypeScript compilation
- **Optimized Builds**: Efficient production bundles

## Development Workflow

### Adding New Features

1. **Planning Phase**
   - Discuss with Architecture AI for system design
   - Create feature branch from main
   - Document requirements and API contracts

2. **Implementation Phase**
   - Backend: Create controller, service, and route
   - Frontend: Create components, pages, and services
   - Follow established patterns and naming conventions

3. **Testing Phase**
   - Write unit tests for business logic
   - Test API endpoints with sample data
   - Verify UI functionality and pixel art aesthetics

4. **Review Phase**
   - Code review by Code Review AI
   - QA testing by QA Agent
   - Architecture review by Architecture AI

5. **Deployment Phase**
   - Merge to main branch
   - Automatic deployment to staging
   - Manual promotion to production

### Code Organization Best Practices

#### Backend Structure
- **Controllers**: Handle HTTP requests/responses only
- **Services**: Contain all business logic and calculations
- **Middleware**: Handle cross-cutting concerns (auth, validation, logging)
- **Routes**: Define API endpoints and link to controllers
- **Utils**: Pure utility functions

#### Frontend Structure
- **Components**: Reusable UI components with single responsibility
- **Pages**: Top-level route components
- **Services**: API communication and external integrations
- **Hooks**: Custom React hooks for shared logic
- **Types**: TypeScript interfaces and type definitions

### Naming Conventions

#### Files and Folders
- **Components**: PascalCase (e.g., `CalculatorButton.tsx`)
- **Pages**: PascalCase (e.g., `HomePage.tsx`)
- **Services**: camelCase (e.g., `apiService.ts`)
- **Utils**: camelCase (e.g., `mathHelpers.js`)
- **CSS Modules**: kebab-case (e.g., `calculator-button.module.css`)

#### API Endpoints
- **RESTful naming**: `/api/equations`, `/api/matrix-operations`
- **Consistent verbs**: GET, POST, PUT, DELETE
- **Descriptive paths**: `/api/calculator/solve`, `/api/matrix/operations`

#### Git Commits
Follow conventional commit format:
- `feat: add matrix determinant calculation`
- `fix: resolve equation parsing error`
- `docs: update API documentation`
- `style: improve pixel art button animations`
- `refactor: optimize calculation algorithms`
- `test: add unit tests for equation solver`

## Environment Setup

### Backend Environment Variables
```bash
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend Environment Variables
```bash
VITE_API_URL=http://localhost:3001/api
```

## Testing Strategy

### Backend Testing
- **Unit Tests**: Jest for business logic and utilities
- **Integration Tests**: Supertest for API endpoints
- **Mathematical Accuracy**: Cross-validation with known solutions

### Frontend Testing
- **Component Tests**: React Testing Library
- **Integration Tests**: Test API communication
- **E2E Tests**: Cypress for user workflows

## Deployment

### Staging Deployment
- Automatic deployment on push to `develop` branch
- Environment: staging.privatecalculatorv2.com
- Used for testing and QA validation

### Production Deployment
- Manual deployment from `main` branch
- Environment: privatecalculatorv2.com
- Requires approval from Architecture AI

## Performance Considerations

### Backend Performance
- Use efficient mathematical algorithms
- Implement request caching for identical calculations
- Set appropriate timeout limits for complex computations
- Monitor memory usage during large matrix operations

### Frontend Performance
- Lazy load calculator modules
- Optimize pixel art sprite sheets
- Use React.memo for expensive components
- Implement service worker for offline functionality

## Security Guidelines

### Input Validation
- Sanitize all mathematical expressions
- Validate matrix dimensions and data types
- Implement rate limiting for API endpoints
- Use whitelist-based expression parsing

### Security Headers
- CORS configuration for specific origins
- Helmet.js for security headers
- No eval() or Function() constructors
- Sandboxed mathematical expression evaluation

## Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Check environment variables
   - Verify backend server is running
   - Check CORS configuration

2. **Mathematical Calculation Errors**
   - Validate input format
   - Check for division by zero
   - Verify matrix dimensions

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check TypeScript configuration
   - Verify import paths

### Getting Help
- Check documentation in `/docs` folder
- Review error logs in browser console
- Contact Architecture AI for system-level issues
- Contact QA Agent for testing-related problems
