/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Box,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProduct';
import { VarriantDetails } from '../../redux/slices/inventory';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Container = styled('div')({
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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

function DescriptionPannel(props:any) {
  const product:any = { Size: '', Color: '' };
  let details:any = {};
  const [productDetails, setProductDetails] = useState(product);
  const dispatch = useAppDispatch();

  const getProductInfo = () => {
    details = useAppSelector(
      (state) => state.inventory.productDetails,
    );
    console.log(details);

    if (details) {
      const keys = Object.keys(product);
      keys.forEach((x) => {
        product[x] = details[x];
      });
    }
    console.log(product);
  };

  const handleCreateSession = async () => {
    const productInfo = await dispatch(
      VarriantDetails(productDetails),
    );
    if (productInfo.payload) {
      console.log('brandinfo', productInfo.payload);
    }
  };

  getProductInfo();

  useEffect(() => {
    // setProductDetails({ ...product });
  });
  const handleNext = (e: any) => {
    handleCreateSession();
    props.activeTab(e, '3');
  };
  const handleBack = (e: any) => {
    props.activeTab(e, '1');
  };

  const handleChange = (event:any) => {
    const { name } = event.target;
    const { value } = event.target;
    setProductDetails((p:any) => ({
      ...productDetails,
      [name]: value,
    }));
  };

  return (
    <Container>
      <RightContainer>

        <div style={{ display: 'flex', paddingLeft: 10, backgroundColor: '#ffffff' }}>
          <h5>Listing Status</h5>

        </div>
        <FlexBox>
          <h4>Product Details</h4>
          <TextField size="small" style={{ width: '99%' }} key="Size" label="Size" name="Size" onChange={handleChange} value={productDetails.Size} required variant="outlined" />

          <TextField size="small" style={{ width: '99%' }} key="Tittle" label="Color" name="Color" onChange={handleChange} value={productDetails.Color} required variant="outlined" />

        </FlexBox>
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

export default DescriptionPannel;
