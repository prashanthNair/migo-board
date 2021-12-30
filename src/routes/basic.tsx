import React from 'react';
import type { RouteObject } from 'react-router-dom';

import LoginPage from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import SignupPage from '../pages/Signup';
import MyOrders from '../pages/orders';

export default [
  { path: '/', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/MyAccount', element: <MyAccount /> },
  { path: '/MyOrders', element: <MyOrders /> },
] as Array<RouteObject>;
