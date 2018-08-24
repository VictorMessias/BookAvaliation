(function() {
    'use strict';

    angular
        .module('aktienow').controller('AdminController', ['$scope', '$rootScope', '$http', '$location', 'LivrosFactory', 'AdminFactory', '$window',
            function ($scope, $rootScope, $http, $location, LivrosFactory, AdminFactory, $window) {

              $scope.avaliations = [];
              $scope.livros = [];
              
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


              $scope.loadLivros = function(){
                
                LivrosFactory.getLivros()
                .success(function(response){
                  if(response.success){

                    $scope.livros = response.data;
                 
                        LivrosFactory.getLivrosDetails()
                        .success(function(response){
                        if(response.success){

                            $scope.avaliations = response.data;

                            for(var i = 0; i < $scope.livros.length; i++){
                                $scope.livros[i].mediaNota = 0;
                                $scope.livros[i].mediaOtimo = 0;
                                $scope.livros[i].mediaBom = 0;
                                $scope.livros[i].mediaRegular = 0;
                                $scope.livros[i].mediaRuim = 0;

                                for(var j = 0; j < $scope.avaliations.length; j++){
                                    if($scope.livros[i].name == $scope.avaliations[j].bookID.name){
                                       $scope.livros[i].mediaNota += $scope.avaliations[i].nota;
                                       $scope.livros[i].mediaOtimo = $scope.avaliations[i].estado == "Ótimo" ? 1 : 0;
                                       $scope.livros[i].mediaBom = $scope.avaliations[i].estado == "Bom" ? 1 : 0;
                                       $scope.livros[i].mediaRegular = $scope.avaliations[i].estado == "Regular" ? 1 : 0;
                                       $scope.livros[i].mediaRuim = $scope.avaliations[i].estado == "Ruim" ? 1 : 0;

                                    }
                                }


                                $scope.livros[i].mediaOtimo = !isFinite(1 / $scope.livros[i].mediaOtimo) ? 0 : 1 / $scope.livros[i].mediaOtimo * 100;
                                $scope.livros[i].mediaBom = !isFinite(1 / $scope.livros[i].mediaBom) ? 0 : 1 / $scope.livros[i].mediaBom * 100;
                                $scope.livros[i].mediaRegular = !isFinite(1 / $scope.livros[i].mediaRegular) ? 0 : 1 / $scope.livros[i].mediaRegular * 100;
                                $scope.livros[i].mediaRuim = !isFinite(1 / $scope.livros[i].mediaRuim) ? 0 : 1 / $scope.livros[i].mediaRuim * 100;

                            }

                        }else if(!response.success && resposne.message == 'NO_AVALIATION'){
                            $scope.msgError = "Não há avaliações!";
                        }

                        }).error(function(error){
                            console.log(error);
                        });

                    }

                }).error(function(error){
                    console.log(error);
                });


              };



              $scope.login = function(valid){
                if(valid){
                var data = {
                    username: $scope.loginData.user,
                    password: $scope.loginData.password
                };

                AdminFactory.login(data)
                .success(function(response){
                  if(response.success){
                    // Salva o usuário que foi logado com sucesso, para utilizá-lo na avaliação
                    $window.localStorage.setItem('username', $scope.loginForm.user);
                    // Redireciona para a paǵina de avaliações
                    $location.path('/dashboard-user');
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

              $scope.saveUser = function(valid){  

                if($scope.newUser.admin && $scope.newUserForm.password.$pristine){
                    
                    $scope.newUserForm.password.$valid = false;

                }else if(valid){

                  var data = {
                      name: $scope.newUser.name,
                      username: $scope.newUser.username,
                      admin: $scope.newUser.admin,
                      password: $scope.newUser.password
                  };

                  AdminFactory.addUser(data)
                  .success(function(response){
                    if(response.success){
                        $scope.msgSuccess = "Usuário cadastrado com sucesso!";
                        $scope.newUser = {};
                        $scope.newUserForm.$submitted = false;
                    }else{
                      if(response.message == 'USER_ALREADY_EXISTS')
                        $scope.msgError = "Este usuário já existe!";
                    }
  
                  }).error(function(error){
                      console.log(error);
                  });

                }
              };


              $scope.saveBook = function(valid){  
                if(valid){

                  var data = {
                      name: $scope.newBook.name,
                      author: $scope.newBook.author
                  };

                  AdminFactory.addBook(data)
                  .success(function(response){
                    if(response.success){
                        $scope.msgSuccess = "Livro cadastrado com sucesso!";
                        $scope.newBook = {};
                    }else{
                      if(response.message == 'BOOK_ALREADY_EXISTS')
                        $scope.msgError = "Este livro já existe!";
                    }
  
                  }).error(function(error){
                      console.log(error);
                  });

                }
              };




        }]);

}());