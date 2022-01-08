import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SubscriptionImage from '../../assets/images/mibInventory.png';

const SubscriptionCard = styled(Card)({
  marginLeft: '67px',
  height: '536px',
  width: '276px',
  marginTop: '198px',
  boxShadow: '-1px 7px 7px 3px rgba(0, 0, 0, 0.2)',
  justifyContent: 'center',
});

const Subscription: React.FC = () => (
  <SubscriptionCard>
    <CardMedia
      component="img"
      image={SubscriptionImage}
      sx={{
        maxHeight: '146px', maxWidth: '112px', ml: 8, mt: 3,
      }}
    />

    <CardActions>
      <Typography gutterBottom variant="h6" component="div" sx={{ color: '#8798AD' }}>
        Migo Inventory
      </Typography>
      <Button
        size="small"
        sx={{
          background: '#1B75BB', color: '#FFFFFF', borderRadius: '8px', width: '103px', height: '17px', ml: 2,
        }}
      >
        Subscribe
      </Button>

    </CardActions>
    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#8798AD', ml: 5 }}>
      Upgrade
    </Typography>
    <CardContent
      sx={{
        background: '#1B75BB', borderRadius: '8px', bottom: '15.1%', height: '350px',
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FFFFFF' }}>
        •
        Free Brand Promotion
      </Typography>
    </CardContent>

  </SubscriptionCard>
);

export default Subscription;
