const express = require('express');
const {CourseController} = require('../../controllers')


const router= express.Router();

router.post('/',CourseController.createCourse);
router.get('/',CourseController.getAllCourses);

// api/v1/airports/:id

router.get('/:id',CourseController.getCourseById);

router.delete('/:id',CourseController.deleteCourse);

module.exports = router;
