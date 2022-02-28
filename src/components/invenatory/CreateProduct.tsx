/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import ProductTab from './ProductTab';

const InventoryContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const CreateProduct = () => (

  <InventoryContainer>
    <ProductTab />
  </InventoryContainer>
);

export default CreateProduct;
