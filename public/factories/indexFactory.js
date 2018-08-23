(function() {
    'use strict';

    angular
        .module('aktienow')
        .factory('IndexFactory', function ($http) {

            var URL_LOGIN = 'http://localhost:3000/api/user/login';
            var data = {};
       
            data.login = function(request) {
                return $http.post(URL_LOGIN, request).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };


            return data;

        });

}());