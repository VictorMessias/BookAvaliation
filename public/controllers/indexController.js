(function() {
    'use strict';

    angular
        .module('aktienow').controller('IndexController', ['$scope', '$rootScope', '$http', '$location',
            function ($scope, $rootScope, $http, $location) {

              $scope.msgLoginEmail = 'Email inválido!';
              $scope.msgLoginPassword = 'Sua senha deve ter no mínimo 8 caracteres.';

              // Register
              $scope.msgRegisterName = 'Qual é seu nome completo?'
              $scope.msgRegisterEmail = 'Este e-mail não é válido!';
              $scope.msgRegisterPassword = 'Sua senha deve ter no mínimo 8 caracteres.';
              $scope.msgRegisterGender = 'Qual é seu sexo?';
              $scope.msgRegisterBorn = 'Quando você nasceu?';
              $scope.msgRegisterTerms = 'Você concorda com os termos?';


              console.log('cons');

             

              $scope.login = function(valid){
                if(valid){
                var data = {
                  email: $scope.loginData.email,
                  password: $scope.loginData.password,
                  mobile: false
                };

                AuthFactory.login(data)
                .success(function(response){
                  console.log(response);
                  if(response.success){
                    $location.path('/home');
                  }else{
                    if(response.message == 'NOT_FOUND_USER'){
                      $scope.msgLoginEmail = 'Este email não está registrado!';
                      $scope.loginForm.email.$valid = false;
                    }else if(response.message == 'INVALID_PWD'){
                      $scope.msgLoginPassword = 'Senha incorreta!';
                      $scope.loginForm.password.$valid = false;
                    }
                  }

                }).error(function(error){
                    console.log(error);
                });

              }

              };



        }]);

}());