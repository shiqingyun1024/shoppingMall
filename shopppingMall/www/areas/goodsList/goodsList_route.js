// 商品列表页面路由模块
angular.module('goodsList_route', ['goodsList_controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('goodsList', {
        url: '/goodsList/:typeNumber',
        templateUrl: 'areas/goodsList/goodsList.html',
        controller: 'goodsListController'
      })
  });
