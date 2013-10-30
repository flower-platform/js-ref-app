// template backboneClass
define(function (require) {
    
    "use strict";
    
    var $ = require('jquery');
    var _ = require('underscore');
    var CompanySampleObject = require('app/models/local/CompanySampleObject');
    var AbstractModelCollection = require('app/models/local/abstract/AbstractModelCollection');// children-insert-point requireEntry
    
    return AbstractModelCollection.extend({
    
    	sampleObjectGenerator : CompanySampleObject// children-insert-point backboneClassMember
    
    })

});