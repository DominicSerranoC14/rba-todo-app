"use strict";


//Simple controller that logs $scope
app.controller('LogInCtrl', function($scope, $location, AuthFactory, ItemStorage) {

  console.log("Test $scope", $scope);
  console.log("Test $location", $location);
  console.log("Test AuthFactory", AuthFactory);


  //Register function
  $scope.registerUser = function() {

    AuthFactory.authWithProvider()
      .then(function(result) {
        let user = result.user.uid;
        console.log("logged in user fer sure", user);
        //Passes currentUserId into get item list and only returns items that have the currentUserId's uid
        //load users item list
        console.log("Test user", user);
        ItemStorage.getItemList(user);
        $location.path("/items/list");
        $scope.$apply();
      }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      });
    };//End registerUser function



    //Login function

    //Logout function


});
