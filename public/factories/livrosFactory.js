(function() {
    'use strict';

    angular
        .module('aktienow')
        .factory('LivrosFactory', function ($http) {

            var URL_GET_LIVROS = 'http://localhost:3000/api/livros/getLivros';
            var data = {};
       
            data.getLivros = function() {
                return $http.get(URL_GET_LIVROS).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };


            return data;

        });

}());