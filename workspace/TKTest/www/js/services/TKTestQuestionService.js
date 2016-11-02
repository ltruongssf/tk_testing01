angular.module('TKTestQuestions', [])
    .service('TKTestQuestionService', ['$http', '$window', 'QuestionsRest', 
    function($http, $window, QuestionsRest) {
        var service = this;
        var questions = [];
        service.all = function() {

            QuestionsRest.get($window.localStorage["token"])

            //$http.get('files/questions.json')
            .then(function(response) {
                if (response.status == 200) {
                    questions = response.data;
                    $window.localStorage.userID = response.data.ID;
                    $window.localStorage.token = response.data.token;
                }
            });
        };
        service.getQuestion = function(questionID) {
            var results = [];
            questions.forEach(function(question) {
                //Search for questions with the specified question ID
                if (question.Question_Number == questionID)
                    results.push(question);
            });
            return results;
        };
    }]);