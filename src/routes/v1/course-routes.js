const express = require('express');
const {CourseController} = require('../../controllers')


const router= express.Router();

router.post('/',CourseController.createCourse);

module.exports = router;
