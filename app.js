angular.module('dashboardBuilder', [
        'ui.router',
        'dashboardModule',
        'chartModule'
    ])
    .config(dashboardBuilderConfig);

dashboardBuilderConfig.$inject = ['$urlRouterProvider'];

function dashboardBuilderConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
}