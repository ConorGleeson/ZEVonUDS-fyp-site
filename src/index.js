import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import HomePage from './pages/homePage/homePage';
import lightTheme from './themes/lightTheme';
import { ThemeProvider } from '@mui/system';  // Update this import
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes>
          <Route path="/ZEVonUDS-fyp-site" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/ZEVonUDS-fyp-site" replace />} />
          {/* Add more Route components for other paths */}
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();