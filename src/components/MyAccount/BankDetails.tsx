import React, { useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../redux/hooks';
import { createKycBankThunk } from '../../redux/slices/brand/bank';

const BankDetails: React.FC = () => {
  const dispatch = useAppDispatch();

  const [beneficiaryname, setbeneficiaryname] = useState<string>('');
  const [accountholderame, setaccountholderame] = useState<string>('');
  const [branchifsccode, setbranchifsccode] = useState<string>('');
  const [accountnumber, setaccountnumber] = useState<string>('');

  const handleCreateSession = useCallback(() => {
    // debugger; // eslint-disable-line no-debugger
    dispatch(
      createKycBankThunk({
        beneficiaryname, accountholderame, branchifsccode, accountnumber,
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
        Bank Details
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
                id="name-input"
                name="Beneficiary Name"
                label="Beneficiary Name"
                placeholder="Bussiness Name"
                value={beneficiaryname}
                onChange={(e) => setbeneficiaryname(e.target.value)}
                type="text"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="AccountHolderame"
                label="Account Holderame"
                type="number"
                value={accountholderame}
                onChange={(e) => setaccountholderame(e.target.value)}
                placeholder="Account Holderame"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="Branch Ifsc Code"
                label="Branch Ifsc Code"
                type="number"
                value={branchifsccode}
                onChange={(e) => setbranchifsccode(e.target.value)}
                placeholder="Branch Ifsc Code"
                required
              />
            </Grid>
            <Grid>
              <TextField
                id="Account Number"
                label="Account Number"
                type="number"
                value={accountnumber}
                onChange={(e) => setaccountnumber(e.target.value)}
                placeholder="Account Number"
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

export default BankDetails;
