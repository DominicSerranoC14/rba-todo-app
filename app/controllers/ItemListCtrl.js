'use strict';

//Pass a factory into a controller as a dependency ex. '$scope' is a dependency
app.controller('ItemListCtrl', function($rootScope, $scope, ItemStorage) {


  ItemStorage.getItemList($rootScope.user)
  .then(function(itemCollection) {
    //Sets the returned
    $scope.items = itemCollection;
    console.log("Test $scope.items", $scope.items);
  });


  //Function that deletes the item on the 'X' button clicked
  $scope.deleteItem = function(itemId) {

    ItemStorage.deleteItem(itemId)
    .then(function() {
      ItemStorage.getItemList($rootScope.user)
      .then(function(itemCollection) {
        //Sets the returned
        $scope.items = itemCollection;
      });
    });
  };

});
