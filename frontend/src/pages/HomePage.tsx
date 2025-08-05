import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/apiService';

export const HomePage = () => {
  const [apiStatus, setApiStatus] = useState<'loading' | 'online' | 'offline'>('loading');

  useEffect(() => {
    // Check API health on component mount
    const checkApiHealth = async () => {
      try {
        await apiService.checkHealth();
        setApiStatus('online');
      } catch (error) {
        setApiStatus('offline');
        console.error('API health check failed:', error);
      }
    };

    checkApiHealth();
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">PrivateCalculatorV2</h1>
        <p className="hero-subtitle">
          A modern mathematical calculator with pixel art aesthetics
        </p>
        
        <div className="api-status">
          <span className={`status-indicator ${apiStatus}`}>
            {apiStatus === 'loading' && '⏳ Checking API...'}
            {apiStatus === 'online' && '✅ API Online'}
            {apiStatus === 'offline' && '❌ API Offline'}
          </span>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>🧮 Equation Solver</h3>
            <p>Solve systems of equations with multiple unknowns</p>
          </div>
          
          <div className="feature-card">
            <h3>📊 Matrix Operations</h3>
            <p>Perform calculations on 1x2 and 1x3 matrices</p>
          </div>
          
          <div className="feature-card">
            <h3>🎨 Pixel Art UI</h3>
            <p>Beautiful retro-style interface with modern interactions</p>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/calculator" className="cta-button">
            Start Calculating
          </Link>
        </div>
      </div>
    </div>
  );
};
