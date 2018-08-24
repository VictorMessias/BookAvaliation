(function() {
    'use strict';

    angular
        .module('aktienow')
        .factory('LivrosFactory', function ($http) {

            var URL_GET_LIVROS = 'http://localhost:3000/api/livros/getLivros';
            var URL_GET_LIVROS_DETAILS = 'http://localhost:3000/api/livros/getLivrosDetails';
            var data = {};
       
            data.getLivros = function() {
                return $http.get(URL_GET_LIVROS).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };

            data.getLivrosDetails = function() {
                return $http.get(URL_GET_LIVROS_DETAILS).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };


            return data;

        });

}());