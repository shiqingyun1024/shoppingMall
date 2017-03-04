angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  // 单选按钮数据
  $scope.obj_radioData = ["html5","css3","javascript"];
  $scope.obj_choice = {choice : ""};
  // 浮选按钮数据 即复选框数据
  $scope.obj_checkboxData = [
  {
    name : "中国",
    isSelect : true

  },
  {
    name : "中国",
      isSelect : false

  },
  {
    name : "中国",
      isSelect : false

  },
  ];

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
