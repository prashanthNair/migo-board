/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import ProductTab from './ProductTab';

import Container from '../Container';

const InventoryContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const CreateProduct = () => (
  <Container>
    <InventoryContainer>
      <ProductTab />
    </InventoryContainer>
  </Container>
);

export default CreateProduct;
