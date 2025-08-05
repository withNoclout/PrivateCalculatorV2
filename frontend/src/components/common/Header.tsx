import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>PrivateCalculatorV2</h1>
        </Link>
        
        <nav className="navigation">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/calculator" className="nav-link">
            Calculator
          </Link>
        </nav>
      </div>
    </header>
  );
};
