(function() {
    'use strict';

    angular
        .module('aktienow').controller('HomeController', ['$scope', '$rootScope', '$http', '$location', 'LivrosFactory', 'AvaliationFactory', '$window',
            function ($scope, $rootScope, $http, $location, LivrosFactory, AvaliationFactory, $window) {

              $scope.livros = [];
              $scope.notas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
              $scope.estados = ["Ótimo", "Bom", "Regular", "Ruim"];


              // Get username
              var username = $window.localStorage.getItem('username');

             
              (function(){

                LivrosFactory.getLivros()
                .success(function(response){
                  if(response.success){
                    $scope.livros = response.data;
                  }

                }).error(function(error){
                    console.log(error);
                });


              })();

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

                        console.log($scope.avaliationForm.estado);
                    }
  
                  }).error(function(error){
                      console.log(error);
                  });

                }

              }




        }]);

}());