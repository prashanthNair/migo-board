import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Layout from '../../components/Dashboard/Layout';
import SubscriptionImage from '../../assets/images/subscription.png';
import Subscription from '../../components/subscriptions';

const SubscriptionBox = styled(Box)({
  border: 0,
  position: 'absolute',
  height: '810px',
  width: '1281px',
  left: '251px',
  top: '87px',
  borderradius: '0px',
  background: '#FFFFFF',
  marginLeft: '251px',
  marginTop: '50px',

});

const Subscriptions: React.FC = () => (
  <Layout>
    <SubscriptionBox>
      <Subscription />
    </SubscriptionBox>
  </Layout>
);

export default Subscriptions;
