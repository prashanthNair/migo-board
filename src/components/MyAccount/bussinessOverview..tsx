import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  styled,
  TextField,
  Typography,
}
  from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BussinessOverview: React.FC = () => {
  const InputBox = styled(TextField)({
    height: 50,
    color: 'blue',

  });
  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
      >
        -
        <InputBox
          margin="normal"
          required
          fullWidth
          id="businessPAN"
          label="Business PAN"
          name="businessPAN"
          variant="standard"
        />
        <InputBox
          margin="normal"
          required
          fullWidth
          id="businessName"
          label="Business Name"
          name="businessName"
          variant="standard"
        />
        <InputBox
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="PANOwnerName"
          label="PAN Owner’s Name"
          name="PANOwnerName"
        />
        <InputBox
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="billlingName"
          label="Billling Name"
          name="billlingName"
        />
        <TextField
          variant="standard"
          margin="normal"
          required
          multiline
          rows={3}
          fullWidth
          id="adderss"
          label="Adderss"
          name="adderss"
          autoComplete="address"
        />
        <InputBox
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="pincode"
          label="Pincode"
          name="pincode"
          autoComplete="pincode"
        />
        <InputBox
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          autoComplete="city"
        />
        <InputBox
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="state"
          label="State"
          name="state"
          autoComplete="state"
        />
      </Box>
      <div style={{
        display: 'flex', flexDirection: 'row', marginTop: 40, justifyContent: 'center',
      }}
      >
        <Button variant="outlined" style={{ width: 100 }}>Save</Button>
      </div>
    </Container>
  );
};

export default BussinessOverview;
