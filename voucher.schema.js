const { triggerAsyncId } = require('async_hooks')
const mongoose = require('mongoose')
const { stringify } = require('querystring')
const { isTypedArray } = require('util/types')

const voucher_Schema = new mongoose.Schema({


    voucher_Code: {type: String, required: true},
    redeemed_By:  {type: String, required: true},
    redeemed_On: {

        type: Date,
        default: Date.now
    }



})

module.exports = mongoose.model('voucher_Schema' , voucher_Schema)