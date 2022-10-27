const express = require('express');
const voucherSchema = require('../voucher.schema');
const post = require('../voucher.schema')
const router = express.Router();
const { Router } = require('express');

router.post('/' , function (req, res) {

        console.log(req.body);
        res.status(201).send('voucherSchema')
    })




module.exports = router;

