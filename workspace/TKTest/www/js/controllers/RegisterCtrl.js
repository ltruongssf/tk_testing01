/* global angular */
angular.module('starter.controllers')
    .controller('RegisterCtrl', ['$scope', '$window', '$state', 'TKAnswersService', 'TKResultsButtonService', 'SSFUsersRest',
        function($scope, $window, $state, TKAnswersService, TKResultsButtonService, SSFUsersRest) {
            $scope.user = {};
            $scope.signupForm = function(form) {
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                //SSFUsersRest.post();
                SSFUsersRest.post($scope.user)
                    .then(function(response) {
                        $state.go('lobby');
                    }, function(error) {
                        // inform the user of any known problems that arose, otherwise give a generic 
                        // failed message
                        alert("Please complete the form!");
                    });

            };
        }
    ]);