(function() {
    'use strict';

    angular
        .module('aktienow')
        .factory('AvaliationFactory', function ($http) {

            var URL_ADD_AVALIATION = 'http://localhost:3000/api/avaliation/addAvaliation';
            var data = {};
       
            data.addAvaliation = function(request) {
                return $http.post(URL_ADD_AVALIATION, request).success(function (response) {
                  return response;
                }).error(function (error) {
                    return error;
                });
            };


            return data;

        });

}());