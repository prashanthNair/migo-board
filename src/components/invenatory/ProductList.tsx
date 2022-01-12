/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useState, useEffect } from 'react';
import { Box, TabsUnstyled, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
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
import CustomTabs from './CustomTab';

function ProductList() {
  const dispatch = useAppDispatch();
  const BrandId = 'B001';
  const [productType, setProductType] = React.useState({});
  const [value, setValue] = React.useState('1');
  const [tabs, setTabs] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = React.useState({});

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    // debugger;
    dispatch(
      getProductsThunk({
        BrandId,
      }),
    );
  }, []);
  const handlechangeProductType = (type:{}) => {
    setCategory(type);
  };

  const exProducts: any = useAppSelector(
    (state) => state.inventory.data.Exclusive,
  );
  const Categories = useAppSelector((state) => state.inventory.data);
  const exTabs = Object.keys(exProducts);
  const Exclusive = useAppSelector((state) => state.inventory.data.Exclusive);
  const Combo = useAppSelector((state) => state.inventory.data.Combo);
  const productsType = Object.keys(useAppSelector((state) => state.inventory.data));

  return (
    <div>
      <Box
        sx={{ width: '100%', typography: 'body1', backgroundColor: '#FAFAFA' }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs aria-label="lab API tabs example">

              <Tab label="Exclusive" onClick={() => handlechangeProductType(Exclusive)} />
              <Tab label="Combo" onClick={() => handlechangeProductType(Combo)} />

            </Tabs>
          </Box>
          <TabPanel value={value}>
            <CustomTabs Categories={category} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ProductList;
