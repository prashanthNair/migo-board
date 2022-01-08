import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

function createData(
  date: string,
  name: string,
  product: string,
  rate: number,
  discount: number,
  location:string,
//   Status:string,
//   paymentStatus:string,
) {
  return {
    date, name, product, discount, rate, location,
  };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const OrdersTable: React.FC = () => {
  const rows = [
    createData('12 Jan 2021', 'Kadin Herwitz', 'Lorem ipsum dolor sit amet, consectetur...', 24, 4.0, 'Kerel, Some ting'),
    createData('12 Jan 2021', 'Kadin Herwitz', 'Lorem ipsum dolor sit amet, consectetur...', 37, 4.3, 'Kerel, Some ting'),
    createData('12 Jan 2021', 'Kadin Herwitz', 'Lorem ipsum dolor sit amet, consectetur...', 24, 6.0, 'Kerel, Some ting'),
    createData('12 Jan 2021', 'Kadin Herwitz', 'Lorem ipsum dolor sit amet, consectetur...', 67, 4.3, 'Kerel, Some ting'),
    createData('12 Jan 2021', 'Kadin Herwitz', 'Lorem ipsum dolor sit amet, consectetur...', 49, 3.9, 'Kerel, Some ting'),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: '#F7F7F7' }}>
          <TableRow>
            <TableCell>DATE AND TIME</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">PRODUCT</TableCell>
            <TableCell align="center">RATE</TableCell>
            <TableCell align="center">DISCOUNT</TableCell>
            <TableCell align="center">LOCATION</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">PAYMENT STATUS</TableCell>
            <TableCell align="center"><MoreHorizIcon sx={{ color: '#606F89' }} /></TableCell>
            <TableCell align="center">INVOICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.product}</TableCell>
              <TableCell align="center">{row.discount}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">Packed</TableCell>
              <TableCell align="center">success</TableCell>
              <TableCell align="center"><CloseIcon sx={{ color: '#A0A0A0' }} /></TableCell>
              <TableCell align="center"><DownloadIcon sx={{ color: '#A0A0A0' }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
