// template backboneClass
define(function(require) {

	"use strict";

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	// children-insert-point requireEntry
	
	return Backbone.View.extend({

		render : function() {
			if (!this.template) {
				this.template = _.template(this.tpl);
			}
			if (this.model) {
				this.$el.html(this.template(this.model.attributes));
			} else {
				this.$el.html(this.template());
			}
			return this;
		}
		// children-insert-point backboneClassMember

	});

});