const mongoose = require("mongoose");

const useerSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:12,
        unique:true,
    },
    isAvatarImageSet:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:"",
    }
});

module.exports = mongoose.model("Users",useerSchema)


const apointmentSchema = new mongoose.Schema({
    calenderData:{
        type:String,
        required:true,
        max:20,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        min:2,
        max:50,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
})
module.exports = mongoose.model("Appointment",apointmentSchema)