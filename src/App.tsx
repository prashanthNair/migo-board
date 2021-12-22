import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useAppSelector } from './redux/hooks';
import { getTheme } from './redux/slices/theme';

import appRoutes from './routes';
import Layout from './components/Dashboard/Layout';

import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import SideBar from './components/Dashboard/Sidebar';
import Nav from './components/Dashboard/Nav';
import Inventory from './pages/Inventary/Index';
import AddProduct from './pages/Inventary/AddProduct';

const App: React.FC = () => {
  const currentTheme = useAppSelector(getTheme);
  const muiTheme = useMemo(() => createTheme(currentTheme), [currentTheme]);

  const elements = useRoutes(appRoutes);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AddProduct />
    </ThemeProvider>
  );
};

export default App;
