import React, { useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
import { createKycBusinessOverviewThunk } from '../../redux/slices/brand';
import { RootState } from '../../redux/store';

const BussinessOverview: React.FC = () => {
  const dispatch = useAppDispatch();

  const [businessName, setbusinessName] = useState<string>('');
  const [businessCategory, setbusinessCategory] = useState<string>('');
  const [businessDiscription, setbusinessDiscription] = useState<string>('');
  const [website, setwebsite] = useState<string>('');
  const navigate = useNavigate();
  const brandState = useSelector((state: RootState) => state);
  const BrandId = brandState.Onboarding?.accountInfo?.BrandId;

  const handleCreateSession = async () => {
    debugger; // eslint-disable-line no-debugger
    const businessOverviewInfo = await dispatch(
      createKycBusinessOverviewThunk({
        website, businessDiscription, businessName, businessCategory, BrandId,
      }),
    );
    if (businessOverviewInfo.payload) {
    // eslint-disable-next-line no-console
      console.log('brandinfo', businessOverviewInfo.payload);
      navigate('/dashboard');
    }
  };

  const handleSubmit = () => {
    // event.preventDefault();
    console.log('formValues');
  };

  return (
    <div>
      <Typography variant="h5">
        BUSINESS OVERVIEW
      </Typography>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
        border-radius="8px"
        ml="5em"
        mt="2em"
      >
        <Grid alignItems="center" direction="column">
          <Grid>
            <TextField
              id="businessname"
              name="Bussiness Name"
              value={businessName}
              onChange={(e) => setbusinessName(e.target.value)}
              label="Bussiness Name"
              placeholder="Bussiness Name"
              type="text"
              required
            />
          </Grid>
          <Grid>
            <TextField
              id="Bussiness Category"
              value={businessCategory}
              onChange={(e) => setbusinessCategory(e.target.value)}
              label="Bussiness Category"
              placeholder="Bussiness Category"
              required
            />
          </Grid>
          <Grid>
            <TextField
              id="businessdescription"
              value={businessDiscription}
              onChange={(e) => setbusinessDiscription(e.target.value)}
              label="Bussiness Description"
              placeholder="Bussiness Description"
              required
            />
          </Grid>
          <Grid>
            <TextField
              id="website"
              value={website}
              onChange={(e) => setwebsite(e.target.value)}
              label="Bussiness Website"
              placeholder="Bussiness Website"
              required
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit" onClick={handleCreateSession}>
            save
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default BussinessOverview;
