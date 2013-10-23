/**
 * Created with JetBrains WebStorm.
 * User: Tache Razvan Mihai
 * Date: 9/19/13
 * Time: 5:16 PM
 * To change this template use File | Settings | File Templates.
 */
define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        Contacts            = require('app/models/Contact'),

        companies = [
            {"id": 1, "name": "Crispico", "logo" : "Crispico.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 2, "name": "HappyFace", "logo" : "HappyFace.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 3, "name": "WebMonsters", "logo" : "WebMonsters.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 4, "name": "Survival", "logo" : "Survival.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 5, "name": "Fitest", "logo" : "Fitest.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 6, "name": "Flower", "logo" : "Flower.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 7, "name": "Platform", "logo" : "Platform.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 8, "name": "ComeAndGo", "logo" : "ComeAndGo.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 9, "name": "Smiling", "logo" : "Smiling.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 10, "name": "ProblemSolver", "logo" : "ProblemSolver.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 11, "name": "Xops", "logo" : "Xops.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20},
            {"id": 12, "name": "RaMiGa", "logo" : "RaMiGa.png","website": "http://main.crispico.com/", "address": "Lujerului", "industry": "Software", "revenue": 1000000, "employees": 20}
        ],

        findById = function (id) {
            var deferred = $.Deferred(),
                company = null,
                l = companies.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (companies[i].id === id) {
                    company = companies[i];
                    break;
                }
            }
            deferred.resolve(company);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred(),
                results = companies.filter(function (element) {
                    var name = element.name;
                    return name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        Company = Backbone.Model.extend({

            initialize: function () {
                this.contacts = new Contacts.ContactsCollection();
                this.contacts.parent = this;
            },

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        CompanyCollection = Backbone.Collection.extend({

            model: Company,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByName(options.data.name).done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

    return {
        Company: Company,
        CompanyCollection: CompanyCollection
    };

});