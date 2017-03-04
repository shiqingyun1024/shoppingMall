// 商品列表功能
angular.module('details_controller', ['details_service'])
  .controller('detailsController', function ($scope, $stateParams,$state,$ionicHistory) {


    // 通过后台获取到的商品详细信息
    $scope.obj_goodsInfo = {
      goodsId: "200067",
      description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise: "66",
      picture: [],
      src: "",
      isFork: false,
      colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
      sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
    };

    // 用户选择信息，进行维护
    $scope.obj_goodsDetailInfo = {
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork: $scope.obj_goodsInfo.isFork,
      description: $scope.obj_goodsInfo.description,
      src: $scope.obj_goodsInfo.src,
      prise: $scope.obj_goodsInfo.prise,
      color: "",
      size: "",
      number: 1
    }

    // 数量加1
    $scope.add = function () {
      $scope.obj_goodsDetailInfo.number++;
    }

    // 数量减1
    $scope.subtract = function () {
      if ($scope.obj_goodsDetailInfo.number != 1) {
        $scope.obj_goodsDetailInfo.number--;
      }
    }

    // 返回首页面
    $scope.func_goHome=function(){
      $state.go("tab.home");
    }

    // 返回前一个页面
    $scope.goBack=function(){
      $ionicHistory.goBack();
    }


  })




