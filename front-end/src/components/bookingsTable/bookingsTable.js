import {useEffect, useState} from "react";
import './bookingsTable.css';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const BookingsTable = () => {
    const classes = useStyles();
    const [tableBookingsData, setTableBookingsData] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:3001/booking').then((response) => {
           console.log('data returned is: ', response);
          setTableBookingsData(response);
       });
    });

    const buttonClickHandler = () => {
        console.log('button clicked to create new booking ...');
    };

    return(
      <div className={'rootContainer'}>
          <Button variant={'contained'} color={'primary'} onClick={buttonClickHandler} >
            Create Booking
          </Button>
          <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Contact Name</TableCell>
                          <TableCell align="right">Contact Number</TableCell>
                          <TableCell align="right">No of Diners</TableCell>
                          <TableCell align="right">Table Number</TableCell>
                          <TableCell align="right">Booking Time</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {tableBookingsData.map((row) => (
                          <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                  {row.contactName}
                              </TableCell>
                              <TableCell align="right">{row.contactNumber}</TableCell>
                              <TableCell align="right">{row.numberOfDiners}</TableCell>
                              <TableCell align="right">{row.tableNumber}</TableCell>
                              <TableCell align="right">{row.bookingTime}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
      </div>
    );
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default BookingsTable;
