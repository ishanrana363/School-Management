const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const sliderSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});


const sliderModel = model("sliders",sliderSchema);

module.exports = sliderModel;