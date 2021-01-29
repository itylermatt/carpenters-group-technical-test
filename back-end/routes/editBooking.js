const express = require('express');
const router = express.Router();
const bookingsDummyData = require('../dummy-data/dummy-data').bookingsTempData;
const dateSort = require('../dummy-data/helper-functions').dateSort;

/*Update Booking Route*/
router.post('/',(req, res) => {
    bookingsDummyData.map((booking) => {
        if(booking.bookingId === req.body.bookingId) {
            booking.contactName = req.body.contactName;
            booking.contactNumber = req.body.contactNumber;
            booking.numberOfDiners = req.body.numberOfDiners;
            booking.tableNumber = req.body.tableNumber;
            booking.bookingTime = req.body.bookingTime;
        }
        return booking;
    });
    res.json({bookings: bookingsDummyData.sort(dateSort)});
});

module.exports = router;
