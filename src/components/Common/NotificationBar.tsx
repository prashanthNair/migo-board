/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function NotificationBar(props:any) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(props.hasOpen);
  });

  const handleClose = (event:any, reason:any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={12} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

        <MuiAlert severity="success" sx={{ width: '100%' }} elevation={6} variant="filled">
          This is a success message!
        </MuiAlert>
      </Snackbar>
    </Stack>
  );
}
