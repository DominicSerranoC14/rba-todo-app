"use strict";


app.factory('AuthFactory', function($location, ItemStorage) {

  let currentUserId = null;
  let provider = new firebase.auth.GoogleAuthProvider();
  // console.log("Test provider", provider);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Test user.uid", user.uid);
      currentUserId = user.uid;
      ItemStorage.getItemList(currentUserId);  
    } else {
      console.log("Not Logged in");
      $location.url('/user/signin/');
      //change view to login / register partial
    }
  });

  let authWithProvider = function() {
    return firebase.auth().signInWithPopup(provider);
  };

  let isAuthenticated = function() {
    return (currentUserId) ? true : false;
  };

  let getUser = function() {
    return currentUserId;
  };

  return { authWithProvider, isAuthenticated, getUser };

});//End AuthFactory function
