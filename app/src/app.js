/*
 * app.js
 *
 * Contains the angular route logic for the app.
 */ 
angular.module('projectApp', ['ngRoute'])

    .config(function($routeProvider)) {
        $routeProvider
        .when('/', {
            templateUrl: 'list.html',
            controller: 'ListController',
            resolve: {
                contacts: function(Contacts) {
                    return Contacts.getContacts();
                }
            }
        })
    }
    .when('new/contact', {
        controller: 'NewContactController',
        templateUrl: 'contact-form.html'
    })
    .when('contact/:contactId', {
        controller: 'EditContactController',
        templateUrl: 'contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });
