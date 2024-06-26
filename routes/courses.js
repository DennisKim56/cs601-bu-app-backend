const express = require("express");
const router = express.Router();

const courseControllers = require("../controllers/courses");

router.post("/", courseControllers.addCourse);

router.get("/", courseControllers.getCourses);

router.get("/all", courseControllers.getAllCourses);

module.exports = router;
