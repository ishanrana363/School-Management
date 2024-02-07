const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const teachersInformationSchema  = new Schema({
    name : {
        type : String,
        required : true,
    },
    title :{
        type : String,
        required : true
    },
    faculty : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique:true
    },
    phone : {
        type : String,
        required : true,
        unique:true
    },
    roomNo : {
        type : String,
        required : true
    }
},{ timestamps:true,versionKey:false});

const teachersInformationModel = model("teacherInformations",teachersInformationSchema);

module.exports = teachersInformationModel;  
