angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CouponsCtrl', function($scope, Coupons) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.coupons = Coupons.all();
  $scope.remove = function(coupon) {
    Coupons.remove(coupon);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
