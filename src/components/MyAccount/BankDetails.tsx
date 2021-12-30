import React, { useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
import { createKycBankThunk } from '../../redux/slices/brand';
import { RootState } from '../../redux/store';

const BankDetails: React.FC = () => {
  const dispatch = useAppDispatch();

  const [beneficiaryname, setbeneficiaryname] = useState<string>('');
  const [accountholderame, setaccountholderame] = useState<string>('');
  const [branchifsccode, setbranchifsccode] = useState<string>('');
  const [accountnumber, setaccountnumber] = useState<string>('');
  const navigate = useNavigate();
  const brandState = useSelector((state: RootState) => state);
  const BrandId = brandState.Onboarding?.accountInfo?.BrandId;

  const handleCreateSession = async () => {
    debugger; // eslint-disable-line no-debugger
    const bankinfo = await dispatch(
      createKycBankThunk({
        beneficiaryname, accountholderame, branchifsccode, accountnumber, BrandId,
      }),
    );
    if (bankinfo.payload) {
    // eslint-disable-next-line no-console
      console.log('brandinfo', bankinfo.payload);
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
        Bank Details
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
    </div>
  );
};

export default BankDetails;
