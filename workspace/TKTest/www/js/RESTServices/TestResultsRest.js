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
        TestResultsRest.get = function(userID, token) {
            return $http({
                url: "https://revamped-tktest-jbrownssf.c9users.io:8081/api/SSFUsers?filter[where][userID]=" + userID,
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            });
        };

    });
