define(function (require) {

    "use strict";

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    
    var View = require('app/views/abstract/View');

    return View.extend({
      	tpl: require('text!tpl/Frame.html')
    });
});