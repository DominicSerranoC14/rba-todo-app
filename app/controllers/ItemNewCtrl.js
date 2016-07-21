'use strict';

app.controller('ItemNewCtrl', function($scope, ItemStorage, $location) {

  $scope.newTask = {
    assignedTo: '',
    dependencies: '',
    dueDate: '',
    task: '',
    location: '',
    urgency: '',
    isCompleted: false
  };


 //Function that pushes a new task to an array
 $scope.addNewItem = function() {

  //  console.log('added new item', $scope.newTask);
  ItemStorage.postNewItem($scope.newTask)
  .then(function() {
    //Sets the returned
    $location.url("/items/list");
    });
  };

});
