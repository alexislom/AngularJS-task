contactsApp.controller('FavouriteContactsController', 
    function FavouriteContactsController($scope, dataService){
      
        var promiseObj=dataService.getData();
        promiseObj.then(function(value) { $scope.question=value; });
          
    }
)