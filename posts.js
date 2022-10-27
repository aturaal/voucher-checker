const express = require('express');
const post = require('../voucher.schema')
const router = express.Router();


router.get('/', (req, res) => {

    res.send('We are on posts!')

});



module.exports = router;

