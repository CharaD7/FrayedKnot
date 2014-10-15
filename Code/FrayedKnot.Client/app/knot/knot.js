(function () {
    'use strict';
    var controllerId = 'knot';
    angular.module('app').controller(controllerId, ['common', datacontext, '$routeParams', knot]);

    function knot(common, datacontext, $routeParams) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.name = $routeParams.name; //TODO: instead of just getting the name, fetch all of the knot details from WAMS

        vm.steps = [];
        datacontext.getSteps().then(function (steps) {
            vm.steps = steps;
        });

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { });
        }
    }
})();
