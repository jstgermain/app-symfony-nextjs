// frontend/src/theme.ts

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create your base theme
let theme = createTheme({
  palette: {
    mode: 'light', // change to 'dark' if you plan on supporting dark mode
    primary: {
      main: '#1976d2', // MUI default blue
    },
    secondary: {
      main: '#dc004e', // MUI default pink
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    allVariants: {
      color: '#1a1a1a',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: '#f4f6f8',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

// Make typography responsive
theme = responsiveFontSizes(theme);

export default theme;
