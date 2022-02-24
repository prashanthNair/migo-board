import React, { useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SideBarItem from './SideBarItems';
import CustomMenu from './SideBarMenu';

const SideBar = () => {
  const SidebarContainer = styled(Box)(
    () => ({
      height: 'auto',
      width: '100%',
    }),
  );

  const SizedBox = styled(Box)({
    margin: '20px 0px',
  });
  const Logo = styled('img')(() => ({
    width: '50px',
  }));

  return (
    <SidebarContainer>
      <Grid
        sx={{ height: '8vh', marginTop: 2 }}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Logo src="/assets/logo.svg" alt="logo" />
        </Grid>
        <Grid>
          <CustomMenu />
        </Grid>
      </Grid>
      <SizedBox />
    </SidebarContainer>
  );
};
export default SideBar;
