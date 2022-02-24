import React from 'react';
import type { RouteObject } from 'react-router-dom';

import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';
import Container from '../pages/Container';

export default [
  { path: '/', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/container', element: <Container /> },
] as Array<RouteObject>;
