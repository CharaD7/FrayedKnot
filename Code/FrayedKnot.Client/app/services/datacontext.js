(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', 'wams', datacontext]);

    function datacontext(common, wams) {
        var $q = common.$q;

        var service = {
            getKnots: function () { return wams.query("knots"); },
            getSteps: function () { return wams.query("steps"); },
            getCategories: function () { return wams.invokeApi("categories"); },
            getKnot: function (name) {
                return wams.query("knots")
                    .then(function (knots) {
                        for (var i = 0; i < knots.length; i++) {
                            if (name == knots[i].name) {
                                var knot = knots[i];
                                knot.prevKnot = (knots[i - 1] ? knots[i - 1] : knots[knots.length - 1]);
                                knot.nextKnot = (knots[i + 1] ? knots[i + 1] : knots[0]);
                                return knot;
                            }
                        }
                        return null;
                    });
            }
        };

        return service;

    }
})();