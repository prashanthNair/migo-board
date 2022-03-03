import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles'; 
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
  <SubscriptionBox>
    <Subscription />
  </SubscriptionBox>
);

export default Subscriptions;
