angular.module('starter.controllers')
    .controller('LoginCtrl', ['$scope', '$window', '$state', 'TKAnswersService', 'TKResultsButtonService', 'SSFUsersRest',
        function($scope, $window, $state, TKAnswersService, TKResultsButtonService, SSFUsersRest) {
            $scope.user = {};
            $scope.signupForm = function(form) {
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                //SSFUsersRest.post();
                SSFUsersRest.login($scope.user)
                    .then(function(response) {
                        $window.localStorage.userID = response.data.userId;
                        $window.localStorage.token = response.data.id;
                        if(response.data === null) {
                            return alert("User is offline"); 
                        } else if(response.status === 200) {
                        
                        $state.go('lobby');
                        }
                        
                    }, function(error) {
                        if(error.status === 404) {
                            return alert('Not found');
                        }
                        else if (error.status === 500) {
                            return alert("Server is offline");
                        }
                        else { 
                        alert("Please complete the form!");
                        }
                    });

            };
        }
    ]);