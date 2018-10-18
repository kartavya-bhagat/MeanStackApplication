//local import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//package import are seprated
//the below code is in Experess 6 to retrive mongoose  
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
//This command is for getting data(maybe)

app.use(cors({ origin:'http://localhost:4200'}));

app.listen(3000,() => console.log('Server started at port: 3000'));
//This function starts express server at 3000 
//call back function is invoked
//running node index.js will start both express server and mongoDB

app.use('/employees',employeeController);
//above is to use the application employee controller