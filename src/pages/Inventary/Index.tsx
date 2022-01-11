import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Dashboard/Layout';
import ProductList from '../../components/invenatory/ProductList';

const Inventory: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = async () => {
    alert('Clicked');
    navigate('/createProduct');
  };

  return (
    <Layout>
      <Button variant="contained" onClick={handleNavigation} style={{ height: '25px', fontSize: '0.6rem', fontWeight: 'bolder' }}>Add New</Button>
      <ProductList />
    </Layout>
  );
};

export default Inventory;
