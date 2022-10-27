const express = require('express')
const v_post = require('../voucher.schema')
const router = express.Router;


router.post('/', (req, res) => {

res.send('hi')

});

module.exports = router;