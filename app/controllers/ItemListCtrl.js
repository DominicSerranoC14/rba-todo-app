'use strict';

//Pass a factory into a controller as a dependency ex. '$scope' is a dependency
app.controller('ItemListCtrl', function($scope, ItemStorage) {

  ItemStorage.getItemList()
  .then(function(itemCollection) {
    console.log('from pop', itemCollection);
    //Sets the returned
    $scope.items = itemCollection;
  });



  //Function that deletes the item on the 'X' button clicked
  $scope.deleteItem = function(itemId) {

    ItemStorage.deleteItem(itemId)
    .then(function() {
      ItemStorage.getItemList()
      .then(function(items) {
        $scope.items = items;
      });
    });
  };

});
