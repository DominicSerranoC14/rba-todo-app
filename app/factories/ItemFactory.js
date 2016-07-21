'use strict';

app.factory('ItemStorage', function(FirebaseUrl, $q, $http) {


  let getItemList = function() {
    let items = [];
    return $q(function( resolve, reject ) {

        $http.get(`${FirebaseUrl}/items.json`)
        .success(function(itemObj) {
          let itemCollection = itemObj;
          //Loops through each object key in the objColl. that is returned from http request and assigns it an 'itemKey' that is was defined in FB
          Object.keys(itemCollection).forEach(function(key) {
            itemCollection[key].id = key;
            items.push(itemCollection[key]);
          });
          resolve(items);
        })
        .error(function(error){
          reject(error);
        });
    });


  };


  //Function posts a new object to FB
  let postNewItem = function(newItem) {

    return $q(function( resolve, reject) {

      $http.post(`${FirebaseUrl}/items.json`,
        JSON.stringify(newItem))
      .success(function() {
        resolve();
      })
      .error(function(error) {
        reject(error);
      });
    });

  };


  //Function that deletes item from DB
  let deleteItem = function(itemKey) {

    return $q(function( resolve, reject ) {

      $http.delete(`${FirebaseUrl}/items/${itemKey}.json`)
      .success(function(response) {
        resolve(response);
      })
      .error(function(error) {
        reject(error);
      });

    });

  };


  //Need to export the object
  return { getItemList, postNewItem, deleteItem };

});
