const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const departmentSchema = new Schema({
    name : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});


const departmentModel = model("departModels",departmentSchema);

module.exports = departmentModel;