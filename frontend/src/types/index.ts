// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface HealthCheckResponse {
  status: string;
  timestamp: string;
  service: string;
  version: string;
}

// Equation Solver Types
export interface EquationSolution {
  solution: Record<string, number>;
  method_used: string;
  steps: string[];
  verification?: Record<string, string>;
}

export interface EquationRequest {
  equation: string;
  variables?: string[];
  method?: 'substitution' | 'elimination' | 'matrix' | 'auto';
}

// Matrix Types
export interface MatrixRequest {
  matrix: number[][];
  constants?: number[];
  operation: 'solve' | 'determinant' | 'inverse' | 'multiply' | 'add' | 'subtract' | 'transpose';
}

export interface MatrixResult {
  result: number[][] | number[] | number;
  determinant?: number;
  method?: string;
  steps?: string[];
}

// Common UI Types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

// Application State Types
export interface AppState {
  loading: boolean;
  error: string | null;
  apiStatus: 'loading' | 'online' | 'offline';
}

export interface CalculatorState {
  equation: string;
  matrix: number[][];
  result: EquationSolution | MatrixResult | null;
  loading: boolean;
  error: string | null;
}
