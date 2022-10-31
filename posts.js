const express = require('express');
const voucherSchema = require('../voucher.schema');
const Post = require('../voucher.schema')
const router = express.Router();
const { Router } = require('express');

router.post('/' , function (req, res) {

        const post = new Post({
            "voucher_Code": req.params.voucher_Code,
            "redeemed_By": req.params.redeemed_By
                
        })

res.send('Create Voucher')
post.save();
res.json(post);   
 })




module.exports = router;

