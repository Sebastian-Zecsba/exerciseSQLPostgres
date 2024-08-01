import Course from "./Course";
import Teacher from "./Teacher";
import Student from "./Student";

//? Relación de uno a muchos
Course.belongsTo(Teacher) 
Teacher.hasMany(Course)

//? Relación de muchos a muchos
Student.belongsToMany(Course, {through: 'studentsCourses'})
Course.belongsToMany(Student, {through: 'studentsCourses'}) 