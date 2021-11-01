import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useAppSelector } from './redux/hooks';
import { getTheme } from './redux/slices/theme';

import appRoutes from './routes';

const App: React.FC = () => {
  const currentTheme = useAppSelector(getTheme);
  const muiTheme = useMemo(() => createTheme(currentTheme), [currentTheme]);

  const elements = useRoutes(appRoutes);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      { elements }
    </ThemeProvider>
  );
};

export default App;
