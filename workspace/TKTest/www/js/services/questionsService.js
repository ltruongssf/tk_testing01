angular.module('TKTestQuestions', [])
.service('TKTestQuestionService', ['$http', function ($http){
    var service = this;
}]);

var questions = [];
service.all = function () {
        $http.get('files/questions.json')
        .then(function(response){
            if(response.status == 200)
            {
                questions = response.data;
            }
        });
    };
service.getQuestion = function(questionID)
{
        var results = [];
        questions.forEach(function(question){
            //Search for questions with the specified question ID
            if(question.Question_Number == questionID)
                results.push(question);
        });
        return results;
};

 /*{
    "Question_Number": 2,
    "Answer_ID": {"A", "B"},
    "Text": "",
    "Style": {"Competing",  "Collaborating", "Compromising", "Avoiding", "Accommodating"},
    "id": "objectid"
  } */ 