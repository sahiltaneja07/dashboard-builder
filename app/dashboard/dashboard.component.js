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
        vm.charts = [{
            title: 'Geographic diversity of students',
            data: [{
                key: 'Asian',
                value: '30%',
                male: '45%',
                female: '55%'
            },{
                key: 'Europeans',
                value: '10%',
                male: '45%',
                female: '55%'
            },{
                key: 'Africans',
                value: '10%',
                male: '45%',
                female: '55%'
            },{
                key: 'Latin Americans',
                value: '10%',
                male: '45%',
                female: '55%'
            },{
                key: 'Americans',
                value: '40%',
                male: '45%',
                female: '55%'
            }]
        },{
            title: 'Bachelors degree',
            data: []
        },{
            title: 'Hobbies',
            data: []
        },{
            title: 'Major of study',
            data: []
        },{
            title: 'Future interests',
            data: []
        }];

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
