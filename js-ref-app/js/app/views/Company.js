/**
 * Created with JetBrains WebStorm.
 * User: Tache Razvan Mihai
 * Date: 10/24/13
 * Time: 3:14 PM
 * To change this template use File | Settings | File Templates.
 */
define(function (require) {

    "use strict";
    var $               = require('jquery'),
        _               = require('underscore'),
        Backbone        = require('backbone'),
        FormView        = require('app/views/abstract/FormView');

    return FormView.extend({

       tpl: require('text!tpl/Company.html'),
       pageModel: "company"
    });
});