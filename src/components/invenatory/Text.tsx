import { Box, styled, TextField } from '@mui/material';
import React, { useState } from 'react';

function TextPanel() {
  const product:any = {};
  const [productDetails, setProductDetails] = useState(product);
  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  });
  const LeftContainer = styled(Box)({
    flexGrow: 4,
    padding: 5,
    maxWidth: '25%',
    backgroundColor: '#ffffff',
    width: '25%',
  });
  const RightContainer = styled('div')({
    flexGrow: 6,
    padding: 5,
    maxWidth: '75%',
  });
  const Footer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    background: '#ffffff',
    alignContent: 'flex-end',
    width: '100%',
    padding: 10,
  });

  const handleChange = (event:any) => {
    const { name } = event.target;
    const { value } = event.target;
    setProductDetails((p:any) => ({
      ...productDetails,
      [name]: value,
    }));
  };

  return (

    <div>
      <div>
        <TextField label="Name TEST" name="name" value={product.name} key="name" onChange={handleChange} />
        <TextField label="Category TEST" name="Category" value={product.Category} key="Category" onChange={handleChange} />
        <TextField label="BrandName TEST" name="BrandName" value={product.BrandName} key="BrandName" onChange={handleChange} />
      </div>
    </div>
  );
}

export default TextPanel;
