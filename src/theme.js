import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color for buttons and other primary interfaces
    },
    background: {
      default: '#ffffff', // White background
    },
  },
  typography: {
    h4: {
      fontWeight: 600, // Making the title bold
    },
    button: {
      textTransform: 'none', // Disable uppercase transformation on buttons
    },
  },
});

export default theme;
