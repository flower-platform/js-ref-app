// template backboneClass
define(function (require) {
    
    "use strict";
    
    var $ = require('jquery');
    var _ = require('underscore');
    var CompaniesTableItemView = require('app/views/CompaniesTableItemView');
    var CompaniesTableTemplate = require('text!tpl/CompaniesTableTemplate.html');
    var TableView = require('app/views/abstract/TableView');// children-insert-point requireEntry
    
    return TableView.extend({
    
    	tpl : CompaniesTableTemplate, 
    	tableItemViewClass : CompaniesTableItemView// children-insert-point backboneClassMember
    
    })

});