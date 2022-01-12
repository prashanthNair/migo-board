import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { setProducts } from '../../redux/actions/productsActions';
import { useSelector } from 'react-redux';
import Product from './Product';
import Layout from '../Dashboard/Layout';
// import data from './mockdata/data.json';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProductsThunk } from '../../redux/slices/inventory';

interface ProductInfo{
  BrandId:String
}
const TopNavigationBar = styled(Box)({
  background: '#FAFAFA',
});
const Products = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 10px 0 10px',
});
const List = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
});
const BreackLine = styled(Box)({
  width: '100%',
  height: '2px',
  background: '#D7D7D7',
});
const AddCategories = styled(Typography)({
  fontSize: '0.8rem',
  fontWeight: 'bold',
  color: '#1B75BB',
  paddingTop: '10px',
});
const Flex = styled(Box)({
  margin: '5px',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
});

const MyProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  // const BrandId = brandState.Onboarding?.accountInfo?.BrandId;
  const BrandId = 'B001';
  const [value, setValue] = React.useState(0);
  const [productType, setProductType] = React.useState({});
  // const handlechangeProductType = (type:{}) => {
  //   setProductType(type);
  // };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handlechangeProductType = (type:{}) => {
    setProductType(type);
  };
  // const [secondValue, setSecondValue] = React.useState(0);
  // const handleChanged = (event: React.SyntheticEvent, newSecondValue: number) => {
  //   setSecondValue(newSecondValue);
  // };
    // const products = useSelector((state) => state.allProducts.products);
    // const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get('https://fakestoreapi.com/products')
  //     .catch((err) => {
  //       console.log('Err: ', err);
  //     });
  // };
  // const raw = console.log(data);
  // const mappedData = data.map((ietms) => ietms.ProductCategory);
  // console.log(mappedData);
  useEffect(() => {
    dispatch(getProductsThunk({
      BrandId,
    }));
  }, []);
  const Exclusive = useAppSelector((state) => state.inventory.data.Exclusive);
  const Combo = useAppSelector((state) => state.inventory.data.Combo);

  // console.log(Object.values(productType));

  const data = new Set(Object.keys(productType));
  const categories = Array.from(data);
  console.log(Exclusive);
  useEffect(() => {
    // fetchProducts();
  }, []);
  return (
    <div>
      <TopNavigationBar>
        <Products>
          <List>
            <Tabs onChange={handleChange} value={value} aria-label="Tabs where selection follows focus" selectionFollowsFocus>
              <Tab label="Exclusive" onClick={() => { handlechangeProductType(Exclusive); }} />
              <Tab label="Combo" onClick={() => { handlechangeProductType(Combo); }} />
            </Tabs>
          </List>
          <Link to="/">
            <Button variant="contained" style={{ height: '25px', fontSize: '0.6rem', fontWeight: 'bolder' }}>Add New</Button>
          </Link>
        </Products>
      </TopNavigationBar>
      <BreackLine />
      <TopNavigationBar>
        <Products>
          <List>
            <Tabs TabIndicatorProps={{ style: { background: '#EF3784' } }} aria-label="Tabs where selection follows focus" selectionFollowsFocus>
              {productType
                ? Object.values(categories).map((category) => (<Tab label={category} value={category} />))
                : <Tab label="Category ()" /> }
            </Tabs>
          </List>
        </Products>
      </TopNavigationBar>

      <Flex>
        <Product currentProducts={{}} />
      </Flex>

    </div>
  );
};

export default MyProducts;
