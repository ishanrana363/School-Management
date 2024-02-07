const express = require("express");
const teachersInformationRoutes = express.Router();

const teacherController = require("../controllers/teachersController")

teachersInformationRoutes.post("/auth/teacher/create",teacherController.createTeacherInformation);
teachersInformationRoutes.post("/auth/teacher/update/:id",teacherController.updateTeacherInformation);
teachersInformationRoutes.delete("/auth/teacher/delete/:id",teacherController.deleteTeacherInformation);
teachersInformationRoutes.get("/auth/all/teacher",teacherController.allTeacherInformation);
teachersInformationRoutes.get("/auth/by/department/:department",teacherController.listByDepartmentTeachersInformation);




module.exports = teachersInformationRoutes;