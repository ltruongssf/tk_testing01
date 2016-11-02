/*global angular */ 
angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService', '$state', 'TKAnswersService', '$window', 'SSFUsersRest', 
   function($scope, TKTestQuestionService, $state, TKAnswersService, $window, SSFUsersRest) {
   TKTestQuestionService.all();
   $scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };
   function performRequest() {
    var answersDict = angular.copy(TKAnswersService.getAnswers());
    var $ionicHistory = this;
    var date = new Date();
    answersDict["createDate"] = date.toUTCString();
    TKAnswersService.saveTest(answersDict);
    $ionicHistory.nextViewOptions({
         historyRoot: true
    });
    $state.go('lobby');
}
    $scope.logout = function() {
         SSFUsersRest.logout($window.localStorage.token);
         
         $state.go('landing');
    };

}]);


