/**
 * 创建者 *********** 时小琳
 * 创建时间 **********
 * 文件功能 ********** tab功能路由
 */
       /* tab功能路由*/

  // 路由模块

angular.module('tabs_route',['tabs_controller'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'areas/tab/tabs.html',
        controller: 'tabsController'
      })

  }])

