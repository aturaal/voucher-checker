const { triggerAsyncId } = require('async_hooks')
const mongoose = require('mongoose')
const { stringify } = require('querystring')

const voucher_Schema = new mongoose.Schema({


    voucher_Code: String,
    redeemed_By: String,
    redeemed_On: Date

})

module.exports = mongoose.model('voucher_Schema' , voucher_Schema)