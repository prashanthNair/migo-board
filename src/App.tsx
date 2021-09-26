import React, { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useAppSelector } from './redux/hooks';
import { getTheme } from './redux/slices/theme';

// Components

const App: React.FC = () => {
  const currentTheme = useAppSelector(getTheme);
  const muiTheme = useMemo(() => createTheme(currentTheme), [currentTheme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <Button variant="contained">Add comment</Button>
    </ThemeProvider>
  );
};

export default App;
