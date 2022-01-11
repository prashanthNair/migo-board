/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-debugger */
import {
  Box, CardActions, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, Input, InputLabel, ListSubheader, styled, Typography,
} from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import _ from 'lodash';
import { Label } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import Layout from '../Dashboard/Layout';
import { useDynamic, IData } from '../../hooks/dynamic';
import { orderObjectBy } from '../../lib/order';
import ImageContainer from './ImageContainer';
import { CATEGORIES, TEMPLATE } from '../../lib/data';
import { PRODUCT_TEMPLATE } from '../../lib/templates/template';
import { IProduct } from '../../interfaces/IProduct';

const TopBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#FAFAFA',
  padding: '20px',
});
const Heading = styled(Typography)({
  color: '#11263C',
  fontsize: '20px',
  fontWeight: 'bold',
});
const LeftContainer = styled(Box)({
  flexGrow: 4, padding: 5, maxWidth: '60%', width: '40%', borderWidth: 1, borderStyle: 'solid',
});
const RightContainer = styled(Box)({
  flexGrow: 6, padding: 5, borderWidth: 1, borderStyle: 'solid',
});

const FlexBox = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  borderRadius: 5,
  width: '99%',
  padding: 10,
  flexWrap: 'wrap',
  columnGap: 10,
  rowGap: 10,
  marginTop: 10,
});
const ItemBox = styled('div')({
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  borderRadius: 5,
  width: '99%',
  padding: 10,
  flexWrap: 'wrap',
  columnGap: 10,
  rowGap: 10,
  marginBottom: 10,
});

const Container = styled('div')({
  overflow: 'scroll',
  height: '100vh',
  display: 'flex',
  borderWidth: 1,
  borderStyle: 'solid',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const data: IData[] = TEMPLATE;
const sortedData = orderObjectBy({
  data,
  key: ['filedPosition'],
  direction: 'asc',
}) as IData[];

const CreateProduct = () => {
  const products:any = {};
  const [product, setProduct] = useState(products);
  const [template, settemplate] = useState({});
  const handleChange = (e:any) => {
    debugger;
    const { name, value } = e.target;
    setProduct((prevState:any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (e:any) => {
    debugger;
    const tem = PRODUCT_TEMPLATE;
    // const template = PRODUCT_TEMPLATE[e.target.value];
  };

  const handleSubmit = (e:any) => {
    console.log(product);
  };

  const components = useDynamic({ data: sortedData });
  return (
    <Layout>
      <TopBar>
        <Heading>
          Add Product
          <ErrorOutlineOutlinedIcon
            style={{ fontSize: '10px', color: '#D0D1D2' }}
          />
        </Heading>
        <Button
          variant="contained"
          style={{
            height: '30px',
            fontSize: '0.6rem',
            fontWeight: 'bolder',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          Next
          <ArrowForwardIosOutlinedIcon
            style={{ fontSize: '10px', color: '#ffffff' }}
          />
        </Button>
      </TopBar>
      <Container>
        <LeftContainer>
          <ItemBox>
            <Heading>
              Product Type
            </Heading>
            <div>
              <RadioGroup
                row
                aria-label="producttype"
                name="ProductType"
                value={product.ProductType}
                onClick={handleChange}
              >
                <FormControlLabel
                  value="exclusive"
                  checked
                  control={<Radio />}
                  label="Exclusive"
                />
                <FormControlLabel
                  value="combo"
                  control={<Radio />}
                  label="Combo"
                />
              </RadioGroup>
            </div>
          </ItemBox>
          <FlexBox>
            <div style={{ width: '30%' }}>
              <label htmlFor="contained-button-file">
                <Input id="contained-button-file" type="file" placeholder="file" />
              </label>
            </div>
            <div>
              <Button variant="contained" component="span">
                Upload
              </Button>
            </div>
          </FlexBox>

        </LeftContainer>
        <RightContainer>
          <ItemBox>
            <Heading>
              Product Details
            </Heading>
          </ItemBox>
          <FlexBox>
            <TextField name="ProductName" onChange={handleChange} value={product.ProductName} style={{ width: '25%' }} label="Product Name" required variant="outlined" />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={product.Category}
                name="Category"
                label="Age"
                key="Category"
                onClick={handleClick}
                onChange={handleChange}
              >
                {
                CATEGORIES.map((x) => <MenuItem>{x.Value}</MenuItem>)
              }

              </Select>
            </FormControl>
          </FlexBox>
          <FlexBox>
            <TextField onChange={handleChange} value={product.Tittle} name="Tittle" label="Tittle" style={{ width: '100%' }} required variant="outlined" />
          </FlexBox>
          <div style={{
            display: 'flex', columnGap: 10, rowGap: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20, padding: 20, backgroundColor: '#ffffff',
          }}
          >

            {components}
          </div>
          <FlexBox>
            <TextField onChange={handleChange} value={product.Stock} name="Stock" label="Stock" style={{ width: '40%' }} required variant="outlined" />
            <TextField onChange={handleChange} value={product.MRP} name="MRP" label="MRP" style={{ width: '40%' }} required variant="outlined" />
            <label>This stock is dedicated to Migobucks</label>
          </FlexBox>
          <FlexBox>
            <Button
              variant="contained"
              style={{
                height: '30px',
                fontSize: '0.6rem',
                fontWeight: 'bolder',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </FlexBox>
        </RightContainer>
      </Container>
    </Layout>
  );
};

export default CreateProduct;
