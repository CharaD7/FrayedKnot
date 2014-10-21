(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common', 'datacontext', dashboard]);

    function dashboard(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'Knotty News',
            description: 'Knots are fun and useful!'
        };
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getKnots(), getCategories()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }

        function getKnots() {
            return datacontext.getKnots().then(
                function (data) { return vm.knots = data; },
                function (err) { debugger; }
            );
        }

        function getCategories() {
            return datacontext.getCategories().then(function (data) { return vm.categories = data; });
        }
        
    }
})();