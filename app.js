const express = require('express')
app = express();
const mongoose = require('mongoose')
require("dotenv").config()

const voucher_Schema = require('./voucher.schema')

const bodyParser = require('body-parser');
app.use(bodyParser.json());



mongoose.connect(process.env.DATABASE_DETAILS, {useNewUrlParser: true })

const db = mongoose.connection;
db.on('error' , (error) => console.error("Database connection error" + error))

db.once('open' , () => console.log("Successfully connected to database"))


const Postrouter =  require('./posts');
const voucherSchema = require('./voucher.schema');

app.use('/posts' , Postrouter);


app.get('/api/v1/voucherchecker' , (req, res) => {


        res.send("VOUCHER CHECKER")
})


app.post('/createvoucher' , (req, res) => {


        console.log(req.params.voucher_Schema)
})


app.listen(8080, () => console.log("Server is running"))




