'use strict';

app.factory('urlFactory', [ function() {

        var baseUrl = '/api/';

        var urls = {};
        urls.baseUrl = baseUrl;
        return urls;
    }
]);

app.factory('Student', ['urlFactory', '$resource', function (urlFactory, $resource) {
    var resource = $resource(urlFactory.baseUrl + "Student");
    return resource;
}]);

app.factory('Teacher', ['urlFactory', '$resource', function (urlFactory, $resource) {
    var resource = $resource(urlFactory.baseUrl + "Teacher");
    return resource;
}]);

app.factory('Employee', ['urlFactory', '$resource', function (urlFactory, $resource) {
    var resource = $resource(urlFactory.baseUrl + "Employee");
    return resource;
}]);