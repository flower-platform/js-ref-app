/**
 * Created with JetBrains WebStorm.
 * User: Tache Razvan Mihai
 * Date: 10/24/13
 * Time: 4:58 PM
 * To change this template use File | Settings | File Templates.
 */
define(function (require) {
    "use strict";
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
    var View = require('app/views/abstract/View');

    return View.extend({
        initialize : function() {
            this.events["click #edit-" + this.pageModel] = "editView";
            this.events["click #save-" + this.pageModel] = "saveInfo";
        },
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
        },
        events : {},

        setModel: function(model) {
            this.model = model;
        },

        editView: function() {
            console.log("edit");
            this.$el.find(".edit-element").show();
            this.$el.find(".view-element").hide();
        },
        // form view ->
        saveInfo: function() {
            console.log("save");
            this.$el.find(".edit-element").hide();
            this.render();
        }
    });
});