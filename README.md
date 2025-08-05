# PrivateCalculatorV2

A modern web application for solving mathematical equations and matrix problems with a pixel art aesthetic.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/withNoclout/PrivateCalculatorV2.git
   cd PrivateCalculatorV2
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Backend environment
   cd ../backend
   cp .env.example .env
   # Edit .env with your configuration
   
   # Frontend environment
   cd ../frontend
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the application**
   ```bash
   # Terminal 1 - Start backend server
   cd backend
   npm run dev
   
   # Terminal 2 - Start frontend development server
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001
   - API Documentation: http://localhost:3001/api/docs

## 🏗️ Project Structure

```
PrivateCalculatorV2/
├── README.md
├── .gitignore
├── package.json                 # Root package.json for workspace management
├── 
├── frontend/                    # React.js Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   └── common/
│   │   ├── pages/               # Page components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── services/            # API communication
│   │   ├── utils/               # Helper functions
│   │   ├── styles/              # Global styles
│   │   ├── types/               # TypeScript type definitions
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/                     # Node.js Backend
│   ├── src/
│   │   ├── controllers/         # Route handlers
│   │   ├── middleware/          # Express middleware
│   │   ├── routes/              # API routes
│   │   ├── services/            # Business logic
│   │   ├── utils/               # Utility functions
│   │   ├── config/              # Configuration
│   │   └── app.js               # Express app setup
│   ├── tests/                   # Backend tests
│   ├── package.json
│   └── server.js                # Entry point
│
└── docs/                        # Documentation
    └── api/                     # API documentation
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks and concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling for components

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Minimal and flexible web framework
- **CORS** - Cross-origin resource sharing support
- **Helmet** - Security middleware for Express

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Nodemon** - Auto-restart development server

## 📁 Code Organization

### Frontend Structure
- **`components/`** - Reusable UI components organized by feature
- **`pages/`** - Top-level page components mapped to routes
- **`hooks/`** - Custom React hooks for shared logic
- **`services/`** - API communication and external service integrations
- **`utils/`** - Pure utility functions and helpers
- **`types/`** - TypeScript type definitions

### Backend Structure
- **`controllers/`** - Route handlers that process requests and responses
- **`middleware/`** - Express middleware for authentication, validation, etc.
- **`routes/`** - API route definitions and organization
- **`services/`** - Business logic separated from route handlers
- **`utils/`** - Utility functions and helpers
- **`config/`** - Configuration files and environment setup

## 🔧 Development Guidelines

### Adding New Features

1. **Frontend Components**
   ```bash
   # Create new component
   mkdir src/components/NewFeature
   touch src/components/NewFeature/index.tsx
   touch src/components/NewFeature/NewFeature.module.css
   ```

2. **Backend Routes**
   ```bash
   # Create new route
   touch src/routes/newFeature.js
   touch src/controllers/newFeatureController.js
   touch src/services/newFeatureService.js
   ```

### Naming Conventions
- **Components**: PascalCase (e.g., `Calculator`, `MatrixSolver`)
- **Files**: camelCase for JS/TS, kebab-case for CSS
- **Folders**: camelCase
- **API Routes**: kebab-case (e.g., `/api/matrix-solver`)

### Best Practices
- Keep components small and focused on a single responsibility
- Use TypeScript interfaces for all data structures
- Write descriptive commit messages
- Add comments for complex business logic
- Test new features before merging

## 🚧 Extending the Project

### Adding New Pages
1. Create component in `frontend/src/pages/`
2. Add route to main router
3. Update navigation if needed

### Adding New API Endpoints
1. Create controller in `backend/src/controllers/`
2. Create service in `backend/src/services/`
3. Add route in `backend/src/routes/`
4. Register route in main app

### Adding New Dependencies
```bash
# Frontend
cd frontend && npm install package-name

# Backend
cd backend && npm install package-name
```

## 📚 API Documentation

### Base URL
- Development: `http://localhost:3001/api`
- Production: `https://api.privatecalculatorv2.com/api`

### Available Endpoints
- `GET /api/health` - Health check endpoint
- `GET /api/` - Welcome message

## 🧪 Testing

```bash
# Run backend tests
cd backend && npm test

# Run frontend tests
cd frontend && npm test
```

## 📦 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
# Upload dist/ folder to hosting platform
```

### Backend Deployment (Railway/Render)
```bash
cd backend
# Deploy using platform-specific CLI or Git integration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Project Documentation](./docs/)
- [API Documentation](./docs/api/)
- [Contributing Guidelines](./CONTRIBUTING.md)
