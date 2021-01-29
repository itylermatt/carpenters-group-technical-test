import {useState, Fragment} from 'react';
import {Paper, Button} from '@material-ui/core';
import './createBookingsTable.css';
import axios from "axios";

const CreateBookingsTable = (props) => {
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [numberOfDiners, setNumberOfDiners] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [bookingTime, setBookingTime] = useState('');

    const onCancelButtonClick = () => props.history.push('/');

    const onFormSubmit = e => {
        e.preventDefault();
        if(!contactName || !contactNumber || !numberOfDiners || !tableNumber || !bookingTime) {
            return;
        }
        axios.post('http://localhost:3001/create-booking', {contactNumber, contactName, numberOfDiners, tableNumber, bookingTime}).then(() =>{
            setContactNumber('');
            setContactName('');
            setNumberOfDiners('');
            setTableNumber('');
            setBookingTime('');
            props.history.push('/');
        }).catch(e => {
            console.log(e);
            setContactNumber('');
            setContactName('');
            setNumberOfDiners('');
            setTableNumber('');
            setBookingTime('');
        });
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
                        <label htmlFor={'people'} > Number of Diners </label>
                        <input value={numberOfDiners} type="text" id={'people'} className={'input'} placeholder={'Number of Diners...'} onChange={(e) => setNumberOfDiners(e.target.value)}/>
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
