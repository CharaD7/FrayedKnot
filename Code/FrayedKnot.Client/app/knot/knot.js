(function () {
    'use strict';
    var controllerId = 'knot';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$routeParams', '$scope', knot]);

    function knot(common, datacontext, $routeParams, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.name = $routeParams.name; //TODO: instead of just getting the name, fetch all of the knot details from WAMS

        vm.steps = [];
        datacontext.getSteps().then(function (steps) {
            vm.steps = steps;
        });

        $scope.myfunction = function (e) { alert(e); };

        activate();

        function activate() {
            common.activateController([getKnot($routeParams.name)], controllerId)
                .then(function () { log('Knot data retrieved'); });
        }

        function getKnot(name) {
            return datacontext.getKnot({ name: name }).then(function (data) { return vm.knot = data; })
        }

    }
})();
