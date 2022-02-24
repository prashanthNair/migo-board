/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Box,
  styled,
} from '@mui/material';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AdditionalInfo } from '../../redux/slices/inventory';
import { ADDITIONAL_INFO_VALIDATION } from '../../lib/Validations/Validation';

const FlexBox = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  borderRadius: 5,
  width: '99%',
  padding: 10,
  flexWrap: 'wrap',
  columnGap: 10,
  rowGap: 10,
  marginTop: 10,
});
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 30,
  justifyContent: 'space-between',
});

const RightContainer = styled(Box)({
  flexGrow: 6,
  padding: 5,
});
const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  background: '#ffffff',
  alignContent: 'flex-end',
  width: '100%',
  padding: 10,
});
function AdditionInfoPannel(props:any) {
  const product:any = {
    AgeGroup: '', ReturnAndRefund: '', Warranty: '', InBox: '', Notes: '',
  };
  let details:any = {};
  const [productDetails, setProductDetails] = useState(product);
  const [validationOptions, setvalidationOptions] = useState(ADDITIONAL_INFO_VALIDATION);
  const dispatch = useAppDispatch();

  const getProductInfo = () => {
    debugger;
    details = useAppSelector(
      (state) => state.inventory.productDetails,
    );
    if (details) {
      const keys = Object.keys(product);
      keys.forEach((x) => {
        product[x] = details[x];
      });
    }
    console.log(product);
  };
  getProductInfo();

  const handleCreateSession = async () => {
    const productInfo = await dispatch(
      AdditionalInfo(productDetails),
    );
  };

  useEffect(() => {
    // setProductDetails({ ...product });
  }, []);

  const handleBack = (e: any) => {
    handleCreateSession();
    props.activeTab(e, '2');
  };

  const handleChange = (event:any) => {
    const { name } = event.target;
    const { value } = event.target;
    setProductDetails((p:any) => ({
      ...productDetails,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    let count = 0;
    const productModelkeys = Object.keys(product);
    productModelkeys.forEach((x: any) => {
      if (productDetails && x && !productDetails[x]) {
        if (validationOptions[x]) {
          validationOptions[x].error = true;
          count += 1;
        }
      } else if (validationOptions[x]) { validationOptions[x].error = false; }
    });
    setvalidationOptions((p:any) => ({
      ...validationOptions,
    }));
    return count;
  };

  const handleNext = (e: any) => {
    if (validateInputs() === 0) {
      handleCreateSession();
      props.activeTab(e, '4');
    }
  };

  return (
    <Container>
      <RightContainer>

        <FlexBox>
          <TextField style={{ width: '40%' }} label="Age Group" onBlur={validateInputs} helperText={validationOptions.AgeGroup.error ? validationOptions.AgeGroup.message : ''} error={validationOptions.AgeGroup.error} onChange={handleChange} value={productDetails.AgeGroup} name="AgeGroup" key="AgeGroup" required variant="outlined" />
          <TextField style={{ width: '40%' }} label="Warranty" onBlur={validateInputs} helperText={validationOptions.Warranty.error ? validationOptions.Warranty.message : ''} error={validationOptions.Warranty.error} onChange={handleChange} key="Warranty" name="Warranty" value={productDetails.Warranty} required variant="outlined" />
        </FlexBox>
        <FlexBox>
          <TextField style={{ width: '99%' }} label="Return and Refund details" onBlur={validateInputs} helperText={validationOptions.ReturnAndRefund.error ? validationOptions.ReturnAndRefund.message : ''} error={validationOptions.ReturnAndRefund.error} onChange={handleChange} name="ReturnAndRefund" key="ReturnAndRefund" value={productDetails.ReturnAndRefund} required variant="outlined" />
          <TextField style={{ width: '99%' }} label="In the Box" key="InBox" onBlur={validateInputs} helperText={validationOptions.InBox.error ? validationOptions.InBox.message : ''} error={validationOptions.InBox.error} onChange={handleChange} name="InBox" value={productDetails.InBox} required variant="outlined" />
        </FlexBox>

        <FlexBox>
          <TextField
            maxRows={4}
            minRows={8}
            multiline
            placeholder="Important Note"
            key="Notes"
            name="Notes"
            onBlur={validateInputs}
            onChange={handleChange}
            value={productDetails.Notes}
            required
            style={{ width: '99%' }}
          />

        </FlexBox>
        <div style={{ display: 'flex', paddingLeft: 10, backgroundColor: '#ffffff' }}>
          <h5>Tags</h5>
          <Select
            style={{
              width: '20%', height: 50, alignSelf: 'center', margin: 10,
            }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <Footer>

          <Button
            variant="contained"
            style={{
              fontSize: '0.6rem',
              fontWeight: 'bolder',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon
              style={{ fontSize: '10px', color: '#ffffff' }}
            />
            Back

          </Button>
          <Button
            variant="contained"
            style={{
              fontSize: '0.6rem',
              fontWeight: 'bolder',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
            onClick={handleNext}
          >
            Next
            <ArrowForwardIosIcon
              style={{ fontSize: '10px', color: '#ffffff' }}
            />
          </Button>

        </Footer>
      </RightContainer>
    </Container>
  );
}

export default AdditionInfoPannel;
