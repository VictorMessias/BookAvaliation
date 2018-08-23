(function() {
    'use strict';

    angular
        .module('aktienow').controller('IndexController', ['$scope', '$rootScope', '$http', '$location', 'IndexFactory',
            function ($scope, $rootScope, $http, $location, IndexFactory) {

              $scope.msgLoginUser = '';
             

              $scope.login = function(valid){
                if(valid){
                var data = {
                    username: $scope.loginForm.user
                };

                IndexFactory.login(data)
                .success(function(response){
                  if(response.success){
                    $location.path('/home');
                  }else{
                    if(response.message == 'NO_USER_FOUND'){
                      $scope.msgLoginUser = 'Este email não está registrado!';
                    }
                  }

                }).error(function(error){
                    console.log(error);
                });

              }

              };



        }]);

}());