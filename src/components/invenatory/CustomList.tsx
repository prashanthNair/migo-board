/* eslint-disable no-debugger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
import React from 'react';
import CustomCard from './CustomCard';

export default function CustomList(props: { data: []}) {
  debugger;
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#E5E5E5',
    }}
    >
      {
            props.data.map((x) => <CustomCard />)
        }

    </div>
  );
}
