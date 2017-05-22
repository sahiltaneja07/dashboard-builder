angular.module('dashboardBuilder', [
        'ui.router',
        'nvd3',
        'dashboardModule',
        'chartModule'
    ])
    .config(dashboardBuilderConfig);

dashboardBuilderConfig.$inject = ['$urlRouterProvider'];

function dashboardBuilderConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
}