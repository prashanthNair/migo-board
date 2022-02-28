import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductList from '../../components/Invenatory/ProductList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProductsByBrandIdThunk } from '../../redux/slices/inventory';
import { IProductsPayyload } from '../../interfaces/IProductsPayyload';

const InventoryContainer: React.FC = (state) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const brandId = localStorage.getItem('BrandID');
  const params:IProductsPayyload = { BrandId: 'B001' };
  dispatch(getProductsByBrandIdThunk(params));
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

export default InventoryContainer;
