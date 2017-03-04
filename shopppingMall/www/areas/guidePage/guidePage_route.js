

angular.module('guidePage_route',['guidePage_controller','guidePage_services'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'areas/guidePage/guidePage.html',
        controller: 'guidePageController'
      })
  })
