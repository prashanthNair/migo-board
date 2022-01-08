import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { setProducts } from '../../redux/actions/productsActions';
// import Card from './Card';
import Layout from '../../components/Dashboard/Layout';
import MyProducts from '../../components/invenatory/MyProducts';

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

const Inventory: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [secondValue, setSecondValue] = React.useState(0);
  const handleChanged = (event: React.SyntheticEvent, newSecondValue: number) => {
    setSecondValue(newSecondValue);
  };
  // const products = useSelector((state) => state.allProducts.products);
  // const dispatch = useDispatch();

  const handleNavigation = async () => {
    alert('Clicked');
    navigate('/createProduct');
  };

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err: ', err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Layout>
      <TopNavigationBar>
        <Products>
          <List>
            <Tabs onChange={handleChange} value={value} aria-label="Tabs where selection follows focus" selectionFollowsFocus>
              <Tab label="Exclusive Product ()" />
              <Tab label="Combo ()" />
              <Tab label="Voucher ()" />
              <Tab label="Inactive ()" />
            </Tabs>
          </List>
          {/* <Link to="/createProduct"> */}

          <Button variant="contained" onClick={handleNavigation} style={{ height: '25px', fontSize: '0.6rem', fontWeight: 'bolder' }}>Add New</Button>
          {/* </Link> */}
        </Products>
        <BreackLine />
        <Products>
          <List>
            <Tabs TabIndicatorProps={{ style: { background: '#EF3784' } }} onChange={handleChanged} value={secondValue} aria-label="Tabs where selection follows focus" selectionFollowsFocus>
              <Tab label="Category ()" />
              <Tab label="Category ()" />
              <Tab label="Category ()" />
              <Tab label="Category ()" />
              <Tab label="Category ()" />
              <Tab label="Category ()" />
              <Tab label="Category ()" />
              <Tab label="Category ()" />
            </Tabs>
          </List>
          <Link to="/">
            <AddCategories>+Add Categories</AddCategories>
          </Link>
        </Products>
      </TopNavigationBar>
      <Flex>
        {/* <Card /> */}
      </Flex>
    </Layout>
  );
};

export default Inventory;
