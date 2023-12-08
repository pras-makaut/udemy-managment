const express = require('express');
const {UserController} = require('../../controllers')


const router= express.Router();

router.post('/',UserController.createUser);
router.patch('/',UserController.updateUser);

module.exports = router;
