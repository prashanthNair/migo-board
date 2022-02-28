/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomStepper from '../OrderTracking/Stepper';

export default function OrdersTable(props:any) {
  const { data } = props;

  const datarows = data || [];

  const [hasOpen, setHasOpen] = React.useState(false);
  const columns = [
    { field: 'OrderId', headerName: 'ORDER #', width: 130 },
    { field: 'Location', headerName: 'LOCATION', width: 130 },
    {
      field: 'Amount', headerName: 'AMOUNT', type: 'number', width: 90,
    },
    {
      field: 'OrderDate', headerName: 'ORDER DATE', width: 150, type: 'date',
    },
    {
      field: 'Address',
      headerName: 'Shipping Address',
      width: 150,
    },
    {
      field: 'Status',
      headerName: 'STATUS',
      width: 150,
    },
    {
      field: 'Invoice',
      headerName: 'Invoice',
      width: 150,
    },
    {
      field: 'Action',
      headerName: 'Actions',
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params:any) => (
        <div className="d-flex justify-content-between align-items-center" onClick={() => { setHasOpen(true); }} style={{ cursor: 'pointer' }}>
          <VisibilityIcon />
        </div>
      ),
    },
  ];
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
    <div style={{ height: '90vh', width: '100%' }}>
      {
        hasOpen ? <CustomStepper /> : <></>
      }

      <DataGrid
        rows={datarows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        className={style.root}
      />
    </div>
  );
}
