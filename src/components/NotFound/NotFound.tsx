import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-text-wrapper">
        <h1>404 - Page Not Found</h1>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
