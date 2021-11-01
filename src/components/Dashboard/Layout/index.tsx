import React, { useMemo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid, { GridSize } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Nav from '../Nav';
import SideBar from '../Sidebar';

const Layout: React.FC = (props) => {
  const { children } = props;

  const [sidebarActive, setSidebarActive] = useState<boolean>(true);

  const sidebarWidth: GridSize = useMemo<GridSize>(() => (
    sidebarActive ? 2 as GridSize : 1 as GridSize
  ), [sidebarActive]);

  const contentWidth: GridSize = useMemo<GridSize>(() => (
    12 - Number(sidebarWidth.toString())
  ) as GridSize, [sidebarWidth]);

  const navbarHeight = useMemo(() => '10vh', []);

  const ContentContainer = styled(Box)(
    () => ({
      backgroundColor: '#E5E5E5',
      height: `calc(100vh - ${navbarHeight})`,
      overflow: 'auto',
    }),
  );

  const handleSidebarToggle = useCallback(() => setSidebarActive(!sidebarActive), [sidebarActive]);

  return (
    <Grid container id="dashboard-layout-box">
      <Grid xs={sidebarWidth} item id="dashboard-sidebar">
        <SideBar onSidebarToggle={handleSidebarToggle} />
      </Grid>
      <Grid xs={contentWidth} item id="dashboard-content">
        <Nav height={navbarHeight} />
        <ContentContainer>
          { children }
        </ContentContainer>
      </Grid>
    </Grid>
  );
};

export default Layout;
