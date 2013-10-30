// template backboneClass
define(function (require) {
    
    "use strict";
    
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
	var HomeView = require('app/views/Home');
	var FrameView = require('app/views/Frame');// children-insert-point requireEntry

	var $body;
	var frameView;
	var $content;
    
    return Backbone.Router.extend({
    
    	routes: {
            "": "showHome",
            "company/:id": "companyDetails",
            "companies" : "companiesDetails",
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
        
    	showHome: function () {
        	var view = new HomeView({el: $content});
            view.delegateEvents();
            view.render();
//            frameView.selectMenuItem('home-menu');
        },
        
        showCompanies: function() {
        	
        },
        
        showCompanies1: function() {
        	
        }// children-insert-point backboneClassMember
   
    });

});