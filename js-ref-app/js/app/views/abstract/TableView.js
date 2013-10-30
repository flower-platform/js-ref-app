// template backboneClass
define(function(require) {

	"use strict";
	
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var View = require('app/views/abstract/View');
	// children-insert-point requireEntry
	
	return View.extend({

		initialize : function() {
//			this.collection.on("reset", this.render, this);
//			this.collection.on("add", this.render, this);
		},

		render : function() {
			View.prototype.render.apply(this);
			this.$el = this.$el.find("table");   // or we can find by (.table) or by (table) o by(# + id)
			_.each(this.collection.models, function(model) {
				this.$el.append(new this.tableItemViewClass({
					model : model
				}).render().el);
			}, this);
			return this;
		},

		setCollection : function(collection) {
			this.collection = collection;
		}
		// children-insert-point backboneClassMember
	});
});