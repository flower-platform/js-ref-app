define(function (require) {

    "use strict";

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var tpl = require('text!tpl/Home.html');
    var template = _.template(tpl);

    return Backbone.View.extend({
        render: function () {
            this.$el.html(template());
            return this;
        }
    });
});