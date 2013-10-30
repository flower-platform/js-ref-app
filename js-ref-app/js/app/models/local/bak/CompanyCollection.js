define(function(require) {

	"use strict";

	var AbstractModelCollection = require('app/models/local/abstract/AbstractModelCollection');
	var CompanySample = require('app/models/local/CompanySample');

	return AbstractModelCollection.extend({
		sampleObjectGenerator: CompanySample
	});

});