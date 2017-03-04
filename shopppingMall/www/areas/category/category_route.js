// 分类页面路由模块
angular.module('category_route', ['category_controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            templateUrl: 'areas/category/category.html',
            controller: 'categoryController'
          }
        }
      })
  });
