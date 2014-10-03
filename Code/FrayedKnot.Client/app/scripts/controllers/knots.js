'use strict';

/**
 * @ngdoc function
 * @name frayedKnotApp.controller:KnotsCtrl
 * @description
 * # KnotsCtrl
 * Controller of the frayedKnotApp
 */
angular.module('frayedKnotApp')
  .controller('KnotsCtrl', function ($scope, knotsFactory) {
      //$scope.knots = [{ name: 'knot1' }, { name: 'knot2' }];
      knotsFactory.getKnots()
      .then(function (knots) {
          $scope.knots = knots;
      });

  });
