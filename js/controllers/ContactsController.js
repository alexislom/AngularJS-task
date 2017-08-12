contactsApp.controller('ContactsController', 
    function ContactsController($scope, dataService){
      
        var promiseObj=dataService.getData();
        promiseObj.then(function(value) { $scope.question=value; });
          
    }
)