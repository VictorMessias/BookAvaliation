(function() {
    'use strict';

    angular
        .module('aktienow')
        .factory('AdminFactory', function ($http) {

            var URL_LOGIN = 'http://localhost:3000/api/admin/login';
            var URL_GET_AVALIATIONS = 'http://localhost:3000/api/admin/getAvaliations';
            var data = {};
       
            data.login = function(request) {
                return $http.post(URL_LOGIN, request).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };

            data.getAvaliations = function() {
                return $http.get(URL_GET_AVALIATIONS).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };


            return data;

        });

}());