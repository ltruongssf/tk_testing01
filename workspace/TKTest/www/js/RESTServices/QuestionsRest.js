
angular.module("RESTServices")
    .service('QuestionsRest', function($http, $window) {
        var QuestionsRest = this;
        QuestionsRest.get = function(token) {
            $window.localStorage[token];
            return $http({
                url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/Questions/",
                method: "GET",
                headers: {
                    Authorization: token
                },
            });
        };




    });
