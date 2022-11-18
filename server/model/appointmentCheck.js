const mongoose = require("mongoose");

const userAppointment = new mongoose.Schema({
    date:{
        type:String,
        required:true,
        min:4,
        max:15,
    },
    firstname:{
        type:String,
        required:true,
        min:3,
        max:20,
    },
    lastname:{
        type:String,
        required:true,
        min:3,
        max:20,
    },
    phone:{
        type:String,
        required:true,
        min:3,
        max:20,
    },
    time:{
        type:String,
        required:true,
        min:3,
        max:20,
    },
})

module.exports = mongoose.model("appointment_info",userAppointment)