import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/lab/node_modules/@mui/system';
import { makeStyles } from '@mui/styles';

const columns = [
  { field: 'NAME', headerName: 'NAME', width: '5%' },
  { field: 'PRODUCT', headerName: 'PRODUCT', width: '5%' },
  {
    field: 'RATE',
    headerName: 'RATE',
    width: '5%',
  },
  {
    field: 'DISCOUNT',
    headerName: 'DISCOUNT',
    width: '5%',
  },
  {
    field: 'LOCATION',
    headerName: 'LOCATION',
    sortable: false,
    width: '5%',
  },
  {
    field: 'STATUS',
    headerName: 'STATUS',
    width: '5%',
  },
  {
    field: 'PAYMENTSTATUS',
    headerName: 'PAYMENT STATUS',
    width: '5%',
  },
];

const rows = [
  {
    NAME: 'Prasanth', PRODUCT: 'Snow', RATE: 'Jon', DISCOUNT: '35', LOCATION: 'Kochi', STATUS: 'Active', PAYMENTSTATUS: 'Pending',
  },

];

export default function OrdersTable() {
  const useStyles = makeStyles({
    root: {
      background: '#ffffff',
      border: 0,
      margin: 0,
      columnHeader: '#F4F7FC',
    },
  });
  const style = useStyles();
  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        className={style.root}
      /> */}
    </div>
  );
}
