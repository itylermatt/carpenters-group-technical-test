const express = require('express');
const router = express.Router();
const bookingsDummyData = require('../dummy-data/dummy-data');
const dateSort = require('../dummy-data/helper-functions').dateSort;

/*GET bookings*/
router.get('/', (req, res) => {
    res.json({bookings: bookingsDummyData.sort(dateSort)});
});

module.exports = router;