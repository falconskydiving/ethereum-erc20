import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import ERC20App from './ERC20/ERC20App';

const Appauthenticated = () => {
  const drawerWidth = 240;
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
              Ethereum ERCs demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box'
            }
        }}
        variant="permanent"
        anchor="left">
          <Toolbar />
          <Divider />
          <List>
            <ListItemButton>
              <ListItemText primary="ERC-20" />
            </ListItemButton>
          </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p:3 }}>
            <Toolbar />
            <ERC20App />
        
      </Box>
    </Box>
  );
}

export default Appauthenticated;
