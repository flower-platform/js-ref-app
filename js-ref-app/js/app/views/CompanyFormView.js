// template backboneClass
define(function (require) {
    
    "use strict";
    
    var CompanyFormTemplate = require('text!tpl/CompanyFormTemplate.html');
    var $ = require('jquery');
    var FormView = require('app/views/abstract/FormView');
    var _ = require('underscore');// children-insert-point requireEntry
    
    return FormView.extend({
    
    	htmlIdSuffix : 'company', 
    	tpl : CompanyFormTemplate// children-insert-point backboneClassMember
    
    })

});