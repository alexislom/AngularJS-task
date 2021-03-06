(function(){

    'use strict';

    angular.module('contactsApp.manageContact', ['ngRoute', '720kb.datepicker'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/add-contact', {
                templateUrl: 'manageContact/manageContact.html',
                controller: 'ManageContactCtrl'
            });
            $routeProvider.when('/edit-contact/:contactId', {
                templateUrl: 'manageContact/manageContact.html',
                controller: 'ManageContactCtrl'
            });
        }])

        .controller('ManageContactCtrl', [
            '$scope',  '$routeParams','$location', 'ContactsDataService', 'localStorageService', 
            function ($scope, $routeParams, $location, contactsDataService, localStorageService) {

                var contactId = $routeParams.contactId ? parseInt($routeParams.contactId, 10) : false;

                if(contactId === parseInt(contactId, 10)){
                    $scope.editStatus = true;
                    $scope.contact = contactsDataService.getContact(contactId, true);

                    $scope.editContact = function () {
                        contactsDataService.editContact($scope.contact);
                        $scope.contact = contactsDataService.resetContact();
                        $location.path('/contacts');
                    };
                    $scope.deleteContact = function () {
                        contactsDataService.deleteContact($scope.contact);
                        $scope.contact = contactsDataService.resetContact();
                        $location.path('/contacts');
                    };
                }else{
                    $scope.insertContact = function () {
                        contactsDataService.addContact($scope.contact);
                        $scope.contact = contactsDataService.resetContact();
                        $location.path('/contacts');
                    };

                    $scope.clearStore = function () {
                        localStorageService.clearAll();
                    }

                    $scope.checkDate = function () {
                        var inputValue = $scope.contact.dateOfBirth
                        console.log(inputValue)
                    }
                }
            }]);
})();