const express = require('express')
app = express();
const mongoose = require('mongoose')
require("dotenv").config()

const voucher_Schema = require('./voucher.schema')


mongoose.connect(process.env.DATABASE_DETAILS, {useNewUrlParser: true })

const db = mongoose.connection;
db.on('error' , (error) => console.error("Database connection error" + error))

db.once('open' , () => console.log("Successfully connected to database"))


const Postrouter =  require('./routers/posts')

app.use('/posts' , Postrouter);



app.get('/api/v1/voucherchecker' , (req, res) => {


        res.send("VOUCHER CHECKER")
})

app.listen(3000, () => console.log("Server is running"))



