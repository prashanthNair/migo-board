import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import OrdersTable from '../../components/OrderTable/index';

const Orders: React.FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const CustomTabPanel = styled(TabPanel)({
    paddingLeft: 5,

  });

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
          <CustomTabPanel value="1"><OrdersTable /></CustomTabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Orders;
