import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Slider from '@material-ui/core/Slider';
import Button from '@mui/material/Button';

const BussinessOverview: React.FC = () => {
  // const dispatch = useAppDispatch();

  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  // const breakPointMobile = useMediaQuery('(max-device-width: 480px)');

  // const handleCreateSession = useCallback(() => {
  //   dispatch(createSessionThunk({
  //     email,
  //     password,
  //   }));
  // }, []);
  const handleSubmit = () => {
    // event.preventDefault();
    console.log('formValues');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid alignItems="center" direction="column">
          <Grid>
            <TextField
              id="name-input"
              name="Bussiness Name"
              label="Bussiness Name"
              placeholder="Bussiness Name"
              type="text"
              required
              // value="demo"
            //   onChange={handleInputChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="age-input"
              // name="age"
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
              // name="age"
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
              // name="age"
              label="Bussiness Website"
              type="number"
              value="demo"
              placeholder="Bussiness Website"
              required
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            save
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default BussinessOverview;
