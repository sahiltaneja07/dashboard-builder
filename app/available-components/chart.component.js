(function() {
    angular
        .module('chartModule')
        .component('chart', chart());

    function chart() {
        return {
            templateUrl: 'app/available-components/chart.component.html',
            controller: chartCtrl,
            controllerAs: 'chart',
            bindings: {
              title: '<',
              data: '<'
            }
        };
    }

    chartCtrl.$inject = ['$scope'];

    function chartCtrl($scope) {
        var vm = this;

        vm.$onInit = function () {
            $scope.options = {
                chart: {
                    type: 'pieChart',
                    height: 350,
                    x: function(d){return d.key;},
                    y: function(d){return d.value;},
                    showLabels: true,
                    duration: 500,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };
            $scope.data = vm.data;
        };

        $(document).on('click', '.chart-header', function(e){
            if($(this).parent().find('.chart-body').css('display') === 'none'){
               $(this).parent().find('.chart-body').slideDown();
            }
            else{
                $(this).parent().find('.chart-body').slideUp();
            }
            e.stopImmediatePropagation();
        });

        $(document).on('click', '.category', function(e){
            if($(this).parent().find('.sub-category').css('display') === 'none'){
               $(this).parent().find('.sub-category').slideDown();
            }
            else{
                $(this).parent().find('.sub-category').slideUp();
            }
            e.stopImmediatePropagation();
        });
        
    }

})();
