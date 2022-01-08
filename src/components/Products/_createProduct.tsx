/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-debugger */
import {
  Box, CardActions, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, Input, ListSubheader, styled, Typography,
} from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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
const Container = styled(Box)({
  borderWidth: 1,
  display: 'flex',
  borderStyle: 'solid',
  width: '97%',
  margin: 15,
  height: '100vh',
});
const ProductContainer = styled(Box)({
  borderWidth: 1,
  borderStyle: 'solid',
  backgroundColor: '#ffffff',
  width: '70%',
  margin: 2,
  padding: 2,
});
const ProTHeading = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
});
const ProductUpload = styled(Box)({
  borderWidth: 1,
  borderStyle: 'solid',
  width: '42%',
  flexDirection: 'column',
});
const ContainerBox = styled(Box)({
  borderRadius: 5,
  backgroundColor: '#ffffff',
  margin: 5,
  width: '98%',
  paddingLeft: 10,
  paddingRight: 10,
});
const FlexBox = styled(Box)({
  width: '98%',
  padding: 2,
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 3,
  justifyContent: 'space-between',
});
const ProductInfoBox = styled(Box)({
  borderRadius: 5,
  backgroundColor: '#ffffff',
  margin: 5,
  width: '98%',
});
const InputRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  paddingTop: '10px',
  paddingBottom: '10px',
});
const AddNew = styled(Typography)({
  cursor: 'pointer',
  color: '#5DB075',
  fontSize: '0.8rem',
});

// const fakeColumns = [
//   {
//     title: 'Product Name',
//     dataIndex: 'ProductName',
//     key: 'ProductName',
//     sorter(a, b) {
//       return 1;
//     },
//   },
//   {
//     title: 'Avail. in',
//     dataIndex: 'AvailIn',
//     key: 'AvailIn',
//     sorter(a, b) {
//       return 1;
//     },
//   },
//   {
//     title: 'MRP',
//     dataIndex: 'mrp',
//     key: 'mrp',
//     sorter(a, b) {
//       return 1;
//     },
//   },
//   {
//     title: 'Selling Price',
//     dataIndex: 'SellingPrice',
//     key: 'SellingPrice',
//     sorter(a, b) {
//       return 1;
//     },
//   },
//   {
//     title: 'Loyalty Point [%]',
//     dataIndex: 'LoyaltyPoint',
//     key: 'LoyaltyPoint',
//   },
//   {
//     title: 'BuddyMargin',
//     dataIndex: 'BuddyMargin',
//     key: 'BuddyMargin',
//   },
//   {
//     title: 'In Stock',
//     dataIndex: 'inStock',
//     key: 'inStock',
//   },
// ];
export const data: IData[] = [
  {
    displayName: 'Brand',
    dataType: 'text',
    fieldName: 'brandName',
    filedPosition: 90,
  },
  {
    displayName: 'Company Type',
    dataType: 'list',
    fieldName: 'companyType',
    filedPosition: 2,
    data: [
      {
        value: '1',
        name: 'Public',
      },
      {
        value: '3',
        name: 'Private',
      },
      {
        value: '5',
        name: 'None',
      },
    ],
  },
  {
    displayName: 'Shelf Life',
    dataType: 'list',
    fieldName: 'shelfLife',
    filedPosition: 2,
    data: [
      {
        value: '1',
        name: '1 KG',
      },
      {
        value: '2',
        name: '2 KG',
      },
      {
        value: '3',
        name: '3 KG',
      },
      {
        value: '4',
        name: '4 KG',
      },
      {
        value: '5',
        name: '5 KG',
      },
      {
        value: '6',
        name: '6 KG',
      },
    ],
  },
  {
    displayName: 'Max.Retail Price(INR)',
    dataType: 'number',
    fieldName: 'mrp',
    filedPosition: 3,
  },
  {
    displayName: 'Loyalty Point%',
    dataType: 'number',
    fieldName: 'loyaltyPoint',
    filedPosition: 10,
  },
  {
    displayName: 'InStock',
    dataType: 'number',
    fieldName: 'inStock',
    filedPosition: 1,
  },
  {
    displayName: 'Loyalty Point%',
    dataType: 'number',
    fieldName: 'loyaltyPoint',
    filedPosition: 10,
  },
  {
    displayName: 'Loyalty Point%',
    dataType: 'number',
    fieldName: 'loyaltyPoint',
    filedPosition: 10,
  },
  {
    displayName: 'Loyalty Point%',
    dataType: 'number',
    fieldName: 'loyaltyPoint',
    filedPosition: 10,
  },
  {
    displayName: 'Loyalty Point%',
    dataType: 'number',
    fieldName: 'loyaltyPoint',
    filedPosition: 10,
  },
  {
    displayName: 'Loyalty Point%',
    dataType: 'number',
    fieldName: 'loyaltyPoint',
    filedPosition: 10,
  },
];

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
];

const sortedData = orderObjectBy({
  data,
  key: ['filedPosition'],
  direction: 'asc',
}) as IData[];
const CreateProduct = () => {
  debugger;
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
        <ProductUpload>
          <ContainerBox>
            <FormControl component="fieldset">
              <ProTHeading> Product Type</ProTHeading>
              <RadioGroup
                row
                aria-label="producttype"
                name="row-radio-buttons-group"
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
            </FormControl>
          </ContainerBox>
          <ContainerBox>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input id="contained-button-file" type="file" />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Stack>

            <ImageContainer />
          </ContainerBox>
        </ProductUpload>
        <ProductContainer>
          {/* {components} */}
          {/* <ContainerBox> */}

          <ProTHeading>
            Product Details
          </ProTHeading>
          <div style={{
            display: 'flex', order: 2, flexDirection: 'row', justifyContent: 'space-between',
          }}
          >
            <div style={{ marginLeft: 3 }}>

              <TextField id="standard-basic" label="Product Name" required variant="standard" />

            </div>
            <div style={{ marginLeft: 3 }}>

              <TextField id="standard-basic" label="Product Name" required variant="standard" />

            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: 3 }}>

              <TextField id="standard-basic" label="Product Name" required variant="standard" />

            </div>
            <div style={{ marginLeft: 3 }}>

              <TextField id="standard-basic" label="Product Name" required variant="standard" />

            </div>

            <div style={{ marginLeft: 3 }}>

              <TextField id="standard-basic" label="Product Name" required variant="standard" />

            </div>
          </div>
          {/* </ContainerBox> */}
        </ProductContainer>
      </Container>
    </Layout>
  );
};

export default CreateProduct;
