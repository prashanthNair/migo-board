/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import AWS from 'aws-sdk';
import Input from '@mui/material/Input';
import { PhotoCamera } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

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
  Image:string;
  Tittle:string;
}
const UploadImageToS3 = (props:any) => {
  const [progress, setProgress] = useState(0);
  const image:Image = { Image: '', Tittle: '' };
  const { ProductId } = props;
  const fileList:any = [];
  const [imageList, setImageList] = useState([image]);
  const [files, setfiles] = useState(fileList);

  const handleFileInput = (e:any) => {
    const file:any = e.target.files[0];
    const selectedFiles = [...files, file];
    setfiles(selectedFiles);
    const img:any = { Image: '', Tittle: file.name };
    const updatedCarsArray = [...imageList, img];
    setImageList(updatedCarsArray);
  };

  const uploadFile = (file:any) => {
    fileList.forEach((element:any) => {
      const params = {
        Body: file,
        Bucket: `${S3_BUCKET}/${ProductId}`,
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

  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="icon-button-file">
          <Input disabled={false} id="icon-button-file" type="file" onChange={handleFileInput} />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <label htmlFor="contained-button-file">
          <Button variant="contained" onClick={uploadFile}>
            Upload
          </Button>
        </label>
      </Stack>
      <Card sx={{ minWidth: 275 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {imageList?.map((index:any, item:any) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary="Jan 9, 2014" />
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default UploadImageToS3;
