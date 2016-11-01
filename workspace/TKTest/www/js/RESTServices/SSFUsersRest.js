/* global angular */
angular.module("RESTServices", [])
.service('SSFUsersRest', function($http) {
var SSFUsersRest = this;
SSFUsersRest.post = function(newUserData) {
 return $http({
   url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers",
   method: "POST",
   data: newUserData
 
 
});
};
});