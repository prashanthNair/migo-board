/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-debugger */
import {
  Box, CardActions, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, Input, InputLabel, ListSubheader, styled, Typography,
} from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React from 'react';
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
const Item = styled('div')({
  backgroundColor: '#ffffff',
  paddingLeft: 10,
  marginRight: 20,

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

export const data: IData[] = [
  {
    displayName: 'Brand',
    dataType: 'text',
    fieldName: 'brandName',
    filedPosition: 90,
  },
  //   {
  //     displayName: 'Company Type',
  //     dataType: 'list',
  //     fieldName: 'companyType',
  //     filedPosition: 2,
  //     data: [
  //       {
  //         value: '1',
  //         name: 'Public',
  //       },
  //       {
  //         value: '3',
  //         name: 'Private',
  //       },
  //       {
  //         value: '5',
  //         name: 'None',
  //       },
  //     ],
  //   },
  //   {
  //     displayName: 'Shelf Life',
  //     dataType: 'list',
  //     fieldName: 'shelfLife',
  //     filedPosition: 2,
  //     data: [
  //       {
  //         value: '1',
  //         name: '1 KG',
  //       },
  //       {
  //         value: '2',
  //         name: '2 KG',
  //       },
  //       {
  //         value: '3',
  //         name: '3 KG',
  //       },
  //       {
  //         value: '4',
  //         name: '4 KG',
  //       },
  //       {
  //         value: '5',
  //         name: '5 KG',
  //       },
  //       {
  //         value: '6',
  //         name: '6 KG',
  //       },
  //     ],
  //   },
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
        <LeftContainer>
          <ItemBox>
            <Heading>
              Product Type
            </Heading>
            <div>
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
            <TextField id="standard-basic" style={{ width: '25%' }} label="Product Name" required variant="outlined" />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value="age"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </FlexBox>
          <FlexBox>
            <TextField id="standard-basic" label="Tittle" style={{ width: '100%' }} required variant="outlined" />
          </FlexBox>
          <div style={{
            display: 'flex', columnGap: 10, rowGap: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20, padding: 20, backgroundColor: '#ffffff',
          }}
          >

            {components}
          </div>
          <FlexBox>
            <TextField id="standard-basic" label="Stock" style={{ width: '40%' }} required variant="outlined" />
            <TextField id="standard-basic" label="MRP" style={{ width: '40%' }} required variant="outlined" />
            <label>This stock is dedicated to Migobucks</label>
          </FlexBox>
        </RightContainer>
      </Container>
    </Layout>
  );
};

export default CreateProduct;
