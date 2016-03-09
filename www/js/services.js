angular.module('starter.services', [])

.factory('Coupons', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var coupons = [{
    id: 0,
    name: 'Kroger',
    dueDate: new Date(),
    discountProduct: 'almonds',
    discountAmount:"$2",
  }, {
    id: 1,
    name: "Macy's",
    dueDate: new Date(),
    discountProduct: 'jeans',
    discountAmount:"50%",
  }, {
    id: 2,
    name: 'Express',
    dueDate: new Date(),
    discountProduct: 'shorts',
    discountAmount:"$2",
  }, {
    id: 3,
    name: 'Whole Foods',
    dueDate: new Date(),
    discountProduct: 'cookies',
    discountAmount:"$2",
  }, {
    id: 4,
    name: 'Guitar Center',
    dueDate: new Date(),
    discountProduct: 'guitar picks',
    discountAmount:"$10",
  }];

  return {
    all: function() {
      return coupons;
    },
    remove: function(coupon) {
      coupons.splice(coupons.indexOf(coupon), 1);
    },
    get: function(couponId) {
      for (var i = 0; i < coupons.length; i++) {
        if (coupons[i].id === parseInt(couponId)) {
          return coupons[i];
        }
      }
      return null;
    }
  };
});
