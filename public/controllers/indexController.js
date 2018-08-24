(function() {
    'use strict';

    angular
        .module('aktienow').controller('IndexController', ['$scope', '$window', '$location', 'IndexFactory',
            function ($scope, $window, $location, IndexFactory) {

              $scope.msgLoginUser = '';
             

              $scope.login = function(valid){
                if(valid){
                var data = {
                    username: $scope.loginData.user
                };

                IndexFactory.login(data)
                .success(function(response){
                  if(response.success){
                    // Salva o usuário que foi logado com sucesso, para utilizá-lo na avaliação
                    $window.localStorage.setItem('username', $scope.loginData.user);
                    // Redireciona para a paǵina de avaliações
                    $location.path('/home');
                  }else{
                    if(response.message == 'NO_USER_FOUND'){
                      $scope.msgLoginUser = 'Este usuário não está registrado!';
                    }
                  }

                }).error(function(error){
                    console.log(error);
                });

              }else{
                $scope.msgLoginUser = 'Insira um usuário!';
              }

              };



        }]);

}());