'use strict';

/**
 * @ngdoc function
 * @name frayedKnotApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the frayedKnotApp
 */
angular.module('frayedKnotApp')
  .controller('CategoriesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
