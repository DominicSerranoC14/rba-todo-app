'use strict';

//Pass a factory into a controller as a dependency ex. '$scope' is a dependency
app.controller('ItemListCtrl', function($scope, ItemStorage) {

  $scope.items = ItemStorage.getItemList();

});
