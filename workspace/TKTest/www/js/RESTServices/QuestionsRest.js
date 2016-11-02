
angular.module("RESTServices")
    .service('QuestionsRest', function($http, TKTestQuestionService, $window) {
        var QuestionsRest = this;
        QuestionsRest.get = function(newUserData, token) {
            $window.localStorage[token];
            return $http({
                url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/logout",
                method: "POST",
                data: newUserData,
                headers: {
                    Authorization: token
                },
            });
        };




    });
