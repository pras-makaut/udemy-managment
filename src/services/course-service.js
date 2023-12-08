const {CourseRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error')

const courserepositry = new CourseRepository();

async function createCourse(data){
    try {
        const courses = await courserepositry.createData(data);
        return courses;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create the new course object',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function getAllCourses(query){
    let customFilter= {};
    let sortFilter = [];

    if(query.sort){
        sortFilter.push(query.sort.split('_'));
    }
    if(query.name){
        customFilter.name=query.name;
    }
    try {
        const courses = await courserepositry.getAllCourses(customFilter,sortFilter);
        return courses;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCourseById(id){
    try {
        const course = await courserepositry.get(id);
        return course;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message,error.statusCode);
        }
        throw new AppError(`Cannot fetch the course with id ${id}`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}




module.exports = {
    createCourse,
    getAllCourses,
    getCourseById
}