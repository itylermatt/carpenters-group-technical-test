import {useState, Fragment, useEffect} from 'react';
import {Paper, Button} from '@material-ui/core';
import './createBookingsTable.css';

const CreateBookingsTable = (props) => {
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [bookingTime, setBookingTime] = useState('');

    const onCancelButtonClick = () => props.history.push('/');

    const onFormSubmit = e => {
        e.preventDefault();
        if(!contactName || !contactNumber || !numberOfPeople || !tableNumber || !bookingTime) {
            console.log('incomplete form');
            return;
        }
        setContactNumber('');
        setContactName('');
        setNumberOfPeople('');
        setTableNumber('');
        setBookingTime('');
    };

    return(
        <Fragment>
            <Paper elevation={3} className={'rootPaper'}>
                <form onSubmit={onFormSubmit}>
                    <div className={'formDetails'}>
                        <label htmlFor={'name'} > Contact Name </label>
                        <input value={contactName} type="text" id={'name'} className={'input'} placeholder={'Contact Name...'} onChange={(e) => setContactName(e.target.value)} />
                    </div>
                    <div className={'formDetails'}>
                        <label htmlFor={'number'} > Contact Number </label>
                        <input value={contactNumber} type="text" id={'number'} className={'input'} placeholder={'Contact Number...'} onChange={(e) => setContactNumber(e.target.value)}/>
                    </div>
                    <div className={'formDetails'}>
                        <label htmlFor={'people'} > Number of People </label>
                        <input value={numberOfPeople} type="text" id={'people'} className={'input'} placeholder={'Number of People...'} onChange={(e) => setNumberOfPeople(e.target.value)}/>
                    </div>
                    <div className={'formDetails'}>
                        <label htmlFor={'table'} > Table number </label>
                        <input value={tableNumber} type="text" id={'table'} className={'input'} placeholder={'Table Number...'} onChange={(e) => setTableNumber(e.target.value)}/>
                    </div>
                    <div className={'formDetails'}>
                        <label htmlFor={'booking'} > Booking Time </label>
                        <input value={bookingTime} type="date" id={'booking'} className={'input'} placeholder={'Booking Time...'} onChange={(e) => setBookingTime(e.target.value)}/>
                    </div>
                    <div className={'saveButton'}>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Save
                        </Button>
                        <Button variant={'contained'} color={'secondary'} onClick={onCancelButtonClick}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Paper>
        </Fragment>
    );
};

export default CreateBookingsTable;
