/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
import React from 'react';
import CustomCard from './CustomCard';

export default function CustomList(props: { data: [] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#E5E5E5',
        padding: 10,
      }}
    >
      {props.data.map((x) => (
        <CustomCard />
      ))}
    </div>
  );
}
