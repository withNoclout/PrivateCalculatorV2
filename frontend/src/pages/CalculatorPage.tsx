import { useState } from 'react';
import { apiService } from '../services/apiService';

export const CalculatorPage = () => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSolveEquation = async () => {
    if (!equation.trim()) {
      setError('Please enter an equation');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.solveEquation(equation);
      setResult(response);
    } catch (err) {
      setError('Failed to solve equation. Please try again.');
      console.error('Error solving equation:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMatrixOperation = async () => {
    // Example matrix operation
    const sampleMatrix = [[2, 3], [1, -1]];
    const operation = 'solve';

    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.performMatrixOperation(sampleMatrix, operation);
      setResult(response);
    } catch (err) {
      setError('Failed to perform matrix operation. Please try again.');
      console.error('Error with matrix operation:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator-page">
      <div className="calculator-container">
        <h1>Mathematical Calculator</h1>
        
        <div className="calculator-section">
          <h2>Equation Solver</h2>
          <div className="input-group">
            <input
              type="text"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              placeholder="Enter equation (e.g., 2x + 3 = 7)"
              className="equation-input"
            />
            <button 
              onClick={handleSolveEquation}
              disabled={loading}
              className="solve-button"
            >
              {loading ? 'Solving...' : 'Solve Equation'}
            </button>
          </div>
        </div>

        <div className="calculator-section">
          <h2>Matrix Operations</h2>
          <div className="input-group">
            <p>Sample matrix: [[2, 3], [1, -1]]</p>
            <button 
              onClick={handleMatrixOperation}
              disabled={loading}
              className="solve-button"
            >
              {loading ? 'Processing...' : 'Perform Matrix Operation'}
            </button>
          </div>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {result && (
          <div className="result-section">
            <h3>Result:</h3>
            <pre className="result-display">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
