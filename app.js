(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('contactsApp', [
        'ngRoute',
        'LocalStorageModule',
        'contactsApp.components.contactsData',
        'contactsApp.contacts',
        'contactsApp.manageContact',
        'contactsApp.favContacts'
    ]).config(['$routeProvider', 'localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
            $routeProvider.otherwise({redirectTo: '/contacts'});
        }]);
})();