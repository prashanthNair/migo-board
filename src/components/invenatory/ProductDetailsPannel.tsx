/* eslint-disable dot-notation */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  InputLabel,
  LinearProgress,
  styled,
  Typography,
} from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, { useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import AWS from 'aws-sdk';
import Input from '@mui/material/Input';
import { PhotoCamera } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { display } from '@mui/system';
import { useLocation } from 'react-router-dom';
import UploadFile from '../Common/ImageUpload';
import UploadImageToS3 from '../Common/ImageUploader';
import { IProduct, IProductDetails } from '../../interfaces/IProduct';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { inventoryHealthThunk, productCategoriesThunk, ProductDetails } from '../../redux/slices/inventory';

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
const ImageBox = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  borderRadius: 5,
  width: '99%',
  flexWrap: 'wrap',
  columnGap: 10,
  marginTop: 10,
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
const LeftContainer = styled(Box)({
  flexGrow: 4,
  padding: 5,
  maxWidth: '25%',
  backgroundColor: '#ffffff',
  width: '25%',
});
const RightContainer = styled(Box)({
  flexGrow: 6,
  padding: 5,
  maxWidth: '75%',
});
const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  background: '#ffffff',
  alignContent: 'flex-end',
  width: '100%',
  padding: 10,
});
const InputUpload = styled('input')({
  display: 'none',
});

const CustomImage = styled(Box)({
  display: 'flex',
  gap: '4px',
  height: '20px',
  width: '28px',
});
const S3_BUCKET = 'mib-brand-inbound';
const REGION = 'ap-south-1';

