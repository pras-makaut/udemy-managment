const {UserService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const {SuccessResponse,ErrorResponse} = require('../utils/common');

async function createUser(req,res){
    try {
        const user = await UserService.createUser({
            firstName:req.body.firstName,
            lastNmae:req.body.lastNmae,
            bio:req.body.bio,
            userType:req.body.userType,
            experince:req.body.experince
        });
        SuccessResponse.message ="Successfully crated a user";
        SuccessResponse.data = user;
        return res.
                status(StatusCodes.CREATED).
                json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateUser(req,res){
    try {
        const loginUser = req.headers['id'];
        const updatedUser = await UserService.updateUser(loginUser,req.body);
        SuccessResponse.message ="Successfully updated a user";
            SuccessResponse.data = updatedUser;
            return res.
                    status(StatusCodes.OK).
                    json(SuccessResponse);
    } catch (error) {

        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getUserCourses(req,res){
    try {
        const loginUser = req.headers['id'];
        const results = await UserService.getUserCourses(loginUser);
        SuccessResponse.message =`Successfully get user with user id ${loginUser} with all courses`;
            SuccessResponse.data = results;
            return res.
                    status(StatusCodes.OK).
                    json(SuccessResponse);
    } catch (error) {

        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createUser,
    updateUser,
    getUserCourses
}