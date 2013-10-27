define(function (require) {

    "use strict";
    var _ = require('underscore');
    var Backbone = require('backbone');
    
    return Backbone.Collection.extend({
    	numberOfSampleObjects: 10,
    	
    	sampleObjectGenerator: null,
    	
    	sampleData: null,
		
        generateSampleData: function() {
            var result = [];
            var sampleObject = new this.sampleObjectGenerator();
            for (var i = 1; i <= this.numberOfSampleObjects; i++) {
                var obj = {};
                for (var key in sampleObject) {
                    if (key != "constructor") {
                        obj[key] = sampleObject[key] + "" + i;
                    }
                }
                result.push(obj);
            }
            return result;
        },
        
        getData: function() {
            if (!this.sampleData) {
            	this.sampleData = this.generateSampleData();
            }
            return this.sampleData;
        },
		
	    sync: function (method, model, options) {
	        if (method === "read") {
	            options.success(this.getData());
	        }
	    }

    });
});