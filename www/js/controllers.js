angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CarsCtrl', function($scope, Cars) {
  $scope.cars = Cars.all();
  $scope.remove = function(car) {
    Cars.remove(car);
  };
})

.controller('CarDetailCtrl', function($scope, $stateParams, Cars) {
  $scope.car = Cars.get($stateParams.carId);
})

.controller('ChatsCtrl', function($scope, Chats) {
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
