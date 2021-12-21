import React from 'react';
import type { RouteObject } from 'react-router-dom';

import LoginPage from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import SignupPage from '../pages/Signup';
import Subscrptions from '../pages/Subscription';

export default [
  { path: '/', element: <h3>Home Page</h3> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/subscriptions', element: <Subscrptions /> },
  { path: '/MyAccount', element: <MyAccount /> },
] as Array<RouteObject>;
