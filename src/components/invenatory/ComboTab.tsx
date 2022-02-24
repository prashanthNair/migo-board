import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import _ from 'lodash';
import { styled } from '@mui/styles';
import Card from './Card';

const CustomTabPanel = styled(TabPanel)({
  paddingLeft: 0,
  paddingTop: 0,
});
export default function ComboTab(props:any) {
  const [value, setValue] = React.useState('0');
  const { tabs, data } = props;

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs.map((x: any) => (
              <Tab label={x.label} value={x.id} />
            ))}
          </TabList>
        </Box>
        {
          tabs.map((x: any) => (
            <CustomTabPanel value={x.id}>
              <Card category={x.label} type="Combo" data={data} />
            </CustomTabPanel>
          ))
        }
      </TabContext>
    </Box>
  );
}
