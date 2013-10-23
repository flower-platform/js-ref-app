/**
 * Created with JetBrains WebStorm.
 * User: Tache Razvan Mihai
 * Date: 9/20/13
 * Time: 11:51 AM
 * To change this template use File | Settings | File Templates.
 */
define(function (require) {

    "use strict";
    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        TableItemView = require('app/views/abstract/TableItemView');

    return TableItemView.extend({
       	tpl: require('text!tpl/CompaniesTableItem.html')
    });
});