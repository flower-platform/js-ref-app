// template backboneClass
define(function (require) {
    
    "use strict";
    
    var $ = require('jquery');
    var _ = require('underscore');
    var CompaniesTableItem = require('app/views/CompaniesTableItem');
    var CompaniesTableTemplate = require('text!tpl/CompaniesTableTemplate.html');
    var TableView = require('app/views/abstract/TableView');// children-insert-point requireEntry
    
    return TableView.extend({
    
    	tpl : CompaniesTableTemplate, 
    	tableItemViewClass : CompaniesTableItem// children-insert-point backboneClassMember
    
    })

});