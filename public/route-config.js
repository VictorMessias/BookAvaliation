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
            .state('main.home', {
              url: '/home',
              views: {
                'main-view': {
                  templateUrl: '/views/pages/home.html',
                  controller: 'HomeController'
                }
              }
            })
         



        // if(window.history && window.history.pushState){
        //     $locationProvider.html5Mode({
        //         enabled: true,
        //         requireBase: false
        //     });
        //   }
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