import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Button from '@mui/material/Button';

export default [
  { path: '/', element: <Button>Home</Button> },
  { path: '/contact', element: <Button>Contact Us</Button> },
] as Array<RouteObject>;
