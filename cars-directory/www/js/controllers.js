angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Cars) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  Cars.all().then(function(state){
    $scope.cars = state.data.makes;
  });


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Cars) {
  $scope.carMakeName = $stateParams.carMake.substr(0, 1).toUpperCase() + $stateParams.carMake.substr(1);
  Cars.getMake($stateParams.carMake).then(function(state){
    $scope.carMake = state.data.models;
  });
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleCar = function(group) {
    if ($scope.isCarShown(group)) {
      $scope.shownCar = null;
    } else {
      $scope.shownCar = group;
    }
  };
  $scope.isCarShown = function(group) {
    return $scope.shownCar === group;
  };
  
})

.controller('CarDetailsCtrl', function($scope, $stateParams, Cars) {
  $scope.carModelName = $stateParams.carModel.substr(0, 1).toUpperCase() + $stateParams.carModel.substr(1);
  $scope.carYearNumber = $stateParams.carYear;
  Cars.getModel($stateParams.carMake, $stateParams.carModel, $stateParams.carYear).then(function(state){
    $scope.carDetails = state.data.styles;
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
