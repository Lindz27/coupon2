angular.module('starter.controllers', ['ui.rCalendar'])
// angular.module('MyApp', ['ui.rCalendar'])

.controller('DashCtrl', function($scope) {})

.controller('CouponsCtrl', function($scope, Coupons) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);
//Using window.localStorage directly is just fine, but having to set and parse Strings gets tiresome after a while. Use this simple AngularJS service for setting and retrieving strings or objects easily:

angular.module('app', ['ionic', 'ionic.utils'])

.run(function($localstorage) {

  $localstorage.set('name', 'Max');
  console.log($localstorage.get('name'));
  $localstorage.setObject('post', {
    name: 'Thoughts',
    text: 'Today was a good day'
  });

  var post = $localstorage.getObject('post');
  console.log(post);
});
//And to use this service, just inject the $localstorage service into a controller or run function:

angular.module('app', ['ionic', 'ionic.utils'])

.run(function($localstorage) {

  $localstorage.set('name', 'Max');
  console.log($localstorage.get('name'));
  $localstorage.setObject('post', {
    name: 'Thoughts',
    text: 'Today was a good day'
  });

  var post = $localstorage.getObject('post');
  console.log(post);
});


  $scope.coupons = Coupons.all();
  $scope.remove = function(coupon) {
    Coupons.remove(coupon);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('FormCtrl', function($scope) {

});
