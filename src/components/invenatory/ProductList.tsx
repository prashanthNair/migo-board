import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';  
import ComboTab from './ComboTab';
import ExclusiveTab from './ExclusiveTab';

export default function ProductList() {
  const BrandId = 'B001';
  const [value, setValue] = React.useState('1');
  let exTabs: any = [{ label: ' ', id: '' }];
  let comboTabs: any = [{ label: ' ', id: '' }];
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const exclusiveData: any = useAppSelector((state) => state.inventory.data.Exclusive);
  const comboData: any = useAppSelector((state) => state.inventory.data.Combo);
  const exclusiveKeys = Object.keys(exclusiveData);
  const comboKeys = Object.keys(comboData);
  exTabs = _.map(exclusiveKeys, (val, key) => ({
    id: `${key}`,
    label: `${val}`,
  }));
  comboTabs = _.map(comboKeys, (val, key) => ({
    id: `${key}`,
    label: `${val}`,
  }));

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Exclusive" value="1" />
            <Tab label="Combo" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><ExclusiveTab tabs={exTabs} data={exclusiveData} /></TabPanel>
        <TabPanel value="2"><ComboTab tabs={comboTabs} data={comboData} /></TabPanel>
      </TabContext>
    </Box>
  );
}
