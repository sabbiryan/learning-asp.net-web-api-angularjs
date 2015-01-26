'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
app.value('version', '0.1');


app.service("HomeControllerServices", [
    'Student', 'Teacher', 'Employee',
    function (Student, Teacher, Employee) {

        //Student part

        var students = {};
        Student.get(function (response) {
            console.log(response);
            if (response.IsSuccess) {
                students = response.Data;                
            }
        });
        

        this.getTotalStudentCount = function () {
            return Object.keys(students).length;
        }

        //Teacher part

        var teachers = {};
        Teacher.get(function (response) {
            console.log(response);
            if (response.IsSuccess) {
                teachers = response.Data;
            }
        });

        this.getTotalTeacherCount = function () {
            return Object.keys(teachers).length;
        }

        this.getAllStudents = function() {
            return teachers;
        }

        //Employee part

        var employees = {};
        Employee.get(function (response) {
            console.log(response);
            if (response.IsSuccess) {
                employees = response.Data;
            }
        });

        this.getTotalEmployeeCount = function () {
            return Object.keys(employees).length;
        }
    }
]);