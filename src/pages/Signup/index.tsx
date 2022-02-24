/* eslint-disable no-alert */
import React, { useState, useCallback, useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/hooks';
import { BrandState, createSessionThunk, getBrandInfoThunk } from '../../redux/slices/brand';

import siginupImage from '../../assets/images/signup.png';
import { RootState } from '../../redux/store';

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

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [gstn, setGstn] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const navigate = useNavigate();
  const brandState = useSelector((state: RootState) => state);
  const breakPointMobile = useMediaQuery('(max-device-width: 480px)');
  const brandId = brandState.Onboarding?.accountInfo?.BrandId;
  const email:string = brandState.Onboarding?.accountInfo?.EmailId || '';

  const handleBrandInfo = async () => {
    const brandinfo = await dispatch(
      createSessionThunk({
        brandId,
        name,
        mobile,
        brandName,
        gstn,
      }),
    );
    if (brandinfo.payload) {
      // eslint-disable-next-line no-console
      console.log('brandinfo', brandinfo.payload);
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    const brandInfo = dispatch(getBrandInfoThunk(email));
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormBox sx={{ marginLeft: breakPointMobile ? '40px' : '250px' }}>
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
                <InputLabel htmlFor="input-fullname">Name</InputLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="input-fullname"
                  fullWidth
                />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-fullnumber">
                  Mobile
                </InputLabel>
                <Input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  id="input-fullnumber"
                />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-brand">Brand Name</InputLabel>
                <Input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  id="input-brand"
                />
              </FormControl>
            </InputBox>
            <InputBox>
              <FormControl variant="standard" sx={{ width: '25ch' }}>
                <InputLabel htmlFor="input-passowrd">GST Number</InputLabel>
                <Input
                  type="password"
                  value={gstn}
                  onChange={(e) => setGstn(e.target.value)}
                  id="input-password"
                />
              </FormControl>
            </InputBox>
            <LongButton
              onClick={handleBrandInfo}
              type="submit"
              variant="contained"
            >
              Submit
            </LongButton>
            <SizedBox />
          </FormBox>
        </Grid>
        {!breakPointMobile && (
          <Grid item xs={8}>
            <ImageBox>
              <img src={siginupImage} width={720} height={720} alt="abc" />
            </ImageBox>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SignupPage;
