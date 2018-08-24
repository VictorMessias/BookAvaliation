(function() {
    'use stric';

    var app = angular.module('aktienow').config(config);
    config.$inject = ['$stateProvider', '$locationProvider'];
    function config($stateProvider, $locationProvider) {

        $stateProvider
        .state('index', {
              url: '/',
              views: {
                'main-view': {
                  templateUrl: '/views/pages/index.html',
                  controller: 'IndexController'
                }
              }
            })
        .state('home', {
            url: '/home',
            views: {
                'main-view': {
                templateUrl: '/views/pages/home.html',
                controller: 'HomeController'
                }
            }
            })
        .state('success', {
            url: '/success',
            views: {
                'main-view': {
                templateUrl: '/views/pages/success.html'
                }
            }
            })
        .state('admin', {
            url: '/admin',
            views: {
                'main-view': {
                templateUrl: '/views/pages/admin.html',
                controller: 'AdminController'
                }
            }
            })
        .state('dashboard-user', {
            url: '/dashboard-user',
            views: {
                'main-view': {
                templateUrl: '/views/pages/dashboard_user.html',
                controller: 'AdminController'
                }
            }
            })
        .state('dashboard-book', {
            url: '/dashboard-book',
            views: {
                'main-view': {
                templateUrl: '/views/pages/dashboard_livros.html',
                controller: 'AdminController'
                }
            }
            })
        .state('newUser', {
            url: '/add-user',
            views: {
                'main-view': {
                templateUrl: '/views/pages/add_user.html',
                controller: 'AdminController'
                }
            }
            })
        .state('newBook', {
            url: '/add-book',
            views: {
                'main-view': {
                templateUrl: '/views/pages/add_book.html',
                controller: 'AdminController'
                }
            }
            })
        .state('otherwise', {
            url: '*path',
            views: {
                'main-view': {
                templateUrl: '/views/pages/404.html'
                }
            }
        });

        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
          }
    }

// app.run(['$rootScope', 'AuthFactory', '$state', function($rootScope, AuthFactory, $state){
//       $rootScope.$on('$stateChangeStart', function(event, next, current){

//           if(next.authenticated){
//             if(!AuthFactory.isLoggedIn()){
//               event.preventDefault();
//               $state.go('index');
//             }
//           }else{
//             if(AuthFactory.isLoggedIn()){
//               event.preventDefault();
//               $state.go('main.home');
//             }
//           }
//       });

//       $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
//            $rootScope.previus = fromParams;
//        });
//     }]);

}());