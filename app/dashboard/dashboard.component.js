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

        var draggableComponents = document.getElementById('listOfComponents');
        var droppableAreaPrincipal = document.getElementById('droppable-area-principal');
        var droppableAreaChancellor = document.getElementById('droppable-area-chancellor');

        Sortable.create(draggableComponents, {
          group: {
            name: 'listOfComponents',
            pull: 'clone'
          },
          animation: 100
        });

        var droppableListPrincipal = Sortable.create(droppableAreaPrincipal, {
          group: {
            name: 'droppable-area-principal',
            put: ['listOfComponents']
          },
          filter: '.js-remove',
          onFilter: function (evt) {
            var el = droppableListPrincipal.closest(evt.item);
            el && el.parentNode.removeChild(el);
          },
          animation: 100
        });

        var droppableListChancellor = Sortable.create(droppableAreaChancellor, {
          group: {
            name: 'droppable-area-chancellor',
            put: ['listOfComponents']
          },
          filter: '.js-remove',
          onFilter: function (evt) {
            var el = droppableListChancellor.closest(evt.item);
            el && el.parentNode.removeChild(el);
          },
          animation: 100
        });

    }

})();
