(function() {
    'use strict';

    angular
        .module('aktienow').controller('HomeController', ['$scope', '$rootScope', '$http', '$location', 'LivrosFactory', 'AvaliationFactory',
            function ($scope, $rootScope, $http, $location, LivrosFactory, AvaliationFactory) {

              $scope.livros = ["AAAA", "BBBB"];
              $scope.notas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
              $scope.estados = ["Òtimo", "Bom", "Regular", "Ruim"];
             
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
                console.log(valid);
                if(valid){

                  var data = {
                      livroID: $scope.avaliation.livro,
                      nota: $scope.avaliation.nota,
                      estado: $scope.avaliation.estado,
                      obs: $scope.avaliation.obs
                  };

                  AvaliationFactory.addAvaliation(data)
                  .success(function(response){
                    if(response.success){
                      //$scope.livros = response.data;
                    }
  
                  }).error(function(error){
                      console.log(error);
                  });

                }

              }




        }]);

}());