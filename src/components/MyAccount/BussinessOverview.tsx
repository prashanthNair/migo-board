import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

const BussinessOverview: React.FC = () => {
  const handleSubmit = () => {
    // event.preventDefault();
    console.log('formValues');
  };

  return (
    <div>
      <Typography variant="h5">
        BUSINESS OVERVIEW
      </Typography>
      <form onSubmit={handleSubmit}>
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
                id="name-input"
                name="Bussiness Name"
                label="Bussiness Name"
                placeholder="Bussiness Name"
                type="text"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="age-input"
                label="Bussiness Category"
                type="number"
                value="demo"
                placeholder="Bussiness Category"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="age-input"
                label="Bussiness Description"
                type="number"
                value="demo"
                placeholder="Bussiness Description"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="age-input"
                label="Bussiness Website"
                type="number"
                value="demo"
                placeholder="Bussiness Website"
                required
              />
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default BussinessOverview;
