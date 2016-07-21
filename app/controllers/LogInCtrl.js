"use strict";


//Simple controller that logs $scope
app.controller('LogInCtrl', function($scope, $location, AuthFactory) {

  console.log("Test $scope", $scope);
  console.log("Test $location", $location);
  console.log("Test AuthFactory", AuthFactory);

  AuthFactory.authWithProvider()
    .then(function(result) {
      let user = result.user.uid;
      console.log("logged in user fer sure", user);
      // Load to dos?
      $location.path("/");
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

    //Register function

    //Login function

    //Logout function


});
