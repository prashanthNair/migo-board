import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
}
  from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BusinessDetails: React.FC = () => {
  const handleSubmit = () => {
    // event.preventDefault();
    console.log('formValues');
  };
  return (
    <div>
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        BUSINESS DETAILS
      </Typography>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Container component="main" maxWidth="sm">
              <TextField
                margin="normal"
                required
                fullWidth
                id="businessPAN"
                label="Business PAN"
                name="businessPAN"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="businessName"
                label="Business Name"
                name="businessName"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="PANOwnerName"
                label="PAN Owner’s Name"
                name="PANOwnerName"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="billlingName"
                label="Billling Name"
                name="billlingName"
              />
              <TextField
                margin="normal"
                required
                multiline
                rows={4}
                fullWidth
                id="adderss"
                label="Adderss"
                name="adderss"
                autoComplete="address"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="pincode"
                label="Pincode"
                name="pincode"
                autoComplete="pincode"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="state"
                label="State"
                name="state"
                autoComplete="state"
              />
            </Container>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="I agree to Migobucks"
                />
                <Link href="True">Terms and services</Link>
              </Grid>
              <Grid item xs={6} md={4}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit & Verify
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default BusinessDetails;
