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

module.exports = {
    createUser
}