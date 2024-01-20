import { createTheme } from '@mui/material';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2', 
    },
    secondary: {
      main: '#f48fb1', 
    },
    background: {
      //default: '#ffffff', // Default background color
      default: '#f0f0f0', // Default background color
      //paper: '#f5f5f5', // Paper background color
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#666666', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },

  },
  spacing: factor => `${0.25 * factor}rem`, // Adjust spacing
  shadows: [
    'none', // No shadow
    '0 2px 5px rgba(0, 0, 0, 0.1)', // Small shadow
    '0 4px 8px rgba(0, 0, 0, 0.2)', // Medium shadow
    '0 8px 16px rgba(0, 0, 0, 0.3)', // Large shadow
    
  ],
  shape: {
    borderRadius: 8, // Adjust border radius
  },
});

  export default lightTheme;