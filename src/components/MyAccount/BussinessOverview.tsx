import React, { useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../redux/hooks';
import { createKycThunk } from '../../redux/slices/brand/kyc';

const BussinessOverview: React.FC = () => {
  const dispatch = useAppDispatch();

  const [businessname, setbusinessname] = useState<string>('');
  const [category, setcategory] = useState<string>('');
  const [businessdescription, setbusinessdescription] = useState<string>('');
  const [website, setwebsite] = useState<string>('');

  const handleCreateSession = useCallback(() => {
    debugger; // eslint-disable-line no-debugger
    dispatch(
      createKycThunk({
        businessname, category, businessdescription, website,
      }),
    );
  }, []);

  const handleSubmit = () => {
    // event.preventDefault();
    console.log('formValues');
  };

  return (
    <div>
      <Typography variant="h5">
        BUSINESS OVERVIEW
      </Typography>
      <form>
        <Box
          component="form"
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
                value={businessname}
                onChange={(e) => setbusinessname(e.target.value)}
                label="Bussiness Name"
                placeholder="Bussiness Name"
                type="text"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="Bussiness Category"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                label="Bussiness Category"
                placeholder="Bussiness Category"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="businessdescription"
                value={businessdescription}
                onChange={(e) => setbusinessdescription(e.target.value)}
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
            <Button variant="contained" onClick={handleCreateSession} color="primary" type="submit">
              save
            </Button>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default BussinessOverview;
