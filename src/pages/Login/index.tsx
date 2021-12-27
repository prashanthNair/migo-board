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
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
import loginImage from '../../assets/images/login.png';

import { BrandState, createAccountSessionThunk } from '../../redux/slices/brand';

const StyledBlueHeading = styled(Typography)({
  color: '#000000',
  fontWeight: '600',
});
const Logo = styled('img')({
  width: '50px',
  padding: '50px 0 0 50px',
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
  marginLeft: '250px',
  marginTop: '200px',
});
const SizedBox = styled(Box)({
  margin: '20px 0px',
});
const CheckboxLink = styled(Link)({
  fontSize: '14px',
});
const SignUpLink = styled(Link)({
  textAlign: 'center',
  fontSize: '13px',
  fontWeight: '600',
});

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const breakPointMobile = useMediaQuery('(max-device-width: 480px)');

  const handleCreateSession = async () => {
    const createAccount = await dispatch(
      createAccountSessionThunk({
        email,
        password,
      }),
    );
    if (createAccount.payload) {
      navigate('/signup');
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormBox sx={{ marginLeft: breakPointMobile ? '45px' : '150px' }}>
            <StyledBlueHeading
              variant="h3"
              sx={{ fontSize: breakPointMobile ? '30px' : '25px' }}
            >
              Welcome to
            </StyledBlueHeading>
            <StyledBlueHeading
              variant="h3"
              sx={{ fontSize: breakPointMobile ? '30px' : '25px' }}
            >
              Migobucks Brands
            </StyledBlueHeading>
            <SizedBox />
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-email">Email</InputLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="input-email"
                  required
                />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-passowrd">Password</InputLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="input-password"
                  required
                />
              </FormControl>
            </InputBox>
            <Checkbox size="small" style={{ padding: '9px 9px 9px 0 ' }} />
            <span style={{ fontSize: '14px', fontWeight: '500' }}>
              Accept our
            </span>
            <CheckboxLink to="/"> Terms and services </CheckboxLink>
            <LongButton variant="contained" onClick={handleCreateSession}>
              Create Account
            </LongButton>
            <SizedBox />
            <span
              style={{
                fontSize: '13px',
                fontWeight: '600',
                paddingRight: '9px',
              }}
            >
              Already have an account?
              {' '}
            </span>
            <SignUpLink to="/"> Signin now </SignUpLink>
          </FormBox>
        </Grid>
        {!breakPointMobile && (
          <Grid item xs={8}>
            <ImageBox>
              <img src={loginImage} width={720} height={720} alt="abc" />
            </ImageBox>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default LoginPage;
