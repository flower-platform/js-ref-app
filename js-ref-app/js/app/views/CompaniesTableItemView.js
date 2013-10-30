// template backboneClass
define(function (require) {
    
    "use strict";
    
    var $ = require('jquery');
    var _ = require('underscore');
    var CompaniesTableItemTemplate = require('text!tpl/CompaniesTableItemTemplate.html');
    var TableItemView = require('app/views/abstract/TableItemView');// children-insert-point requireEntry
    
    return TableItemView.extend({
    
    	tpl : CompaniesTableItemTemplate// children-insert-point backboneClassMember
    
    })

});