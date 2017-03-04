// 商品列表页面功能
angular.module('goodsList_controller', ['goodsList_service'])
  .controller('goodsListController',function($scope,$window,goodsListFactory,$stateParams,$ionicLoading) {
    //console.log($stateParams);
    /*goodsListFactory.deleteById();
    goodsListFactory.getData();*/
    goodsListFactory.getAllData();
    // 列表数据
    $scope.obj_goodsListData = [];
    // 默认让它有更多数据可以加载
    $scope.pms_isMoreItemsAvailable = true;
    // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };


    // 事件监听
    $scope.$on('$ionicView.beforeEnter', function (e) {
      $scope.func_refreshGoodsList();
    });

    // 获取最新数据方法
    $scope.func_refreshGoodsList = function() {
      $scope.pms_isMoreItemsAvailable = true;
      // 每次刷新都将页码值变为1 为了增强代码的健壮性
      $scope.obj_pagingInfo.pageNum = 1;
      $scope.obj_pagingInfo.typeNumber = $stateParams.typeNumber;
      var message = JSON.stringify($scope.obj_pagingInfo);
      // 通过方法获取promise对象
      var promise = goodsListFactory.refreshGoodsList(message);
      // 通过then方法触发状态监听
      promise.then(
        function(data){
          if(data == null){
            $scope.pms_isMoreItemsAvailable=false;
          }else {
            $scope.obj_goodsListData=data;
          }
        },
        function(reason){
        }
      ).finally(function(){
        // 停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
      });
    }

    // 加载更多数据方法
    $scope.func_loadMoreGoodsList = function(){
      /*为了用户友好性，加一个遮罩层*/
      $ionicLoading.show({
        template: "正在载入数据，请稍后..."
      });


      $scope.obj_pagingInfo.pageNum = $scope.obj_pagingInfo.pageNum+1;
      $scope.obj_pagingInfo.typeNumber = $stateParams.typeNumber;
      var message = JSON.stringify($scope.obj_pagingInfo);
      console.log(message);
      // 通过方法获取promise对象
      var promise=goodsListFactory.refreshGoodsList();
      // 通过then方法触发状态监听
      promise.then(
        function(data){
          if($scope.obj_pagingInfo.pageNum == 4){
            $scope.pms_isMoreItemsAvailable = false;
          }
          if(data == null){
            $scope.pms_isMoreItemsAvailable=false;
          }else {
            $.each(data,function(i,item){
              $scope.obj_goodsListData.push(item);
            })
          }
        },
        function(reason){
        }
      ).finally(function(){
        //停止广播ion-infinite
        $scope.$broadcast('scroll.infiniteScrollComplete');
        // 关闭遮罩层
        setTimeout(function(){
          $ionicLoading.hide();
        },1000)

      });
    }











    //console.log("1");
    //// 通过方法获取promise对象
    //var promise=GoodsListFty.testPromise();
    //// 通过then方法触发状态监听
    //promise.then(
    //  function(data){
    //    console.log("2");
    //    return data;
    //  },
    //  function(reason){
    //
    //  }
    //).then(function(data){
    //  console.log("7");
    //  console.log(data);
    //}).finally(
    //  function(){
    //    console.log("3");
    //  });
    //
    //console.log("4");
  })




