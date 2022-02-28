/* eslint-disable no-shadow */

/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Box, styled, TextField, Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'; import {
  createProductThunk, inventoryHealthThunk, PricingAndShipingDetails, ProductDetails,
} from '../../redux/slices/inventory';
import NotificationBar from '../Common/NotificationBar';
import { showSuccess } from '../../redux/slices/global';
import { inventroyHealth } from '../../services/inventory';
import { PRICING_VALIDATION } from '../../lib/Validations/Validation';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: 50,
});
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

const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  background: '#ffffff',
  alignContent: 'flex-end',
  width: '100%',
  padding: 10,
});

function PricingPannel(props: any) {
  const product: any = {
    GST: '', LoyaltyPoint: '', BuddyMargin: '', LocalDeliveryCharge: '', NationalDeliveryCharge: '', ZonalDeliveryCharge: '', ReturnPeriod: '',
  };
  let details:any = {};
  const [pricingAndShipingDetails, setPricing] = useState(product);
  const dispatch = useAppDispatch();
  const [hasSuccess, setHasSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [validationOptions, setvalidationOptions] = useState(PRICING_VALIDATION);

  const getProductInfo = () => {
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
  console.log(details);

  // getProductInfo();
  const handleBack = (e: any) => {
    props.activeTab(e, '1');
  };

  const inventory:any = useAppSelector(
    (state) => state.inventory.product,
  );

  const postProduct = async () => {
    const productData = {
      ...inventory.ProductDetails, ...inventory.VarriantDetails, ...inventory.AdditionalInfo, ...pricingAndShipingDetails,
    };
    productData.TraceId = uuidv4();
    productData.BrandId = localStorage.getItem('BrandId');
    const response = await dispatch(createProductThunk(productData));
    if (response.payload) {
      setHasSuccess(true);
    } else {
      setHasError(true);
    }
  };

  const handleChange = (event: any) => {
    const { name } = event.target;
    const { value } = event.target;
    setPricing((p: any) => ({
      ...pricingAndShipingDetails,
      [name]: value,
    }));
  };

  const handleClose = (event:any, reason:any) => {
    if (reason === 'clickaway') {
      return;
    }
    setHasSuccess(false);
    setHasError(false);
  };

  const Alert = React.forwardRef((props:any, ref) => <MuiAlert elevation={6} variant="filled" />);

  const validateInputs = () => {
    let count = 0;
    const productModelkeys = Object.keys(product);
    productModelkeys.forEach((x: any) => {
      if (pricingAndShipingDetails && x && !pricingAndShipingDetails[x]) {
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

  const handleNext = async (e: any) => {
    if (validateInputs() === 0) {
      const response = await dispatch(inventoryHealthThunk());
      postProduct();
    }
  };

  useEffect(() => {
    // setPricing({ ...product });
  });

  return (
    <Container>
      <NotificationBar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} hasOpen={hasError}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Something went wrong!
          <CancelIcon />
        </Alert>
      </NotificationBar>
      <NotificationBar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} hasOpen={hasSuccess}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
          <CancelIcon />
        </Alert>
      </NotificationBar>
      <div style={{ background: '#ffffff', padding: 10, marginLeft: 10 }}>

        <h4 style={{ marginTop: 0, padding: 0 }}>Pricing: </h4>
        <Box component="div" lineHeight={3}>
          <div>
            <TextField onBlur={validateInputs} type="number" helperText={validationOptions.GST.error ? validationOptions.GST.message : ''} error={validationOptions.GST.error} size="small" style={{ width: '20%' }} label="GST" onChange={handleChange} value={pricingAndShipingDetails.GST} name="GST" key="GST" required variant="outlined" />
          </div>
          <div>
            <TextField onBlur={validateInputs} type="number" helperText={validationOptions.BuddyMargin.error ? validationOptions.BuddyMargin.message : ''} error={validationOptions.BuddyMargin.error} size="small" style={{ width: '20%' }} label="Buddy Margin" onChange={handleChange} key="Buddy Margin" name="BuddyMargin" value={pricingAndShipingDetails.BuddyMargin} required variant="outlined" />
          </div>
          <div>
            <TextField onBlur={validateInputs} type="number" helperText={validationOptions.LoyaltyPoint.error ? validationOptions.LoyaltyPoint.message : ''} error={validationOptions.LoyaltyPoint.error} size="small" style={{ width: '20%' }} label="Loyalty Point" onChange={handleChange} name="LoyaltyPoint" key="LoyaltyPoint" value={pricingAndShipingDetails.LoyaltyPoint} required variant="outlined" />
          </div>
        </Box>
      </div>

      <div style={{ background: '#ffffff', padding: 10, margin: 10 }}>

        <h4 style={{ marginTop: 0, padding: 0 }}>Shipment: </h4>
        <Box component="div" lineHeight={3}>
          <div>
            <TextField type="number" onBlur={validateInputs} helperText={validationOptions.LocalDeliveryCharge.error ? validationOptions.LocalDeliveryCharge.message : ''} error={validationOptions.LocalDeliveryCharge.error} size="small" style={{ width: '20%' }} label="Local Delivery Charge" onChange={handleChange} value={pricingAndShipingDetails.LocalDeliveryCharge} name="LocalDeliveryCharge" key="LocalDeliveryCharge" required variant="outlined" />
          </div>
          <div>
            <TextField type="number" size="small" onBlur={validateInputs} helperText={validationOptions.ZonalDeliveryCharge.error ? validationOptions.ZonalDeliveryCharge.message : ''} error={validationOptions.ZonalDeliveryCharge.error} style={{ width: '20%' }} label="Zonal Delivery Charge" onChange={handleChange} key="ZonalDeliveryCharge" name="ZonalDeliveryCharge" value={pricingAndShipingDetails.ZonalDeliveryCharge} required variant="outlined" />
          </div>
          <div>
            <TextField type="number" size="small" onBlur={validateInputs} helperText={validationOptions.NationalDeliveryCharge.error ? validationOptions.NationalDeliveryCharge.message : ''} error={validationOptions.NationalDeliveryCharge.error} style={{ width: '20%' }} label="National Delivery Charge" onChange={handleChange} name="NationalDeliveryCharge" key="NationalDeliveryCharge" value={pricingAndShipingDetails.NationalDeliveryCharge} required variant="outlined" />
          </div>
          <div style={{
            display: 'flex', flexDirection: 'row',
          }}
          >

            <h4 style={{ marginTop: 0, padding: 0 }}>Product Return Priod: </h4>
            <TextField type="number" size="small" onBlur={validateInputs} helperText={validationOptions.ReturnPeriod.error ? validationOptions.ReturnPeriod.message : ''} error={validationOptions.ReturnPeriod.error} style={{ marginLeft: 20, width: '10%' }} label="" onChange={handleChange} key="ReturnPeriod" name="ReturnPeriod" value={pricingAndShipingDetails.ReturnPeriod} required variant="outlined" />
          </div>
        </Box>

      </div>
      <FlexBox>
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
            Submit
            <ArrowForwardIosIcon
              style={{ fontSize: '10px', color: '#ffffff' }}
            />
          </Button>

        </Footer>
      </FlexBox>
    </Container>
  );
}

export default PricingPannel;
