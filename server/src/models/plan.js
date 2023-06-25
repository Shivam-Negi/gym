const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    plan_id : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    gym_id : {
        type : Number,
        required : true,
    },   
})

module.exports = mongoose.model('Plan', planSchema);