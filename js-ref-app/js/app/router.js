define(function (require) {

    "use strict";

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

	var $body = $('body');
	var FrameView = require('app/views/Frame');
	var frameView = new FrameView({el: $body}).render();
	var $content = $("#content", frameView.el);
	
	var HomeView = require('app/views/Home');
//        ContactUsView    = require('app/views/ContactUs'),
//        homeView = new HomeView({el: $content}),
//        contactUsView = new ContactUsView({el: $content}),
//        companyView = null,
//        companiesView = null,
//        contactView = null,
//        contactsView = null;

//    $body.click(function () {
//        $('.dropdown').removeClass("open");
//    });

    return Backbone.Router.extend({
        routes: {
            "": "home",
            "company/:id": "companyDetails",
            "companies" : "companiesDetails",
            "contact/:id" : "contactDetails",
            "contacts" : "contactsDetails",
            "contact-us": "contactUs"
        },

        home: function () {
//        	alert('here');
        	var view = new HomeView({el: $content});
            view.delegateEvents();
            view.render();
//            frameView.selectMenuItem('home-menu');
        },

        companyDetails: function (id) {
            require(["app/views/Company", "app/models/Company"], function (CompanyView, models) {
                var company = new models.Company({id: id});
                company.fetch({
                    success: function (data) {
                        if(companyView == null) {
                            companyView = new CompanyView({model: null, el: $content});
                        }
                        companyView.setModel(data);
                        companyView.render();
                    }
                });
                frameView.selectMenuItem();
            });
        },

        companiesDetails: function() {
            require(["app/views/Companies", "app/models/Company"], function (CompaniesView, models) {
                var companies = new models.CompanyCollection();
                companies.fetch({reset: true, data: {name: ''}, success: function (data) {
                    console.log("Companies fetched");
                    companiesView = new CompaniesView({collection: data, el: $content})
                    companiesView.render();
                },
                error: function() {
                    console.log("Something happened");
                }});

                frameView.selectMenuItem('companies-menu');
            });
        },

        contactDetails: function(id) {
            require(["app/views/Contact", "app/models/Contact"], function (ContactView, models) {
                var contact = new models.Contact({id: id});
                contact.fetch({
                    success: function(data) {
                        if(contactView == null) {
                            contactView = new ContactView({model: null, el: $content});
                        }
                        contactView.setModel(data);
                        contactView.render();
                    }
                });
                frameView.selectMenuItem();
            });
        },

        contactsDetails: function() { require(["app/views/Contacts", "app/models/Contact"], function (ContactsView, models) {
            var contacts = new models.ContactCollection();
            contacts.fetch({reset: true, data: {name: ''}, success: function (data) {
                console.log("Contacts fetched");
                contactsView = new ContactsView({collection: data, el: $content})
                contactsView.render();
            }});

            frameView.selectMenuItem('contacts-menu');
        });
        },

        contactUs: function() {
            contactUsView.delegateEvents();
            contactUsView.render();
            frameView.selectMenuItem('contact-us-menu');
        }
    });

});