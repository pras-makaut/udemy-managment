const CrudRepository = require('./crudrepository');
const {Course} = require('../models');

class CourseRepository extends CrudRepository{
    constructor(){
        super(Course);
    }
}
module.exports = CourseRepository;