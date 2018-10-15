const mongoose = require('mongoose');

//Making model name Employee then specify schema or structure
//U need not to make collections in database as mongoose will automatically create one
var Employee =mongoose.model('Employee',{
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type:Number}
});

module.exports = { Employee };
