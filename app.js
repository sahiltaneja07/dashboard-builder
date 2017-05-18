angular.module('dashboardBuilder', [
        'ui.router',
        'dashboardModule'
    ])
    .config(dashboardBuilderConfig);

dashboardBuilderConfig.$inject = ['$urlRouterProvider'];

function dashboardBuilderConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
}