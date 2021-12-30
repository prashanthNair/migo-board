/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import MyAccount from '../../pages/MyAccount';

export default function DialogBox(props:any) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    props.close();
  };

  useEffect(() => {
    const { isOpen } = props;
    setOpen(isOpen);
  }, []);

  return (
    <div>
      <Dialog
        maxWidth="md"
        fullWidth
        open={open}
        sx={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          m: 'auto',
        }}
        onClose={handleClose}
      >
        <DialogTitle>Brand Name here </DialogTitle>
        <MyAccount />
      </Dialog>
    </div>
  );
}
