'use strict';

app.controller('ItemNewCtrl', function($scope, ItemStorage) {

  $scope.newTask = {};


 //Function that pushes a new task to an array
 $scope.addNewItem = function() {

   $scope.newTask.isCompleted = false;
   $scope.newTask.id = ItemStorage.getItemList.length;
   console.log('added new item', $scope.newTask);
   ItemStorage.postNewItem($scope.newTask);
   $scope.newTask = {};
 };


});
