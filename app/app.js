"use strict";

//Create a module for the app
const app = angular.module("TodoApp", [ 'ngRoute' ])
.constant('FirebaseUrl', "https://mjd-fb-todo.firebaseio.com/");


//Binds partial's to controller
app.config(function($routeProvider, FBCreds) {

  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };
  firebase.initializeApp(authConfig);


  //FB auth change listener goes here?


  $routeProvider.
  //'/items/list' is the url that the button links to
  when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller: 'ItemNewCtrl'
  }).
  when( '/user/signin/', {
    templateUrl: 'partials/user-signin.html',
    controller: 'LogInCtrl'
  }).
  when( '/items/details/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  }).
  //Failsafe, if no url or some bug, it reroutes to home page
  otherwise('/items/list');

});//End of app.config
