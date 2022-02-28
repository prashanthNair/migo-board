import React, { useMemo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid, { GridSize } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import Nav from '../Nav';
import SideBar from '../Sidebar';
import { getOrdersByBrandIdThunk } from '../../redux/slices/orderTracking';

const RootContainer: React.FC = (props) => {
  const { children } = props;
  let brandId: any = localStorage.getItem('BrandID');
  brandId = 'B001';
  const dispatch = useDispatch();

  dispatch(getOrdersByBrandIdThunk(brandId));
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);
  const sidebarWidth: GridSize = useMemo<GridSize>(
    () => (sidebarActive ? (2 as GridSize) : (1 as GridSize)),
    [sidebarActive],
  );

  const contentWidth: GridSize = useMemo<GridSize>(
    () => (12 - Number(sidebarWidth.toString())) as GridSize,
    [sidebarWidth],
  );

  const navbarHeight = useMemo(() => '10vh', []);

  const ContentContainer = styled(Box)(() => ({
    backgroundColor: '#E5E5E5',
    height: `calc(100vh - ${navbarHeight})`,
    overflow: 'auto',
  }));

  return (
    <Grid container id="dashboard-layout-box">
      <Grid xs={sidebarWidth} item id="dashboard-sidebar">
        <SideBar />
      </Grid>
      <Grid xs={contentWidth} item id="dashboard-content">
        <Nav height={navbarHeight} />
        <ContentContainer>{children}</ContentContainer>
      </Grid>
    </Grid>
  );
};

export default RootContainer;
