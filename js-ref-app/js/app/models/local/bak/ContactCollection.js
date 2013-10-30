define(function(require) {

	"use strict";

	var AbstractModelCollection = require('app/models/local/abstract/AbstractModelCollection');
	var ContactSample = require('app/models/local/ContactSample');

	return AbstractModelCollection.extend({
		sampleObjectGenerator: ContactSample
	});

});