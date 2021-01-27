const express = require('express');
const router = express.Router();
const bookingsDummyData = require('../dummy-data/dummy-data');

/*GET bookings*/
router.get('/', (req, res) => {
    res.json({bookings: bookingsDummyData});
});

module.exports = router;
