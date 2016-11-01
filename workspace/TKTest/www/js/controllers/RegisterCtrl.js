/* global angular */
angular.module('starter.controllers')
    .controller('RegisterCtrl', ['$scope', '$window', '$state', 'tests', 'TKAnswersService', 'TKResultsButtonService', 'SSFUsersRest',
        function($scope, $window, $state, tests, TKAnswersService, TKResultsButtonService, SSFUsersRest) {
            $scope.user = {};
            $scope.signupForm = function(form) {
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                SSFUsersRest.post();
                SSFUsersRest.post($scope.user)
                    .then(function(response) {
                        // handle different responses and decide what happens next
                    }, function(error) {
                        // inform the user of any known problems that arose, otherwise give a generic 
                        // failed message
                    });

            };
        }
    ]);