import React, { useState, useCallback } from 'react';
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
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { createSessionThunk } from '../../redux/slices/brand';

import animatedImage from '../../assets/images/signup-banner-animated.gif';

const StyledBlueHeading = styled(Typography)({
  color: '#000000',
  fontWeight: '600',
});
const LongButton = styled(Button)({
  width: '270px',
  marginTop: '10px',
});
const ImageBox = styled(Box)({
  float: 'right',
  paddingRight: '100px',
});
const InputBox = styled(Box)({
  padding: '10px 0',
});
const FormBox = styled(Box)({
  marginLeft: '150px',
  marginTop: '100px',
});

const SizedBox = styled(Box)({
  margin: '20px 0px',
});
const CheckboxLink = styled(Link)({
  fontSize: '14px',
});
const SignUpLink = styled(Link)({
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: '600',
  paddingLeft: '5px',
});

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [fullName, setFullName] = useState<string>('');
  const [fullNumber, setFullNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const breakPointMobile = useMediaQuery('(max-device-width: 480px)');

  const handleCreateSession = useCallback(() => {
    dispatch(createSessionThunk({
      fullName,
      number: fullNumber,
      email,
      brandName,
      password,
    }));
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormBox sx={{ marginLeft: breakPointMobile ? '40px' : '250px' }}>
            <StyledBlueHeading variant="h3" sx={{ fontSize: breakPointMobile ? '30px' : '25px' }}>
              Welcome to
            </StyledBlueHeading>
            <StyledBlueHeading variant="h3" sx={{ fontSize: breakPointMobile ? '30px' : '25px' }}>Migobucks Brands</StyledBlueHeading>
            <SizedBox />
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-fullname">Name</InputLabel>
                <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} id="input-fullname" fullWidth />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-fullnumber">Mobile Number</InputLabel>
                <Input value={fullNumber} onChange={(e) => setFullNumber(e.target.value)} id="input-fullnumber" />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-email">Email</InputLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="input-email" />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-brand">Brand Name</InputLabel>
                <Input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} id="input-brand" />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-passowrd">Password</InputLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="input-password" />
              </FormControl>
            </InputBox>
            <Checkbox size="small" style={{ padding: '9px 5px 9px 0 ' }} />
            <CheckboxLink to="/"> Accept our Terms and services </CheckboxLink>
            <LongButton onClick={handleCreateSession} type="submit" variant="contained">Signup</LongButton>
            <SizedBox />
            <span style={{ fontSize: '12px', fontWeight: '600' }}>Already have an account? </span>
            <SignUpLink to="/"> Signin Now</SignUpLink>
          </FormBox>
        </Grid>
        {!breakPointMobile && (
          <Grid item xs={8}>
            <ImageBox>
              <img src={animatedImage} width={720} height={720} alt="abc" />
            </ImageBox>

          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SignupPage;
