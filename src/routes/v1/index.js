const express = require('express');
const router = express.Router();
const {InfoController} = require('../../controllers');
const CourseRoutes = require('./course-routes')
const UserRoutes = require('./user-routes')
router.get('/info',InfoController.info);
router.use('/courses',CourseRoutes);
router.use('/users',UserRoutes);



module.exports = router;