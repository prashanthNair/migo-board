import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import animatedImage from '../../assets/images/signup-banner-animated.gif';

const StyledBlueHeading = styled(Typography)({
  color: '#000000',
});

const LongButton = styled(Button)({
  width: '250px',
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
      <Grid item xs={12} sm={6} md={4}>
        <FormBox>
          <StyledBlueHeading variant="h3">
            Welcome to
            {' '}
            <br />
            Migobucks Brands
          </StyledBlueHeading>
          <InputBox>
            <FormControl variant="standard" sx={{ width: '25ch' }}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard" sx={{ width: '25ch' }}>
              <InputLabel htmlFor="number">Mobile Number</InputLabel>
              <Input id="number" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard" sx={{ width: '25ch' }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard" sx={{ width: '25ch' }}>
              <InputLabel htmlFor="brand-name">Brand Name</InputLabel>
              <Input id="brand-name" />
            </FormControl>
          </InputBox>
          <InputBox>
            <FormControl variant="standard" sx={{ width: '25ch' }}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" />
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
      <Grid item sm={6} md={8}>
        <ImageBox>
          <img src={animatedImage} width={800} height={650} alt="abc" />
        </ImageBox>

      </Grid>
    </Grid>
  </Box>
);

export default SignupPage;
