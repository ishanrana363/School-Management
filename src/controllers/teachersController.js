const  mongoose  = require("mongoose");
const teachersModel = require("../models/teachersInformation");

exports.createTeacherInformation = async (req,res)=>{
    try {
        let userData = req.body;
        const data = await teachersModel.create(userData);
        res.status(201).json({
            status:"success",
            data : data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:"fail",
            msg:"something went worng!"
        })
    }
};


exports.updateTeacherInformation = async (req,res)=>{
    try {
        let teacherData = req.body;
        let teacherId = req.params.id;
        let filter = {_id : teacherId};
        let update =  teacherData;
        const data = await teachersModel.findByIdAndUpdate(filter,update,{new:true});
        res.status(201).json({
            status:"success",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            status:"fail",
            msg:"something went worng!"
        })
    }
};

exports.deleteTeacherInformation = async (req, res) => {
    try {
        let teacherId = new mongoose.Types.ObjectId(req.params.id);
        let filter = { _id: teacherId };
        
        const data = await teachersModel.findOne(filter);

        if (data) {
            res.status(200).json({
                status: "success",
                data: "teacher information delete successful"
            });
        } else {
            res.status(404).json({
                status: "fail",
                msg: "Teacher information not found."
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: "fail",
            msg: "Something went wrong!"
        });
    }
};

exports.allTeacherInformation = async (req, res) => {
    try {
        const data = await teachersModel.find();
        res.status(200).json({
            status: "success",
            data: data
        });
        }catch (error) {
        res.status(500).json({
            status: "fail",
            msg: "Something went wrong!"
        });
    }
};



exports.listByDepartmentTeachersInformation = async (req, res) => {
    try {
        const department = req.params.department;
        let filter = { department : department }
        const data = await teachersModel.find(filter);
        res.status(200).json({
            status: "success",
            data: data
        });
        }catch (error) {
        res.status(500).json({
            status: "fail",
            msg: "Something went wrong!"
        });
    }
};