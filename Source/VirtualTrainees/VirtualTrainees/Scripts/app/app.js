'use strict';
var app = angular.module('myApp', [
    'ngRoute',
    'ngResource'
]);


// Declare app level module which depends on filters, and services

app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'HomeController'
            })
            .when('/students', {
                templateUrl: 'views/students/students.html',
                controller: 'StudentController'
            })
            .when('/teachers', {
                templateUrl: 'views/teachers/teachers.html',
                controller: 'TeacherController'
            })
            .when('/employees', {
                templateUrl: 'views/employees/employees.html',
                controller: 'EmployeeController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
]);

