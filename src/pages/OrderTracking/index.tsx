/* eslint-disable no-debugger */
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import OrdersTable from '../../components/OrderTable/index';
import { getOrdersByBrandIdThunk } from '../../redux/slices/orderTracking';
import { useAppSelector } from '../../redux/hooks';

const CustomTabPanel = styled(TabPanel)({
  paddingLeft: 5,
});
const OrderTracking: React.FC = () => {
  // const [data, setData] = React.useState([]);4
  const [value, setValue] = React.useState('0');
  const orders = useAppSelector(
    (states) => states.orderTracking.Orders,
  );
  debugger;

  let brandId: any = localStorage.getItem('BrandID');
  brandId = 'B001';
  const dispatch = useDispatch();
  dispatch(getOrdersByBrandIdThunk(brandId));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext
        value={value}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#F7F7F7' }}>
          <TabList
            onChange={handleChange}
          >
            <Tab label="New Orders" value="1" />
          </TabList>
          <CustomTabPanel value="1"><OrdersTable data={orders} /></CustomTabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default OrderTracking;
