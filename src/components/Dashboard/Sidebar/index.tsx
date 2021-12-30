import React, { useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SideBarItem from './SideBarItems';

interface SideBarProps {
  onSidebarToggle: () => void;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const { onSidebarToggle } = props;

  const SidebarContainer = styled(Box)(
    () => ({
      height: 'auto',
      width: '100%',
    }),
  );
  const SideBarBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
  });
  const SizedBox = styled(Box)({
    margin: '20px 0px',
  });
  const Logo = styled('img')(() => ({
    width: '50px',
  }));

  const MenuContainer = styled(Box)(() => ({
    cursor: 'pointer',
  }));

  const handleSidebarToggle = useCallback(() => {
    if (onSidebarToggle) {
      onSidebarToggle();
    }
  }, [onSidebarToggle]);

  return (
    <SidebarContainer>
      <Grid
        sx={{ height: '8vh', padding: '20px 15px' }}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Logo src="/assets/logo.svg" alt="logo" />
        </Grid>
        <Grid item>
          <MenuContainer onClick={handleSidebarToggle}>
            <MenuIcon />
          </MenuContainer>
        </Grid>
      </Grid>
      <SizedBox />
      <SideBarBox>
        <SideBarItem />
      </SideBarBox>
    </SidebarContainer>
  );
};
export default SideBar;
