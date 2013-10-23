/**
 * Created with JetBrains WebStorm.
 * User: Tache Razvan Mihai
 * Date: 9/19/13
 * Time: 3:34 PM
 * To change this template use File | Settings | File Templates.
 */
require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl'
    },

//    map: {
//        '*': {
//            'app/models/Company': 'app/models/jsonp/Companies',
//            'app/models/Contact': 'app/models/jsonp/Contacts'
//        }
//    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery', 'bootstrap'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});