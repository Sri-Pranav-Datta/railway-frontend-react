import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const SidebarMenu = ({ open, toggleDrawer }) => {
  const [blockDetailsOpen, setBlockDetailsOpen] = useState(false);
  const [blocksSummaryOpen, setBlocksSummaryOpen] = useState(false);

  const handleBlockDetailsClick = () => {
    setBlockDetailsOpen(!blockDetailsOpen);
  };

  const handleBlocksSummaryClick = () => {
    setBlocksSummaryOpen(!blocksSummaryOpen);
  };

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <List
        sx={{
          width: 250,
          backgroundColor: '#1e3a8a',
          color: 'white',
          height: '100vh',
        }}
      >
        <ListItem>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon sx={{ color: 'white' }} /> : <MenuIcon sx={{ color: 'white' }} />}
          </IconButton>
          <Typography variant="h6" noWrap>
            Chennai Division
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="subtitle1">
            Welcome, Dinesh Kumar
          </Typography>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PermDeviceInformationIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Permitted Line Block" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PermDeviceInformationIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Non-Permitted Line Block" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PermDeviceInformationIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Availed & Non Availed Block" />
        </ListItem>
        <ListItem button onClick={handleBlockDetailsClick}>
          <ListItemIcon>
            <InfoIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Block Details" />
          {blockDetailsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={blockDetailsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Block Details" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Corridor Block" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Non Corridor Block" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="FTCP Block" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Rolling Block" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Non Rolling Block" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <PermDeviceInformationIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Emergency availed Block" />
        </ListItem>
        <ListItem button onClick={handleBlocksSummaryClick}>
          <ListItemIcon>
            <ListIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Blocks Summary" />
          {blocksSummaryOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={blocksSummaryOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Summary 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Summary 2" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarMenu;
