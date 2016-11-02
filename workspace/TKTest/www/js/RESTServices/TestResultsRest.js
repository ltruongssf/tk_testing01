angular.module("RESTServices")
.service('TestResultsRest', function($http) {
var TestResultsRest = this;
    TestResultsRest.getAll = function(token) {
       return $http({
           Headers:{
                 Authorization: token
            },
           url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults",
           method: 'GET',
       });
   };
   TestResultsRest.save = function(test) {
       return $http({
           url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/TestResults",
           method: 'POST',
           data: test
       });
   };
   
});