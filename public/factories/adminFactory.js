(function() {
    'use strict';

    angular
        .module('aktienow')
        .factory('AdminFactory', function ($http) {

            var URL_LOGIN = 'http://localhost:3000/api/admin/login';
            var URL_GET_AVALIATIONS = 'http://localhost:3000/api/admin/getAvaliations';
            var URL_ADD_USER = 'http://localhost:3000/api/admin/addUser';
            var URL_ADD_BOOK = 'http://localhost:3000/api/admin/addBook';
            var data = {};

            data.addBook = function(request) {
                return $http.post(URL_ADD_BOOK, request).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };

            data.addUser = function(request) {
                return $http.post(URL_ADD_USER, request).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };
       
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