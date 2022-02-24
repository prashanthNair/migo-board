/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const UpdateStockLink = styled(Typography)({
  fontSize: '0.9rem',
  paddingBottom: '20px',
  marginRight: 2,
});

const BottomContain = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '5px',
});

export default function UpdateStock(props:any) {
  const { hasOpen } = props;
  const [open, setOpen] = React.useState(hasOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BottomContain>

        <UpdateStockLink onClick={handleClickOpen}>
          Update Stock
        </UpdateStockLink>
        <div onClick={handleClickOpen}>
          <AddIcon />
        </div>
      </BottomContain>
      <Dialog open={open} onClose={handleClose}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <DialogTitle>Update Stocks</DialogTitle>
          </div>
          <div onClick={handleClose} style={{ margin: 10 }}>
            <CancelRoundedIcon />
          </div>
        </div>
        <DialogContent>
          <div style={{
            display: 'flex', flexDirection: 'column', marginLeft: 30, marginRight: 30, marginTop: 30, justifyContent: 'center', lineHeight: 5,
          }}
          >
            <div>
              <TextField
                size="small"
                type="number"
                id="outlined-required"
                label="Buddy margin"
              />
            </div>
            <div>
              <TextField
                type="number"
                size="small"
                id="outlined-required"
                label="Migo Loyality Point"
              />
            </div>
            <div style={{ lineHeight: 2 }}>
              <TextField
                type="number"
                size="small"
                id="outlined-required"
                label="Stock"
              />
            </div>
          </div>
        </DialogContent>
        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30,
        }}
        >
          <Button variant="contained" onClick={handleClose}>Save</Button>
        </div>
      </Dialog>
    </div>
  );
}
