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

    chartCtrl.$inject = [];

    function chartCtrl() {
        var vm = this;

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
