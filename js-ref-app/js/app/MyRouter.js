// template backboneClass
define(function (require) {
    
//    "use strict";
    
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
	var HomeView = require('app/views/Home');
	var FrameView = require('app/views/Frame');
	var GenericModel = require('app/models/local/abstract/GenericModel');
	var CompaniesCollection = require('app/models/local/CompaniesCollection');
	var CompaniesTableView = require('app/views/CompaniesTableView');
	var CompanyFormView = require('app/views/CompanyFormView');// children-insert-point requireEntry

	var $body;
	var frameView;
	var $content;
    
    return Backbone.Router.extend({
    
    	routes: {
            "": "showHome",
            "companies" : "showCompanies",
            "company/:id": "showCompany",
            "contact/:id" : "contactDetails",
            "contacts" : "contactsDetails",
            "contact-us": "contactUs",
            "companyTable" : "companyTable",
            "contactTable" : "showContactTable"
        },

    	initialize: function() {
    		$body = $('body');
    		frameView = new FrameView({el: $body}).render();
    		$content = $("#content", frameView.el);

    		companiesTableView = new CompaniesTableView({el: $content});
    		companiesCollection = new CompaniesCollection();
    		companyFormView = new CompanyFormView({el: $content});
    		
    	},
        
        showTableView: function (view, collection) {
        	collection.fetch({reset: true, data: {name: ''}, 
            	success: function (data) {
	                console.log("Data fetched");
	                view.setCollection(collection);
	                view.render();
	            },
	            error: function() {
	                console.log("Something happened");
	            }});
        },
        
        showFormView: function (view, collection, id) {
            var model = new GenericModel({id: id, modelCollection: collection});
            model.fetch({
                success: function (data) {
                	view.setModel(data);
                	view.render();
                }
            });
        },
        
    	showHome: function () {
        	var view = new HomeView({el: $content});
            view.delegateEvents();
            view.render();
//            frameView.selectMenuItem('home-menu');
        },
        
        showCompanies: function() {
        	this.showTableView(companiesTableView, companiesCollection);
        },
        
        showCompany: function(id) {
        	this.showFormView(companyFormView, companiesCollection, id);
        }
        
   
    });

});