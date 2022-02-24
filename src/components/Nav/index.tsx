import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from '../AppBar';

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
      <Header />
    </NavContainer>
  );
};

export default Nav;
