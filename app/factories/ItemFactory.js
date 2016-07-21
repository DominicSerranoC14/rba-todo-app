'use strict';

app.factory('ItemStorage', function() {

  let items = [
    {
     id: 0,
     task: "mow the lawn",
     isCompleted: true,
     dueDate: "12/5/17",
     assignedTo: "Greg",
     location: "Greg's mom's house",
     urgency: "low",
     dependencies: "sunshine, clippers, hat, water, headphones"
    },
    {
     id: 1,
     task: "grade quizzes",
     isCompleted: false,
     dueDate: "12/5/15",
     assignedTo: "Joe",
     location: "NSS",
     urgency: "high",
     dependencies: "wifi, tissues, vodka"
    },
    {
     id: 2,
     task: "take a nap",
     isCompleted: false,
     dueDate: "5/21/16",
     assignedTo: "Joe",
     location: "Joe's house",
     urgency: "medium",
     dependencies: "hammock, cat, pillow, blanket"
    }

  ];//End $scope.items

  let getItemList = function() {
    return items;
  };

  let postNewItem = function(newItem) {
    items.push(newItem);
  };

  //Need to export the object
  return { getItemList, postNewItem };

});
