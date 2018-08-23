(function() {
    'use strict';

    angular
        .module('aktienow')
        .factory('indexFactory', function ($http, $q, $cookies, $window) {

            var URL_LOGIN = 'http://192.168.15.4:3000/api/auth/login';
            var data = {};


            data.logout = function(){
              AuthTokenFactory.setToken();
              $window.localStorage.removeItem('user');
            };

        
            data.login = function(request) {
                return $http.post(URL_LOGIN, request).success(function (response) {
                  if(response.success){
                      AuthTokenFactory.setToken(response.token);
                      var storageData = btoa(JSON.stringify(response.data));
                      $window.localStorage.setItem('user', storageData);
                  }
                  return response;
                }).error(function (error) {
                    return error;
                });
            };


            return data;

        });

}());