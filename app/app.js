"use strict";

//Create a module for the app
const app = angular.module("TodoApp", [ 'ngRoute' ]);


//Binds partial's to controller
app.config(function($routeProvider) {

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
  when( '/items/details', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  }).
  //Failsafe, if no url or some bug, it reroutes to home page
  otherwise('/items/list');

});//End of app.config
