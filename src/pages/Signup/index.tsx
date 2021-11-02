import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import animatedImage from '../../assets/images/signup-banner-animated.gif';

const StyledBlueHeading = styled(Typography)({
  color: '#000000',

});

const LongButton = styled(Button)({
  width: '200px',
});
const ImageBox = styled(Box)({
  marginTop: '30px',
});
const InputBox = styled(Box)({
  padding: '10px',
});
const FormBox = styled(Box)({
  marginLeft: '150px',
  marginTop: '60px',
});

const SignupPage: React.FC = () => (

  <Box>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <FormBox>
          <StyledBlueHeading variant="h3">
            Welcome to
            {' '}
            <br />
            Migobucks Brands
          </StyledBlueHeading>
          <InputBox>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Enter Full Name</InputLabel>
              <Input id="component-simple" fullWidth />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Enter Full Number</InputLabel>
              <Input id="component-simple" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Email</InputLabel>
              <Input id="component-simple" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Brand Name</InputLabel>
              <Input id="component-simple" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Password</InputLabel>
              <Input id="component-simple" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Accept our Terms and services" />
            </FormGroup>
            <LongButton variant="contained">Signup</LongButton>
          </InputBox>
        </FormBox>
      </Grid>
      <Grid item xs={8}>
        <ImageBox>
          <img src={animatedImage} width={800} height={650} alt="abc" />
        </ImageBox>

      </Grid>
    </Grid>
  </Box>
);

export default SignupPage;
