"use strict";


//Simple controller that logs $scope
app.controller('LogInCtrl', function($rootScope, $scope, $location, AuthFactory) {

$rootScope.user = AuthFactory.getUser();
$scope.$watch($rootScope.user);


  //Register function
  $scope.registerUser = function() {

    AuthFactory.authWithProvider()
      .then(function(result) {
        $rootScope.user = result.user.uid;
        $location.url("/items/list");
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


    //Logout function
    $scope.logoutUser = function() {

      firebase.auth().signOut();
      $location.url('/user/signin');
      $rootScope.user = null;
      console.log("User singed out");

    };


    //Login function

    if ( $location.path() === '/user/signout') {
      $scope.logoutUser();
    }



});
