/**
 * Created with JetBrains WebStorm.
 * User: Tache Razvan Mihai
 * Date: 9/20/13
 * Time: 4:38 PM
 * To change this template use File | Settings | File Templates.
 */
define(function (require) {
   "use strict";
    var $               = require('jquery'),
        Backbone        = require('backbone'),

        contacts = [
            {"id": 1, "name": "James King", companyId: 1, "title": "President and CEO", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "pic": "james king.jpg", "twitterId": "@fakejking"},
            {"id": 2, "name": "Julie Taylor", companyId: 2, "title": "VP of Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "pic": "julie taylor.jpg", "twitterId": "@fakejtaylor"},
            {"id": 3, "name": "Eugene Lee", companyId: 2,"title": "CFO", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "pic": "eugene_lee.jpg", "twitterId": "@fakeelee"},
            {"id": 4, "name": "John Williams", companyId: 4, "title": "VP of Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "pic": "john williams.jpg", "twitterId": "@fakejwilliams"},
            {"id": 5, "name": "Ray Moore", companyId: 3, "title": "VP of Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "pic": "ray moore.jpg", "twitterId": "@fakermoore"},
            {"id": 6, "name": "Paul Jones", companyId: 5, "title": "QA Manager", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "pic": "paul jones.jpg", "twitterId": "@fakepjones"},
            {"id": 7, "name": "Paula Gates", companyId: 1, "title": "Software Architect", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "pic": "paula gates.jpg", "twitterId": "@fakepgates"},
            {"id": 8, "name": "Lisa Wong", companyId: 2, "title": "Marketing Manager", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "pic": "lisa wong.jpg", "twitterId": "@fakelwong"},
            {"id": 9, "name": "Gary Donovan", companyId: 4, "title": "Marketing Manager", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "pic": "gary donovan.jpg", "twitterId": "@fakegdonovan"},
            {"id": 10, "name": "Kathleen Byrne", companyId: 5, "title": "Sales Representative", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "pic": "kathleen byrne.jpg", "twitterId": "@fakekbyrne"},
            {"id": 11, "name": "Amy Jones", companyId: 7, "title": "Sales Representative", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "pic": "amy jones.jpg", "twitterId": "@fakeajones"},
            {"id": 12, "name": "Steven Wells", companyId: 9, "title": "Software Architect", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "pic": "steven wells.jpg", "twitterId": "@fakeswells"}
        ],

        findById = function (id) {
            var deferred = $.Deferred(),
                contact = null,
                l = contacts.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if(contacts[i].id === id) {
                    contact = contacts[i];
                    break;
                }
            }
            deferred.resolve(contact);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred(),
                results = contacts.filter(function (element) {
                    return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByCompany = function (companyId) {
            var deferred = $.Deferred(),
                results = contacts.filter(function (element) {
                    return companyId === element.companyId;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        Contact = Backbone.Model.extend({

            initialize: function () {

            },

            getCompanyById: function(id, callback) {
                require(["app/models/Company"], function (models) {
                    var company = new models.Company({id: id});
                    company.fetch({
                        success: function (data) {
                            if(typeof callback == "function")
                                 callback(data);
                        }
                    });
                });
            },

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        ContactCollection = Backbone.Collection.extend({

            model: Contact,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByName(options.data.name).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        ContactsCollection = Backbone.Collection.extend({

            model: Contact,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByCompany(this.parent.id).done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

        return {
            Contact: Contact,
            ContactCollection: ContactCollection,
            ContactsCollection: ContactsCollection // a contact list sent to Companies (eg. for company 1 -> it's contacts)
        };
});