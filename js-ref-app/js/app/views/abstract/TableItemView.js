// template backboneClass
define(function(require) {

	"use strict";

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var View = require('app/views/abstract/View');
	// children-insert-point requireEntry

	return View.extend({

		tagName : "tr",

		initialize : function() {
			this.model.on("change", this.render, this);
		}
		// children-insert-point backboneClassMember

	});

});