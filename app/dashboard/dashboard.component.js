(function() {
    angular
        .module('dashboardModule')
        .component('dashboard', dashboard());

    function dashboard() {
        return {
            templateUrl: 'app/dashboard/dashboard.component.html',
            controller: dashboardCtrl,
            controllerAs: 'dashboard'
        };
    }

    dashboardCtrl.$inject = ['$state'];

    function dashboardCtrl($state) {
        var vm = this;

        vm.dashboardOwner = 'principal';
    }

})();
