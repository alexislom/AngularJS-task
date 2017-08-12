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
            '$scope', '$location', 'ContactsDataService',
            function ($scope, $location, contactsDataService) {

                $scope.contacts = contactsDataService.getContacts();

                $scope.editContact = function (id) {
                    $location.path('/edit-contact/' + id);
                };

                $scope.showDetails = function (id) {
                    var el = angular.element(document.getElementById('#ct-details-' + id));
                    el.toggleClass('details-hidden');
                }
            }]);
})();