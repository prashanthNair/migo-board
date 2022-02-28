/* eslint-disable no-debugger */
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductDetailsPannel from './ProductDetailsPannel';
import AdditionInfoPannel from './AdditionInfoPannel';
import DescriptionPannel from './DescriptionPannel';
import PricingPannel from './Pricing';
import { useAppDispatch } from '../../redux/hooks';

export default function ProductTab() {
  debugger;

  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('1');

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  const switchTabs = (e:any, val:any) => {
    setValue(val);
  };

  const handleNext = (e: any) => {
    console.log('Submit clicked');
    // props.activeTab(e, '3');
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', backgroundColor: '#FAFAFA' }}>
      <TabContext value={value}>
        <Box sx={{
          borderBottom: 1, borderColor: 'divider', width: '95%', background: '#efefef', position: 'fixed', zIndex: 1000,
        }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Product Details" value="1" />
            <Tab label="Discription" value="2" />
            <Tab label="Addtional Info" value="3" />
            <Tab label="Pricing And Shiping" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProductDetailsPannel activeTab={switchTabs} />

        </TabPanel>
        <TabPanel value="2">
          <DescriptionPannel activeTab={switchTabs} />
        </TabPanel>
        <TabPanel value="3">
          <AdditionInfoPannel activeTab={switchTabs} />
        </TabPanel>
        <TabPanel value="4">
          <PricingPannel />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
