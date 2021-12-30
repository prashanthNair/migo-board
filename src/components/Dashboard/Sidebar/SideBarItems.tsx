import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { DashboardCustomize } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

const SidebarItem = styled(Box)({
  display: 'flex',
  color: '#2b2b2b',
  padding: '10px',
  cursor: 'pointer',
});
const IconBox = styled(Box)({
  fontSize: '5px',
});
const SideBarText = styled(Typography)({
  paddingLeft: '30px',
});

function SideBarItems() {
  const navigate = useNavigate();
  return (
    <div>
      <SidebarItem onClick={() => { navigate('/MyAccount'); }}>
        <IconBox>
          <DashboardCustomize />
        </IconBox>
        {/* <LinearProgress variant="determinate" onClick={() => { navigate('/MyAccount'); }} /> */}
        <SideBarText>Kyc</SideBarText>
      </SidebarItem>
      <SidebarItem>
        <IconBox>
          <DashboardCustomize />
        </IconBox>
        <SideBarText onClick={() => { navigate('/dashboard'); }}>Dashboard</SideBarText>
      </SidebarItem>
      <SidebarItem onClick={() => { navigate('/inventory'); }}>
        <IconBox>
          <DashboardCustomize />
        </IconBox>
        <SideBarText>Inventory</SideBarText>
      </SidebarItem>
    </div>
  );
}

export default SideBarItems;
