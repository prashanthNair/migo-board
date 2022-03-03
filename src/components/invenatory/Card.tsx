import React from 'react';
import { styled } from '@mui/material/styles';   
import CustomCard from './CustomCard'; 
const CardContainer = styled('div')({
  display: 'flex', flexDirection: 'row', justifyItems: 'flex-start', overflow: 'scroll', minHeight: '100vh',
});

const Card = (props: any) => {
  const { category, type, data } = props;
  const products = data[category];
  return (
    <CardContainer>
      {

        products && products?.map((x: any) => <CustomCard data={x} />)
      }
    </CardContainer>
  );
};

export default Card;
