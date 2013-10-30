define(function (require) {

    "use strict";
    var Class = require('app/models/local/abstract/Class');

	return Class.extend({
	    id : "",
	    name : "name",
	    companyId : "",
	    title : "title",
	    cellPhone : "cellPhone",
	    officePhone : "officePhone",
	    email : "email",
	    pic : "pic",
	    twitterId: "@twitterId",
	    thumbnail: "thumbnail"
	});

});