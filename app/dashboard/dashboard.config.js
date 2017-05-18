(function() {
    angular
        .module('dashboardModule')
        .config(dashboardConfig);

    dashboardConfig.$inject = ['$stateProvider'];

    function dashboardConfig($stateProvider) {
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            template: '<dashboard></dashboard>'
        });
    }


})();
