import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

import Button from '@mui/material/Button';
import { FormControl, styled } from '@mui/material';

const BusinessDetails: React.FC = () => {
  const handleSubmit = () => {
    // event.preventDefault();
    console.log('formValues');
  };

  const InputBox = styled(TextField)({
    height: 50,
    color: 'blue',

  });
  return (
    <div>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        border-radius="8px"

      >
        <Grid alignItems="center" direction="column">
          <Grid>
            <InputBox
              id="name-input"
              name="Bussiness Name"
              label="Bussiness Name"
              placeholder="Bussiness Name"
              type="text"
              variant="standard"
              required
            />
          </Grid>
          <Grid>
            <FormControl variant="standard" sx={{ ml: 1, mb: 2, width: '100%' }}>
              <InputLabel>Bussiness Category</InputLabel>
              <Select
                placeholder="Bussiness Category"
                label="Age"
                variant="standard"
                sx={{ width: '100%' }}
              />
            </FormControl>
          </Grid>
          <Grid>
            <InputBox
              label="Bussiness Description"
              type="text"
              variant="standard"
              placeholder="Bussiness Description"
              required
            />
          </Grid>
          <Grid>
            <InputBox
              id="age-input"
              label="Bussiness Website"
              type="number"
              variant="standard"
              value="demo"
              placeholder="Bussiness Website"
              required
            />
          </Grid>
        </Grid>
        <div style={{
          display: 'flex', flexDirection: 'row', marginTop: 40, justifyContent: 'center',
        }}
        >
          <Button variant="outlined" style={{ width: 100 }}>Save</Button>
        </div>
      </Box>
    </div>
  );
};

export default BusinessDetails;
