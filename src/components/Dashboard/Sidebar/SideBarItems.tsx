import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { DashboardCustomize } from '@mui/icons-material';

const SidebarItems = styled(Box)({
  display: 'flex',
  color: '#2b2b2b',
  padding: '10px',
});
const IconBox = styled(Box)({
  fontSize: '5px',
});
const SideBarText = styled(Typography)({
  paddingLeft: '30px',
});

const SideBarItem = () => (
  <SidebarItems>
    <IconBox><DashboardCustomize /></IconBox>
    <SideBarText>Dashboard</SideBarText>
  </SidebarItems>

);

export default SideBarItem;
