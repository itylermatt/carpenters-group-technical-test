import './bookingsTable.css';
import {Button} from '@material-ui/core';

const BookingsTable = () => {

    const buttonClickHandler = () => {
        console.log('button clicked to create new booking ...');
    };

    return(
      <div className={'rootContainer'}>
          <Button variant={'contained'} color={'primary'} onClick={buttonClickHandler} >
            Create Booking
          </Button>
      </div>
    );
}

export default BookingsTable;
