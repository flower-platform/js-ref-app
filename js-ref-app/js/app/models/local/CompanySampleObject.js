// template backboneClass
define(function (require) {
    
    "use strict";
    
    var $ = require('jquery');
    var Class = require('app/models/local/abstract/Class');
    var _ = require('underscore');// children-insert-point requireEntry
    
    return Class.extend({
    
    	id : "", 
    	name : "Company name", 
    	industry : "Industry"// children-insert-point backboneClassMember
    
    })

});