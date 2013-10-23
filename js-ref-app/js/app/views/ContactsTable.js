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
        TableView = require('app/views/abstract/TableView');

    return TableView.extend({
    	tableFooterId: "contacts-list-footer",
       	tableItemViewClass: require('app/views/ContactsTableItem'),
       	tpl: require('text!tpl/ContactsTable.html')
    });
});