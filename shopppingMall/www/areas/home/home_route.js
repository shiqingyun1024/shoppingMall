/**
 * 创建者 *********** 时小琳
 * 创建时间 ********** 2016.11.27
 * 文件功能 ********** app首页home路由
 */
     /* app 首页面 home路由*/

angular.module('home_route',['home_controller','home_services'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'homeController'
          }
        }
      })
  }])
