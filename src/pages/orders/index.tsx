import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OrdersTable from '../../components/OrderTable';
import Layout from '../../components/Dashboard/Layout';

const MyOrders: React.FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext
          value={value}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#F7F7F7' }}>
            <TabList
              onChange={handleChange}
            >
              <Tab label="New Orders" value="1" />
              <Tab label="Standard" value="2" />
              <Tab label="Customized" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <OrdersTable />
          </TabPanel>
          <TabPanel value="2"><OrdersTable /></TabPanel>
          <TabPanel value="3"><OrdersTable /></TabPanel>
        </TabContext>
      </Box>
    </Layout>
  );
};

export default MyOrders;
