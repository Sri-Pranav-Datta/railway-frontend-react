import React, { useState } from 'react';
import SidebarMenu from './components/sidemenu';
import BlockRequest from './components/blockrequest';
import { CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Tables from './components/tables'
const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div style={{ display: 'flex' }}>
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: 'absolute', top: 16, left: 16 }}
        >
          <MenuIcon />
        </IconButton>
        <SidebarMenu open={drawerOpen} toggleDrawer={toggleDrawer} />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <BlockRequest />
        </div>
      </div> */}
      <Tables/>
    </ThemeProvider>
  );
};

export default App;
