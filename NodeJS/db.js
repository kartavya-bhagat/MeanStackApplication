const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB' ,{ useNewUrlParser: true },(err)=>{
    if(!err)
        console.log('MongoDB connection succeeded....');
    else
        console.log('Error in DB connection: '+ JSON.stringify(err,undefined,2));    
});
//error message prints out when db connection fail
//node db.js is run everytime when something changes in this file

module.exports = mongoose;