angular.module("RESTServices")
    .service('TestResultsRest', function($http, $window) {
        var TestResultsRest = this;
        TestResultsRest.getAll = function(token) {
            return $http({
                Headers: {
                    Authorization: token
                },
                url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults",
                method: 'GET',
            });
        };
        TestResultsRest.save = function(test, token) {
            return $http({
                url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults",
                method: 'POST',
                data: test,
                 Headers: {
                    Authorization: token
                },
            });
        };


    });
    
