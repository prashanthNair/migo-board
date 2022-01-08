import {
  Box,
  Input,
  styled,
  Typography,
}
  from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Layout from '../Dashboard/Layout';
import DropDawn from './DropDawn';
import CategoryInput from './CategoryInput';

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
  padding: '20px 30px 0 30px',
  overflowY: 'scroll',
});
const ProductContainer = styled(Box)({
  background: '#FFFFFF',
});
const ProTHeading = styled(Typography)({
  paddingLeft: '20px',
  fontWeight: 'bold',
  paddingTop: '10px',
});
const ProductTypeIntro = styled(Typography)({
  padding: '20px',
});
const Gap = styled(Box)({
  height: '5px',
});
const ButtonFlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});
const ProductUpload = styled(Box)({
  padding: '20px',
});
const DetailsInput = styled(Box)({
  padding: '20px',
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
const VarientInput = styled(Box)({
  padding: '20px',
});
const Note = styled(Typography)({
  fontSize: '10px',
  padding: '10px 0',
});
const Uploader = styled(Box)({
});

const AddProduct: React.FC = () => (
  <Layout>
    <TopBar>
      <Heading>
        Add Product
        <ErrorOutlineOutlinedIcon style={{ fontSize: '10px', color: '#D0D1D2' }} />
      </Heading>
      <Button
        variant="contained"
        style={
           {
             height: '30px',
             fontSize: '0.6rem',
             fontWeight: 'bolder',
             paddingLeft: '20px',
             paddingRight: '20px',
           }
        }
      >
        Next
        <ArrowForwardIosOutlinedIcon style={{ fontSize: '10px', color: '#ffffff' }} />
      </Button>
    </TopBar>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          <ProductContainer>
            <ProTHeading variant="subtitle2">
              Product Type
              <ErrorOutlineOutlinedIcon style={{ fontSize: '10px', color: '#D0D1D2' }} />
            </ProTHeading>
            <ButtonFlexBox>
              <ProductTypeIntro variant="caption">
                In publishing and graphic #design, Lorem ipsum is a placeholder text commonly used.
              </ProductTypeIntro>
              <DropDawn />
            </ButtonFlexBox>
          </ProductContainer>
          <Gap />
          <ProductContainer>
            <ProTHeading variant="subtitle2">
              Upload Product
              <ErrorOutlineOutlinedIcon style={{ fontSize: '10px', color: '#D0D1D2' }} />
            </ProTHeading>
            <ProductUpload>
              <Uploader>
                <CloudUploadIcon />
                <Input type="file" />
              </Uploader>
            </ProductUpload>
          </ProductContainer>
        </Grid>
        <Grid item xs={6} md={7}>
          <ProductContainer>
            <ProTHeading variant="subtitle2">
              Product Details
              <ErrorOutlineOutlinedIcon style={{ fontSize: '10px', color: '#D0D1D2' }} />
            </ProTHeading>
            <DetailsInput>
              <InputRow>
                <TextField style={{ width: '100%' }} type="text" id="outlined-basic" label="Product Name *" variant="outlined" size="small" />
                <CategoryInput />
              </InputRow>
              <InputRow>
                <TextField style={{ width: '100%' }} type="number" id="outlined-basic" label="MRP Rate *" variant="outlined" size="small" />
                <TextField style={{ width: '100%' }} type="number" id="outlined-basic" label="Selling Price *" variant="outlined" size="small" />
              </InputRow>
              <TextField style={{ width: '100%', height: '60px' }} type="text" id="outlined-basic" label="Description *" variant="outlined" />
            </DetailsInput>
          </ProductContainer>
          <Gap />
          <ProductContainer>
            <ProTHeading variant="subtitle2">
              Product Varrient
              <ErrorOutlineOutlinedIcon style={{ fontSize: '10px', color: '#D0D1D2' }} />
            </ProTHeading>
            <VarientInput>
              <InputRow>
                <TextField style={{ width: '100%' }} type="text" id="outlined-basic" label="Varrient Name *" variant="outlined" size="small" />
                <TextField style={{ width: '100%' }} type="text" id="outlined-basic" label="Stock Type Here *" variant="outlined" size="small" />
                <AddNew>
                  <AddIcon />
                </AddNew>
                <CloseIcon />
              </InputRow>
              <AddNew>
                + Add New Varient
              </AddNew>
              <InputRow>
                <TextField style={{ width: '100%' }} type="number" id="outlined-basic" label="MRP Rate *" variant="outlined" size="small" />
                <TextField style={{ width: '100%' }} type="number" id="outlined-basic" label="Selling Price *" variant="outlined" size="small" />
              </InputRow>
              <Note>
                <span style={{ color: 'red' }}>Note:</span>
                This stock is dedicated stock for migobucks only.
              </Note>
              <hr />
              <InputRow>
                <TextField id="outlined-basic" label="Color varient" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="Black" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="White" variant="outlined" size="small" />
                <AddNew>
                  <AddIcon />
                </AddNew>
                <CloseIcon />
              </InputRow>
              <InputRow>
                <TextField id="outlined-basic" label="Size varient" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="XL" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="ML" variant="outlined" size="small" />
                <CloseIcon />
              </InputRow>
              <InputRow>
                <TextField id="outlined-basic" label="XL" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="ML" variant="outlined" size="small" />
                <AddNew>
                  <AddIcon />
                </AddNew>
              </InputRow>
              <AddNew>
                + Add New Varient
              </AddNew>
              <InputRow>
                <TextField style={{ width: '100%' }} id="outlined-basic" label="Total stock" variant="outlined" size="small" />
                <TextField style={{ width: '100%' }} type="number" id="outlined-basic" label="Varient Price" variant="outlined" size="small" />
              </InputRow>
              <Note>
                <span style={{ color: 'red' }}>Note:</span>
                This stock is dedicated stock for migobucks only.
              </Note>
              <AddNew>
                + Add New Stock
              </AddNew>
            </VarientInput>
          </ProductContainer>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default AddProduct;
