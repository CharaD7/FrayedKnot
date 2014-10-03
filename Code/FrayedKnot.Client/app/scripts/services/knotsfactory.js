'use strict';

/**
 * @ngdoc service
 * @name frayedKnotApp.knotsFactory
 * @description
 * # knotsFactory
 * Factory in the frayedKnotApp.
 */
angular.module('frayedKnotApp')
  .factory('knotsFactory', ['$http','$q',function ($http,$q) {
    //options = options || {};
    //if (!options.knotName) throw "A name for the knot is required";
      if (!$q) { return; }
    return {
        getKnots: function () {
            return $http.get('http://frayedknot.azure-mobile.net/tables/knots')

                //get data from response
                .then(function (response) { return response.data; })

                ////fetch extra data from wikipedia
                //.then(function (knots) {
                //    return $q.all(knots.map(function (knot) {
                //        return $http.jsonp('http://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + knot.name + '&prop=sections&callback=JSON_CALLBACK')

                //            //get sections from response
                //            .then(function (response) { return response.data.parse.sections; })

                //            //
                //            .then(function (sections) {
                //                return $q.all(sections.map(function (section) {
                //                    return $http.jsonp('http://en.wikipedia.org/w/api.php?format=json&action=parse&page=' + knot.name + '&section=' + section.index + '&callback=JSON_CALLBACK')
                //                        .then(function (section) {
                //                            if (!knot.sections) { knot.sections = []; } //make sure the sections array exists
                //                            knot.sections.push(section.data.parse.text['*']);
                //                        });
                //                }));
                //            });
                //    }))
                //        .then(function(){return knots;});
                //});

                //return knots
                .then(function (knots) {
                    return knots;
                });
        }
    };
  }]);
