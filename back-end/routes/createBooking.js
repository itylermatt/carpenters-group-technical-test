const express = require('express');
const router = express.Router();
const bookingsDummyData = require('../dummy-data/dummy-data');
const dateSort = require('../dummy-data/helper-functions').dateSort;

router.post('/', (req, res) => {
    bookingsDummyData.push(req.body);
    res.json({bookings: bookingsDummyData.sort(dateSort)});
});

module.exports = router;
