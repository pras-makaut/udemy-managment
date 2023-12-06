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

module.exports = {
    createCourse
}