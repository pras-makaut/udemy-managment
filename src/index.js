const express = require('express');
const {ServerConfig} = require('./config');
const apiRoutes = require('./routes');
const {User,Course} = require('./models')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    const user = await User.findByPk(1);
    const course = await Course.findByPk(3);
    // user.addCourse(course);
    const courses = await user.getCourse();
    console.log(courses);
})

