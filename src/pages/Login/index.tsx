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
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
// import { createSessionThunk } from '../../redux/slices/brand';

import animatedImage from '../../assets/images/login-animated-image.gif';

const StyledBlueHeading = styled(Typography)({
  color: '#000000',
});

const LongButton = styled(Button)({
  width: '270px',
  marginTop: '10px',
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

const SizedBox = styled(Box)({
  margin: '20px 0px',
});
const CheckboxLink = styled(Link)({
  fontSize: '14px',
});

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const breakPointMobile = useMediaQuery('(max-device-width: 480px)');

  // const handleCreateSession = useCallback(() => {
  //   dispatch(createSessionThunk({
  //     email,
  //     password,
  //   }));
  // }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormBox sx={{ marginLeft: breakPointMobile ? '45px' : '150px' }}>
            <StyledBlueHeading variant="h3" sx={{ fontSize: breakPointMobile ? '30px' : '' }}>
              Welcome to
            </StyledBlueHeading>
            <StyledBlueHeading variant="h3" sx={{ fontSize: breakPointMobile ? '30px' : '' }}>Migobucks Brands</StyledBlueHeading>
            <SizedBox />
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-email">Email</InputLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="input-email" required />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-passowrd">Password</InputLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="input-password" required />
              </FormControl>
            </InputBox>
            <Checkbox size="small" />
            <CheckboxLink to="/"> Accept our Terms and services </CheckboxLink>
            <LongButton variant="contained">Signin</LongButton>
          </FormBox>
        </Grid>
        {!breakPointMobile && (
          <Grid item xs={8}>
            <ImageBox>
              <img src={animatedImage} width={900} height={600} alt="abc" />
            </ImageBox>

          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default LoginPage;
