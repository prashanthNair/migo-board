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

// <Box>
//   <Grid container spacing={2}>
//     <Grid item xs={12} sm={6} md={4}>
//       <FormBox>
//         <StyledBlueHeading variant="h3">
//           Welcome to
//           {' '}
//           <br />
//           Migobucks Brands
//         </StyledBlueHeading>
//         <InputBox>
//           <FormControl variant="standard" sx={{ width: '25ch' }}>
//             <InputLabel htmlFor="name">Name</InputLabel>
//             <Input id="name" />
//           </FormControl>
//         </InputBox>
//         <InputBox>
//           <FormControl variant="standard" sx={{ width: '25ch' }}>
//             <InputLabel htmlFor="number">Mobile Number</InputLabel>
//             <Input id="number" />
//           </FormControl>
//         </InputBox>
//         <InputBox>
//           <FormControl variant="standard" sx={{ width: '25ch' }}>
//             <InputLabel htmlFor="email">Email</InputLabel>
//             <Input id="email" />
//           </FormControl>
//         </InputBox>
//         <InputBox>
//           <FormControl variant="standard" sx={{ width: '25ch' }}>
//             <InputLabel htmlFor="brand-name">Brand Name</InputLabel>
//             <Input id="brand-name" />
//           </FormControl>
//         </InputBox>
//         <InputBox>
//           <FormControl variant="standard" sx={{ width: '25ch' }}>
//             <InputLabel htmlFor="password">Password</InputLabel>
//             <Input id="password" />
//           </FormControl>
//         </InputBox>
//         <InputBox>
//           <FormGroup>
//             <FormControlLabel control={<Checkbox />} label="Accept our Terms and services" />
//           </FormGroup>
//           <LongButton variant="contained">Signup</LongButton>
//         </InputBox>
//       </FormBox>
//     </Grid>
//     <Grid item sm={6} md={8}>
//       <ImageBox>
//         <img src={animatedImage} width={800} height={650} alt="abc" />
//       </ImageBox>
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
          <FormBox sx={{ marginLeft: breakPointMobile ? '40px' : '150px' }}>
            <StyledBlueHeading variant="h3">
              Welcome to
            </StyledBlueHeading>
            <StyledBlueHeading variant="h3">Migobucks Brands</StyledBlueHeading>
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
            <Checkbox size="small" />
            <CheckboxLink to="/"> Accept our Terms and services </CheckboxLink>
            <LongButton onClick={handleCreateSession} type="submit" variant="contained">Signup</LongButton>
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

export default SignupPage;
