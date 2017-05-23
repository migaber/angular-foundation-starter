(function() {
    'use strict';
    /**
    * @ngdoc overview
    * @name afStarterKit
    * @description
    * # afStarterKit
    *
    * Main module of the application.
    */
    angular
    .module('afStarterKit', [
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'angular-loading-bar',
    ]);

    angular.module('afStarterKit').config(configMyApp);
    configMyApp.$inject = ['$logProvider', '$stateProvider', '$urlRouterProvider',
    '$locationProvider', 'cfpLoadingBarProvider'];

    angular.module('afStarterKit').run(runMyApp);
    runMyApp.$inject = ['$rootScope'];

    function configMyApp(logProvider, stateProvider, urlRouterProvider, locationProvider, cfpLoadingBarProvider) {
        logProvider.debugEnabled(true);
        urlRouterProvider.rule(function($injector, $location) {
            var path = $location.path();
            var hasTrailingSlash = path[path.length - 1] === '/';

            if (hasTrailingSlash) {
                //if last charcter is a slash, return the same url without the slash
                var newPath = path.substr(0, path.length - 1);
                return newPath;
            }
        });
        locationProvider.html5Mode(true);
        stateProvider
        .state('home', {
            url : '/',
            templateUrl : 'views/home.html',
        });
        urlRouterProvider.otherwise('/');
        cfpLoadingBarProvider.includeSpinner = false;
    }

    function runMyApp($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function(e, toState, toParam, fromState, fromParam) {
            $rootScope.pageTitle = toState.title;
        });
    }
})();
