import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button, styled } from '@mui/material';
import { width } from '@mui/system';
import BussinessOverview from '../../components/MyAccount/businessDetails';
import BusinessDetails from '../../components/MyAccount/bussinessOverview.';

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const commonStyles = {
  display: 'flex',
  border: 0,
  boxShadow: 3,
  width: '90%',
  m: 2,
  ml: 8,
  height: 800,
};

const CustomTab = styled(Tab)({
  flexDirection: 'row',
});

const Done = styled(CheckCircleRoundedIcon)({
  marginTop: 5,
  marginRight: 10,
  alignItems: 'flex-start',
  color: 'green',
});
const NotDone = styled(CheckCircleRoundedIcon)({
  marginTop: 5,
  marginRight: 10,
  alignItems: 'flex-start',
  color: 'grey',
});

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
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Typography variant="h5" style={{ marginLeft: 50 }}>
          <h5>KYC Form</h5>
        </Typography>
        <CustomTab icon={<Done />} label="    Contact Details" />
        <CustomTab icon={<NotDone />} label="Bussiness Details" />
        <CustomTab icon={<NotDone />} label="BussinessOverview" />
      </Tabs>
      <TabPanel value={value} index={2}>
        <BusinessDetails />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BussinessOverview />
      </TabPanel>

    </Box>
  );
};

export default MyAccount;
