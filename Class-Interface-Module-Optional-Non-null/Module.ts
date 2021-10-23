import { Employee, Student } from './Class';

// MODULE
// const employee = require('./Class/Employee');
// const student = require('./Class/Student');

const people1 = new Employee('Kien',21,true);
people1.show()

const people2 = new Student('My',21,false);
people2.show()