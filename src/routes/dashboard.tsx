import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Button from '@mui/material/Button';

export default [
  { path: '/dashboard', element: <Button>dashboard</Button> },
  { path: '/dashboard/items', element: <Button>dashboard: Items</Button> },
] as Array<RouteObject>;
