angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService',
   function($scope, TKTestQuestionService) {
   TKTestQuestionService.all();
   $scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };

}]);