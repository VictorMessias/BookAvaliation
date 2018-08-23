(function() {
    'use strict';

    angular
        .module('aktienow').controller('AdminController', ['$scope', '$rootScope', '$http', '$location', 'LivrosFactory', 'AdminFactory', '$window',
            function ($scope, $rootScope, $http, $location, LivrosFactory, AdminFactory, $window) {

              $scope.avaliations = [];


              // Get username
              var username = $window.localStorage.getItem('username');

            
              $scope.loadAvaliations = function(){
                
                AdminFactory.getAvaliations()
                .success(function(response){
                  if(response.success){
                    $scope.avaliations = response.data;
                  }else if(!response.success && resposne.message == 'NO_AVALIATION'){
                      $scope.msgError = "Não há avaliações!";
                  }

                }).error(function(error){
                    console.log(error);
                });

              };




              $scope.login = function(valid){
                if(valid){
                var data = {
                    username: $scope.loginForm.user,
                    password: $scope.loginForm.password
                };

                AdminFactory.login(data)
                .success(function(response){
                  if(response.success){
                    // Salva o usuário que foi logado com sucesso, para utilizá-lo na avaliação
                    $window.localStorage.setItem('username', $scope.loginForm.user);
                    // Redireciona para a paǵina de avaliações
                    $location.path('/dashboard');
                  }else{
                    if(response.message == 'NO_USER_FOUND_OR_WRONG_PASSWORD'){
                      $scope.msgError = 'Usuário ou senha estão errados!';
                    }
                  }

                }).error(function(error){
                    console.log(error);
                });

              }else{
                $scope.msgLoginUser = 'Insira um usuário!';
              }

              };

              $scope.salvar = function(valid){  
                if(valid){

                  var data = {
                      username: username,
                      bookID: $scope.avaliation.livro,
                      nota: $scope.avaliation.nota,
                      estado: $scope.avaliation.estado,
                      obs: $scope.avaliation.obs
                  };

                  AvaliationFactory.addAvaliation(data)
                  .success(function(response){
                    if(response.success){
                      $location.path('/success');
                    }else{
                      if(response.message == 'AVALIATION_ALREADY_MADE')
                        $scope.msg = "Este livro já foi avaliado por você!";
                    }
  
                  }).error(function(error){
                      console.log(error);
                  });

                }

              }




        }]);

}());