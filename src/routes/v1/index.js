const express = require('express');
const router = express.Router();
const {InfoController} = require('../../controllers');
const CourseRoutes = require('./course-routes')
router.get('/info',InfoController.info);
router.use('/courses',CourseRoutes);



module.exports = router;