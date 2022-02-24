import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppSelector } from './redux/hooks';
import { getTheme } from './redux/slices/theme';

import dashboard from './routes/dashboard';
import RootContainer from './components/Container';

const App: React.FC = () => {
  const currentTheme = useAppSelector(getTheme);
  const muiTheme = useMemo(() => createTheme(currentTheme), [currentTheme]);

  const elements = useRoutes(dashboard);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <RootContainer>
        {elements}
      </RootContainer>
    </ThemeProvider>
  );
};

export default App;
