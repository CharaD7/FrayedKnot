'use strict';

/**
 * @ngdoc overview
 * @name frayedKnotApp
 * @description
 * # frayedKnotApp
 *
 * Main module of the application.
 */
angular
  .module('frayedKnotApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .when('/knots', {
        templateUrl: 'views/knots.html',
        controller: 'KnotsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
