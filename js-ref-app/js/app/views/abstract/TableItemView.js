define(function(require) {

	"use strict";

	var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone'), View = require('app/views/abstract/View');

	return View.extend({

		tagName : "tr",

		initialize : function() {
			this.model.on("change", this.render, this);
		},

	});

});