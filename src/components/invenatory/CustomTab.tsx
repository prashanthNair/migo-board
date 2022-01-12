/* eslint-disable react/destructuring-assignment */
/* eslint-disable dot-notation */
/* eslint-disable quotes */
/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomList from "./CustomList";
import CustomCard from "./CustomCard";

export default function CustomTabs(props: any) {
  const { Categories } = props;
  // debugger;
  const [value, setValue] = React.useState("1");
  const [productType, setProductType] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleChangeProducts = (newValue: string) => {
    setProducts(() => Categories[newValue]);
  };
  const category = Object.keys(Categories);
  return (
    <Box sx={{ width: "100%", typography: "body1", backgroundColor: '#E5E5E5' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Product Categories">
            {category.map((x: any, index: any) => (
              <Tab label={x} value={index} onClick={() => handleChangeProducts(x)} />
            ))}
          </TabList>
        </Box>
        {products.map((x:any, index: any) => (
          <TabPanel value={index + 1}>
            <CustomList CategoryProducts={products} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