AWS.config.update({
  accessKeyId: 'AKIAZYADTUF3YO6ZGHVW',
  secretAccessKey: '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',
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

interface Image{
  Name:string;
  Type:string;
}
function ProductDetailsPannel(props:any) {
  const productId = `P${new Date().getTime().toString()}`;
  const product:any = {
    ProductId: productId, BrandId: '', ProductName: '', BrandName: '', Category: '', ProductCategory: '', Tittle: '', TraceId: '', CountryOfOrgin: '', Description: '', KeyPoints: [], ImageLinks: [],
  };
  const [productDetails, setProductDetails] = useState(product);

  const details:any = useAppSelector((state) => state.inventory.productDetails);
  const categoryDetails:any = useAppSelector((state:any) => state.inventory.category);
  const categories:any = useAppSelector((state) => Object.keys(state.inventory.category));
  console.log(details);

  const validation:any = {
    ProductName: {
      error: false,
      message: 'Product Name is  Required',
    },
    BrandName: {
      error: false,
      message: 'Brand Name is Required',
    },
    Tittle: {
      error: false,
      message: 'Tittle is  Required',
    },
    Description: {
      error: false,
      message: 'Description is Required',
    },
    Orgin: {
      error: false,
      message: 'Country of orgin is Required',

    },

  };

  const [validationOptions, setvalidationOptions] = useState(validation);
  const [productCategories, setproductCategory] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useAppDispatch();
  const [validate, setValidate] = useState({ helperText: '', error: false });
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const image:Image = { Name: '', Type: '' };
  const fileList:any = [];
  const [imageList, setImageList] = useState([image]);
  const [files, setfiles] = useState(fileList);

  const handleCreateSession = async () => {
    const productInfo = await dispatch(
      ProductDetails(productDetails),
    );
    if (productInfo.payload) {
      console.log('brandinfo', productInfo.payload);
    }
  };

  const validateInputs = () => {
    let count = 0;
    const productDetailsObj:any = {
      ProductId: productId, ProductName: '', BrandName: '', Tittle: '', Description: '', Origin: '',
    };
    const productModelkeys = Object.keys(productDetailsObj);
    productModelkeys.forEach((x: any) => {
      if (productDetails && x && !productDetails[x]) {
        if (validationOptions[x]) {
          validationOptions[x].error = true;
          count += 1;
        }
      } else if (validationOptions[x]) { validationOptions[x].error = false; }
    });
    setvalidationOptions((p:any) => ({
      ...validationOptions,
    }));
    return count;
  };

  const handleNext = (e: any) => {
    debugger;
    if (validateInputs() === 0) {
      productDetails.ImageLinks = { ...imageList };
      setProductDetails((p:any) => ({
        ...productDetails,
      }));
      handleCreateSession();
      props.activeTab(e, '2');
    }
  };

  const handleChange = (event:any) => {
    debugger;
    const { name } = event.target;
    const { value } = event.target;
    if (name === 'Category') {
      const selectedCategories = categoryDetails[value];
      setproductCategory(selectedCategories);
    }
    setProductDetails((p:any) => ({
      ...productDetails,
      [name]: value,
    }));
  };

  const uploadFile = (file:any) => {
    debugger;
    const BrandId:any = localStorage.getItem('BrandId');
    fileList.forEach((element:any) => {
      const params = {
        Body: file,
        Bucket: `${S3_BUCKET}/${BrandId}/${productId}`,
        Key: file.name,
      };
      myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
          console.log(params.Key, 'Upload sucessfull');
          setProgress(Math.round((evt.loaded / evt.total) * 100));
        })
        .send((err) => {
          if (err) console.log(err);
        });
    });
  };

  const handleFileInput = (e:any) => {
    debugger;
    const file:any = e.target.files[0];
    // const selectedFiles = [...files, file];
    // setfiles(selectedFiles);

    const BrandId:any = localStorage.getItem('BrandId');
    const params = {
      Body: file,
      Bucket: `${S3_BUCKET}/${BrandId}/${productId}`,
      Key: file.name,
    };
    const img:any = { Name: file.name, Tittle: file.type };

    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        console.log(params.Key, 'Upload sucessfull');
        // setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });

    const updatedCarsArray = [...imageList, img];
    setImageList(updatedCarsArray);
  };

  const handleSubmit = () => {
    UploadFile(images[0]['path']);
  };

  return (
    <Container>
      <LeftContainer>
        <FlexBox>
          <FormControl variant="outlined" sx={{ m: 1, width: '99%' }}>
            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={productDetails.Category}
              name="Category"
              onChange={handleChange}
            >
              {categories.map((x:any) => (
                <MenuItem
                  key={x}
                  value={x}
                >
                  {x}
                </MenuItem>
              ))}

            </Select>
          </FormControl>
        </FlexBox>
        <FlexBox>
          <div>
            <Stack style={{ marginBottom: 20 }} direction="row" alignItems="center" spacing={2}>
              <label htmlFor="icon-button-file">
                <Input style={{ display: 'none' }} id="icon-button-file" type="file" onChange={handleFileInput} />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              <label>
                {/* <Button variant="contained" onClick={uploadFile}>
                  Upload
                </Button> */}
                <LinearProgress variant="determinate" value={70} />
              </label>
            </Stack>
            <Card sx={{ minWidth: 275 }}>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {imageList?.map((index:any, item:any) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        {/* <CustomImage>
                          <img style={{ height: '25px', width: '37px' }} src="data:image/png;base64,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" alt="" />
                        </CustomImage> */}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.title} secondary="Jan 9, 2014" />
                  </ListItem>
                ))}
              </List>
            </Card>
          </div>
        </FlexBox>
        <ImageBox>
          <ImageList sx={{ width: 500, height: 450, marginTop: 10 }} cols={1} rowHeight={50}>
            {images?.map((item:any) => (
              <ImageListItem
                key={item.img}
                style={{
                  height: 50, marginTop: 2, padding: 2,
                }}
              >
                <img
                  style={{ height: 30 }}
                  src={item.path}
                  srcSet={`${item.item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </ImageBox>

        <Button onClick={() => handleSubmit()} color="primary">
          Upload
        </Button>
      </LeftContainer>
      <RightContainer>

        <FlexBox>
          <h4>Product Details</h4>

          <FormControl variant="outlined" sx={{ m: 1, width: '30%' }}>
            <InputLabel id="demo-simple-select-standard-label">Product Category</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onBlur={validateInputs}
              style={{ width: '99%' }}
              key="ProductCategory"
              label="Product Name"
              value={productDetails.ProductCategory}
              name="ProductCategory"
              onChange={handleChange}
            >
              {productCategories.map((x:any) => (
                <MenuItem
                  key={x}
                  value={x}
                >
                  {x}
                </MenuItem>
              ))}

            </Select>
          </FormControl>
          <TextField size="small" onBlur={validateInputs} helperText={validationOptions.ProductName.message} error={validationOptions.ProductName.error} style={{ width: '99%' }} key="ProductName" label="Product Name" name="ProductName" onChange={handleChange} value={productDetails.ProductName} required variant="outlined" />

          <TextField size="small" onBlur={validateInputs} helperText={validationOptions.Tittle.message} error={validationOptions.Tittle.error} style={{ width: '99%' }} key="Tittle" label="Product Tittle" name="Tittle" onChange={handleChange} value={productDetails.Tittle} required variant="outlined" />

          <TextField size="small" onBlur={validateInputs} helperText={validationOptions.BrandName.message} error={validationOptions.BrandName.error} style={{ width: '60%' }} key="BrandName" label="Brand Name" name="BrandName" onChange={handleChange} value={productDetails.BrandName} required variant="outlined" />

          <TextField
            size="small"
            onBlur={validateInputs}
            helperText={validationOptions.message}
            error={validate.error}
            style={{ width: '20%' }}
            key="Orgin"
            label="Country of Orgin"
            name="Origin"
            onChange={handleChange}
            value={productDetails.Origin}
            required
            variant="outlined"
          />

        </FlexBox>

        <FlexBox>
          <TextField
            minRows={8}
            onBlur={validateInputs}
            helperText={validationOptions.message}
            error={validate.error}
            multiline
            placeholder="Description"
            style={{ width: '70%' }}
            name="Description"
            value={productDetails.Description}
            inputProps={{ minLength: 250 }}
            onChange={handleChange}
          />

        </FlexBox>
        <Footer>

          <Button
            variant="contained"
            style={{
              fontSize: '0.6rem',
              fontWeight: 'bolder',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
            onClick={handleNext}
          >
            <ArrowBackIosNewIcon
              style={{ fontSize: '10px', color: '#ffffff' }}
            />
            Back

          </Button>
          <Button
            variant="contained"
            style={{
              fontSize: '0.6rem',
              fontWeight: 'bolder',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
            onClick={handleNext}
          >
            Next
            <ArrowForwardIosIcon
              style={{ fontSize: '10px', color: '#ffffff' }}
            />
          </Button>

        </Footer>
      </RightContainer>
    </Container>
  );
}

export default ProductDetailsPannel;
