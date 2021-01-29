const express = require('express');
const router = express.Router();
const bookingsDummyData = require('../dummy-data/dummy-data').bookingsTempData;
let highestBookingId = require('../dummy-data/dummy-data').bookingId;
const dateSort = require('../dummy-data/helper-functions').dateSort;

router.post('/', (req, res) => {
    let bookingId = 0;
    bookingId = highestBookingId[highestBookingId.length - 1] + 1;
    highestBookingId.shift();
    bookingsDummyData.push({
        bookingId,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        bookingTime: req.body.bookingTime,
        numberOfDiners: req.body.numberOfDiners,
        tableNumber: req.body.tableNumber
    });
    res.json({bookings: bookingsDummyData.sort(dateSort)});
});

module.exports = router;
