'use strict';

app.controller("NavCtrl", function($scope) {

  //In angular routing, you have to put a hashtag in the routing url
  $scope.navItems = [
    { name: "Logout", url: '#/logout' },
    { name: "All Items", url: '#/items/list' },
    { name: "New Items", url: '#/items/new' },
  ];

});
