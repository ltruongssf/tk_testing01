/* global angular */
angular.module("RESTServices", [])
 .service('SSFUsersRest', function($http) {
  var SSFUsersRest = this;
  SSFUsersRest.post = function(newUserData, token) {
   return $http({
    url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers",
    method: "POST",
    data: newUserData,
      headers: {
           'Authorization': token
       }
   });
  };
  SSFUsersRest.login = function(newUserData, token) {
   return $http({
    url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/login",
    method: "POST",
    data: newUserData,
      headers: {
           'Authorization': token
       }
   });
  };
  SSFUsersRest.logout = function(token) {
   return $http({
    url: "https://strongloop-backend-ohheyitslisa.c9users.io/api/SSFUsers/logout",
    method: "POST",
    headers: {
     'Authorization': token
    },
   });
  };
 });
