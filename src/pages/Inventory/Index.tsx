import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../../components/Dashboard/Layout'; 
import ProductList from '../../components/Invenatory/ProductList';

const Inventory: React.FC = (state) => {
  const navigate = useNavigate();
  const params = useLocation();
  const handleNavigation = async () => {
    navigate('/createProduct');
  };

  return (

    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#FAFAFA',
    }}
    >
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, marginBottom: 10, marginRight: 50,
      }}
      >
        <Button
          variant="contained"
          onClick={handleNavigation}
          style={{
            height: 42, width: 100, fontSize: '0.6rem', fontWeight: 'bolder',
          }}
        >
          Add New
        </Button>
      </div>

      <ProductList />

    </div>
  );
};

export default Inventory;
