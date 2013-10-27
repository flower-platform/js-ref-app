define(function (require) {

    "use strict";

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    
    return Backbone.Model.extend({
    	
//    	modelCollection: null,
    	
    	findById: function (id) {
    		var data = this.attributes.modelCollection.getData();
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    return data[i];
                }
            }
            return null;
        },
    
	    sync: function (method, model, options) {
	        if (method === "read") {
	        	options.success(this.findById(parseInt(this.id)));
	        }
	    }

    });
});