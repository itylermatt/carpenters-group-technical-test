const express = require('express');
const router = express.Router();

/*GET bookings*/
router.get('/', (req, res) => {
    res.json({alive: '...and kicking'});
});

module.exports = router;
