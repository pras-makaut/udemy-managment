const CrudRepository = require('./crudrepository');
const {Course} = require('../models');

class CourseRepository extends CrudRepository{
    constructor(){
        super(Course);
    }
    async getAllCourses(filter,sort){
        try {
            const courses = await Course.findAll({
                where:filter,
                order:sort
            });
            return courses;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = CourseRepository;