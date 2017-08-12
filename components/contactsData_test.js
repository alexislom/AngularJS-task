'use strict';

describe('contactsApp.contactsData module', function () {
  // Load your module.
  beforeEach(module('contactsApp.contactsData'));

  // Setup the mock service in an anonymous module.
  var localStorageService;
  beforeEach(module(function ($provide) {

    localStorageService = jasmine.createSpyObj("localStorageService", ["get"]);

    localStorageService.get.and.returnValue([
      {
        id: 0,
        firstName: 'Adolfo',
        lastName: 'Luzardo Cabrera',
        dateOfBirth: '',
        phoneNumber: '',
        fav: false
      },
      {
        id: 1,
        firstName: 'Dunia',
        lastName: 'Ojeda García',
        dateOfBirth: '',
        phoneNumber: '',
        fav: false
      }
    ]);

    $provide.value("localStorageService", localStorageService);
  }));

  it('can get an instance of my service', inject(function(ContactsDataService) {
    expect(ContactsDataService).toBeDefined();
  }));
});