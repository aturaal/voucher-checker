const express = require('express');
const voucherSchema = require('../voucher.schema');
const Post = require('../voucher.schema')
const router = express.Router();
const { Router } = require('express');
const mongoose = require("mongoose");

router.post('/' , function (req, res) {

        const post = new Post({
            voucher_Code: req.body.voucher_Code,
                                redeemed_By: req.body.redeemed_By,

        })

post.save();
res.json(post);   
 })




module.exports = router;

