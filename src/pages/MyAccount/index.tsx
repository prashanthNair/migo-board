import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BussinessOverview from '../../components/MyAccount/BussinessOverview';
import Layout from '../../components/Dashboard/Layout';
import BusinessDetails from '../../components/MyAccount/businessDetails';

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MyAccount: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Contact Details" />
        <Tab label="BussinessOverview" />
        <Tab label="Bussiness Details" />
      </Tabs>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1}>
        <BussinessOverview />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BusinessDetails />
      </TabPanel>
    </Box>
  );
};

export default MyAccount;
