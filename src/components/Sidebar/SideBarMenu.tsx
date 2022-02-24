import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

export default function CustomMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const useStyles = makeStyles({
    root: {
      background: '#ffffff',
      border: 0,
      margin: 0,
      color: 'red',
    },
  });
  const CustomMenuItem = styled(MenuItem)({ marginBottom: 20 });
  const style = useStyles();
  return (
    <Paper>

      <Paper sx={{ width: 258, maxWidth: '100%' }}>
        <MenuList>
          <CustomMenuItem onClick={() => { navigate('/dashboard'); }}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </CustomMenuItem>
          <CustomMenuItem onClick={() => { navigate('/orders'); }}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Orders</ListItemText>
          </CustomMenuItem>
          <CustomMenuItem onClick={() => { navigate('/orderTracking'); }}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>Order Tracking</ListItemText>

          </CustomMenuItem>
          <CustomMenuItem className={location.pathname === '/container/inventory' ? 'style.root' : ''}>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={() => { navigate('/container/inventory'); }}>Inventory</ListItemText>

          </CustomMenuItem>
        </MenuList>
      </Paper>
      <Paper sx={{ width: 258, marginTop: 30, maxWidth: '100%' }}>
        <MenuList>
          <CustomMenuItem onClick={() => { navigate('/inventory'); }}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </CustomMenuItem>
          <CustomMenuItem>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Orders</ListItemText>
          </CustomMenuItem>
        </MenuList>
      </Paper>
    </Paper>
  );
}
