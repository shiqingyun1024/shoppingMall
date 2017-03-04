
   // 路由模块

angular.module('route', [
  'ionic',
  'guidePage_route',
  'home_route',
  'tabs_route',
  'category_route',
  'goodsList_route',
  'details_route'])
  .config(function($stateProvider, $urlRouterProvider) {

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
