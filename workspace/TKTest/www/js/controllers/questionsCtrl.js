/*global angular */
angular.module('starter.controllers')
.controller('QuestionsCtrl',['$scope', '$stateParams', 'testInfo', 'TKAnswersService', '$state', '$ionicHistory', 'TKResultsButtonService', 
function($scope, $stateParams, testInfo, TKAnswersService, $state, $ionicHistory, TKResultsButtonService) {
    $scope.qNumber = $stateParams.questionID;
    $scope.shouldShowButton = TKResultsButtonService.getShouldShowMenuButton();
    testInfo.forEach(function(infoDict) {
     if(infoDict.Answer_ID === "A")
          $scope.questionA = infoDict;
     if(infoDict.Answer_ID === "B")
          $scope.questionB = infoDict;
    $scope.buttonClicked = function ( option ) {
        var category = $scope["question" + option].Style;
        TKAnswersService.saveAnswer(category);
       
        if($scope.qNumber == 30) {
           performRequest();
        }
        else {
          var nextqNumber = Number($scope.qNumber) + 1;
          $state.go('question', {questionID: nextqNumber});
        }
};
$scope.ptorQuestionGoA = 'ptor-question-go-a' + $stateParams.questionID;
$scope.ptorQuestionGoB = 'ptor-question-go-b' + $stateParams.questionID;
$scope.ptorQuestionTextA = 'ptor-question-text-a' + $stateParams.questionID;
$scope.ptorQuestionTextB = 'ptor-question-text-b' + $stateParams.questionID;

$scope.goBack = function() {
      if($scope.qNumber >1)
        TKAnswersService.eraseLastAnswer();
      $ionicHistory.goBack();
 };
 function performRequest() {
     var answersDict = angular.copy(TKAnswersService.getAnswers());
     var date = new Date();
     answersDict["createDate"] = date.toUTCString();
     TKAnswersService.saveTest(answersDict);
     TKResultsButtonService.setShouldShowMenuButton(true);
     $ionicHistory.nextViewOptions({
         historyRoot: true
     });
     $state.go('results');
 }
 });
 }]);