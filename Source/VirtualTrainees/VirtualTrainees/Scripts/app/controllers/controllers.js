'use strict';



/* Controllers */


app.controller('HomeController', [
    '$scope','HomeControllerServices', 'Student', 'Teacher', 'Employee',
    function($scope, HomeControllerServices, Student, Teacher, Employee) {

        //$scope.totalStudents = HomeControllerServices.getTotalStudentCount();
        //$scope.totalTeachers = HomeControllerServices.getTotalTeacherCount();
        //$scope.totalEmployees = HomeControllerServices.getTotalEmployeeCount();

        $scope.init = function () {
            Student.get(function (response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.totalStudents = Object.keys(response.Data).length;
            });

            Teacher.get(function (response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.totalTeachers = Object.keys(response.Data).length;
            });

            Employee.get(function (response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.totalEmployees = Object.keys(response.Data).length;
            });
        }

        $scope.init();
    }
]);

app.controller('StudentController', [
    '$scope', 'Student','HomeControllerServices',
    function ($scope, Student, HomeControllerServices) {

        $scope.init = function() {
            Student.get(function(response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.students = response.Data;
            });
            //HomeControllerServices.getAllStudents();
        }

        $scope.save = function () {

            Student.save($scope.student, function(response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.student = {};
                $scope.init();
            });
        }

        $scope.init();
    }
]);

app.controller('TeacherController', [
    '$scope', 'Teacher',
    function($scope, Teacher) {
        
        $scope.init = function() {
            Teacher.get(function(response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.teachers = response.Data;
            });
        }

        $scope.save = function () {

            Teacher.save($scope.teacher, function(response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.teacher = {};
                $scope.init();
            });
        }

        $scope.init();
    }
]);

app.controller('EmployeeController', [
    '$scope', 'Employee',
    function ($scope, Employee) {

        $scope.init = function () {
            Employee.get(function (response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.employees = response.Data;
            });
        }

        $scope.save = function () {

            Employee.save($scope.employee, function (response) {
                console.log(response);
                if (response.IsSuccess)
                    $scope.employee = {};
                $scope.init();
            });
        }

        $scope.init();

    }
]);
