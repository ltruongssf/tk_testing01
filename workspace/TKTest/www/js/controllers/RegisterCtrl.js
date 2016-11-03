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
                       $window.localStorage.userID = response.data.id;
                       $window.localStorage.token = response.data.token;
                    
                    if(response.data === null) {
                        return alert('User is offline');
           }
                    else if(response.status=== 200) {
                        $state.go('lobby');
                    }
                   
                    },  function(error) {
                        if(error.status=== 404) {
                            return alert('Not found!');
                        }
                        else if(error.status === 422) {
                            return alert('Email is already taken!');
                        }
                        else if(error.status === 422) {
                            return alert('Email is already taken!');
                        }
                        alert("Please complete the form!");
                    });

            };
        }
    ]);