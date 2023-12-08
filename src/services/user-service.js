const {UserRepository,CourseRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error')

const userRepository = new UserRepository();
const courseRepository = new CourseRepository();
async function createUser(data){
    try {
        const users = await userRepository.createData(data);
        return users;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create the new user object',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function updateUser(id,data){
    try {
        const updatedUser = await userRepository.update(id,data);
        return updatedUser;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message,error.statusCode);
        }
        throw new AppError('Cannot update the airpane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getUserCourses(id){
    try {
        const user = await userRepository.get(id);
        const results = await user.getCourse();
        return results;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message,error.statusCode);
        }
        throw new AppError('Cannot update the airpane',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function enrollUserCourses(userId,courseId){
    try {
        const user = await userRepository.get(userId);
        if(!user){
            throw new AppError('No user found with given id',StatusCodes.NOT_FOUND);
        } 
        const course = await courseRepository.get(courseId);
        if(!course){
            throw new AppError('No course found with given id',StatusCodes.NOT_FOUND);
        } 
        const result = user.addCourse(course);
        return result;
    } catch (error) {
        if(error instanceof AppError) throw error;
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message,error.statusCode);
        }
        throw new AppError('Cannot add user to the course',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

module.exports = {
    createUser,
    updateUser,
    getUserCourses,
    enrollUserCourses
}