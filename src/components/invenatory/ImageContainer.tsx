import React from 'react';
import Card from '@mui/material/Card';
import {
  Box, CardMedia, styled, Typography,
} from '@mui/material';

import photo from '../../assets/images/photo.png';

function ImageContainer() {
  const ImagePannel = styled('div')(
    { display: 'flex', height: 60, margin: 2 },
  );
  return (
    <div>
      <Card
        sx={{
          width: '97%',
          marginTop: 2,
          borderWidth: 0.5,

          height: 60,
        }}
      >
        <ImagePannel>
          <CardMedia
            component="img"
            src={photo}
            alt="green iguana"
            sx={{ maxWidth: '20%', maxHeight: '90%' }}
          />
          <div>
            <Typography variant="inherit" component="p">
              Product Name
            </Typography>
          </div>
        </ImagePannel>
      </Card>
    </div>
  );
}

export default ImageContainer;
