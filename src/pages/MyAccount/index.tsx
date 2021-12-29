import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BussinessOverview from '../../components/MyAccount/BussinessOverview';
import Layout from '../../components/Dashboard/Layout';
import BankDetails from '../../components/MyAccount/BankDetails';
import BusinessDetails from '../../components/MyAccount/businessDetails';

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const commonStyles = {
  flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: 1281, height: 773, border: 0, boxShadow: 3, background: '#F5F5F5', ml: '120px', mt: '120px',
};

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
        ...commonStyles,
      }}
    >
      <Tabs
        orientation="vertical"
        // variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', color: '#000000' }}
      >
        {/* <Typography variant="h3"> */}
        <h1>KYC Form</h1>
        {/* </Typography> */}
        <Typography variant="h5">
          Complete and submit the form to accept payments.
        </Typography>
        <Tab label="Bank Details" sx={{ background: '#FFFFFF' }} />
        <Tab label="Contact Details" sx={{ background: '#F5F5F5' }} />
        <Tab label="BussinessOverview" />
        <Tab label="Bussiness Details" />
      </Tabs>
      {/* <TabPanel value={value} index={0} /> */}
      <TabPanel value={value} index={2}>
        <BankDetails />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BussinessOverview />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <BusinessDetails />
      </TabPanel>
    </Box>
  );
};

export default MyAccount;
