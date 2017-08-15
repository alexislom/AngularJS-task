(function() {
    'use strict';

    angular.module('contactsApp.favContacts', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/favContacts', {
                templateUrl: 'favContacts/favContacts.html',
                controller: 'FavContactsCtrl'
            });
        }])

        .controller('FavContactsCtrl', [
            '$scope', 'ContactsDataService',
            function ($scope, contactsDataService) {

                $scope.contacts = contactsDataService.getContacts();

                // $scope.favoriteFilter = function(item){
                //     if(item.fav) return true;
                //     return false;
                // }
            }]);
})();