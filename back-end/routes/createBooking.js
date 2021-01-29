const express = require('express');
const router = express.Router();
const bookingsDummyData = require('../dummy-data/dummy-data').bookingsTempData;
let highestBookingId = require('../dummy-data/dummy-data').bookingId;
const dateSort = require('../dummy-data/helper-functions').dateSort;

router.post('/', (req, res) => {
    const bookingId = highestBookingId++;
    bookingsDummyData.push({...req.body, bookingId});
    res.json({bookings: bookingsDummyData.sort(dateSort)});
});

module.exports = router;
