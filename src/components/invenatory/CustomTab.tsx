/* eslint-disable react/destructuring-assignment */
/* eslint-disable dot-notation */
/* eslint-disable quotes */

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomList from "./CustomList";

export default function CustomTabs(props: any) {
  const { tabs, data } = props;

  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", backgroundColor: '#FAFAFA' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Product Categories">
            {tabs.map((x: any, index: any) => (
              <Tab label={x} value={index} />
            ))}
          </TabList>
        </Box>
        {tabs.map((x: string, index: any) => (
          <TabPanel style={{ backgroundColor: '#E5E5E5' }} value={index?.toString()}>
            <CustomList data={data[x]} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
