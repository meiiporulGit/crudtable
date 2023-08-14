const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors')
const app = express();

app.use(cors())
//body-parser
app.use(express.json())

//router
const persondetails = require('./routes')
app.use('/Persons',persondetails)

require('dotenv/config')

//localhost
app.listen(8080,(err)=>{
    if(err)throw err;
    else{
        console.log('Server started on 8080')
    }
})

//DB server
mongoose.connect(process.env.MyDB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err){
        console.log('DB not connected')
    }
    console.log('DB connected')
})