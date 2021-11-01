import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export interface NavProps {
    themeMode?: 'light' | 'dark';
    height?: number | string;
}

const Nav: React.FC<NavProps> = (props) => {
  const { themeMode, height } = props;

  const NavContainer = styled(Box)(
    ({ theme }) => ({
      backgroundColor: themeMode === 'dark' ? '#1F1F1F' : '#fff',
      height: height || '62px',
    }),
  );

  return (
    <NavContainer>
      <Grid alignItems="center" container spacing={2}>
        <Grid item xs={2}>
          {/* <p>1</p> */}
        </Grid>
        <Grid item xs={6}>
          {/* <p>2</p> */}
        </Grid>
        <Grid item xs={2}>
          {/* <p>1</p> */}
        </Grid>
      </Grid>
    </NavContainer>
  );
};

export default Nav;
