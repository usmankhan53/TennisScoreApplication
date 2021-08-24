const  mongo = require('mongoose');
const  bodyParser = require('body-parser')
const express = require('express');
const cookieParser= require('cookie-parser');
const logger = require('morgan');
const  cors = require("cors");


const app = express();



const DB = "mongodb+srv://tennis:tennisapplication@cluster0.liboe.mongodb.net/tennisApplication?retryWrites=true&w=majority";
mongo.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    console.log("connected to database !")
}).catch(()=>{
    console.log("Not connected!");
});

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./route/game'));






app.listen(8001,()=>{
    console.log("Your server is running on port 8001");
});

module.exports =app;