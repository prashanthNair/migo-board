import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { DashboardCustomize } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import DialogBox from '../../DialogBox';

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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function SideBarItems() {
  const navigate = useNavigate();
  const [hasOpen, sethasOpen] = useState(false);

  const handleClickOpen = () => {
    debugger;// eslint-disable-line no-debugger
    sethasOpen(true);
  };
  const handleClose = () => {
    sethasOpen(false);
  };

  return (
    <div>
      <div style={{
        height: 50,
      }}

      >
        <BorderLinearProgress variant="determinate" value={50} onClick={handleClickOpen} />
        {
          // eslint-disable-next-line react/jsx-boolean-value
          hasOpen ? <DialogBox isOpen={true} close={handleClose} /> : ''

        }

      </div>
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
