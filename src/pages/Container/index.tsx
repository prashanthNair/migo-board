import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getTheme } from '../../redux/slices/theme';
import basic from '../../routes/dashboard';
import { useAppSelector } from '../../redux/hooks';
import RootContainer from '../../components/Container';

const Container: React.FC = () => {
  const currentTheme = useAppSelector(getTheme);
  const muiTheme = useMemo(() => createTheme(currentTheme), [currentTheme]);

  const children = useRoutes(basic);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <RootContainer>
        {children}
      </RootContainer>
    </ThemeProvider>
  );
};

export default Container;
