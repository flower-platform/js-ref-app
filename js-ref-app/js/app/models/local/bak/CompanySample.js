define(function (require) {

    "use strict";
    var Class = require('app/models/local/abstract/Class');

	return Class.extend({
	    id : "",
	    name : "Company",
	    logo : "Logo",
	    website : "Website",
	    address : "Address",
	    industry : "Industry",
	    revenue : "",
	    employees : "",
	    thumbnail: ""
	});

});