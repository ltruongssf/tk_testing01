/*global angular */
angular.module('starter.controllers')
    .controller('LobbyCtrl', ['$scope', 'TKTestQuestionService', '$state', 'TKAnswersService', '$window', 'SSFUsersRest', '$ionicHistory', 
        function($scope, TKTestQuestionService, $state, TKAnswersService, $window, SSFUsersRest, $ionicHistory) {
            TKTestQuestionService.all();
            $scope.goToTest = function() {
                TKAnswersService.resetAnswers();
                $state.go('question', {
                    questionID: 1
                });
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
                //$window.localStorage.clear();
                $ionicHistory.nextViewOptions({
                    historyRoot: true
                });
                /* $scope.shouldShowButton = TKAnswersService.getShouldShowMenuButton();
                TKAnswersService.getShouldShowMenuButton(false); */
                $state.go('landing');

            };

        }
    ]);
