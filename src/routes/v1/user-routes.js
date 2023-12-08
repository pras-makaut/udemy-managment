const express = require('express');
const {UserController} = require('../../controllers')


const router= express.Router();

router.get('/courses',UserController.getUserCourses);
router.post('/courses/:id',UserController.enrollUserCourses)
router.post('/',UserController.createUser);
router.patch('/',UserController.updateUser);


module.exports = router;
