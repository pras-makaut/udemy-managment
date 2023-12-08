const {CourseService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const {SuccessResponse,ErrorResponse} = require('../utils/common');

async function createCourse(req,res){
    try {
        const course = await CourseService.createCourse({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            duration:req.body.duration
        });
        SuccessResponse.message ="Successfully crated a course";
        SuccessResponse.data = course;
        return res.
                status(StatusCodes.CREATED).
                json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllCourses(req,res){
    try {
        const courses = await CourseService.getAllCourses(req.query);
        SuccessResponse.message ="Successfully get all courses";
        SuccessResponse.data = courses;
        return res.
                status(StatusCodes.OK).
                json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
} 

async function getCourseById(req,res){
    try {
        const course = await CourseService.getCourseById(req.params.id);
        SuccessResponse.message =`Successfully get the Course with ${req.params.id} id`;
        SuccessResponse.data = course;
        return res.
                status(StatusCodes.OK).
                json(SuccessResponse);        
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById
}