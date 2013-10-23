define(function(require) {

	"use strict";
	var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
	var View = require('app/views/abstract/View');

	return View.extend({

		initialize : function() {
			this.collection.on("reset", this.render, this);
			this.collection.on("add", this.render, this);
		},

		render : function() {
			View.prototype.render.apply(this);
			this.$el = this.$el.find("#" + this.tableFooterId);
			_.each(this.collection.models, function(model) {
				this.$el.before(new this.tableItemViewClass({
					model : model
				}).render().el);
			}, this);
			return this;
		},

		setCollection : function(collection) {
			this.collection = collection;
		}
	});
});