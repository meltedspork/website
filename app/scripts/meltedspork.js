/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MeltedSpork = new (Backbone.View.extend({
        root: "/",
        Models: {},
        Views: {},
        Collections: {},
        API: {},
        Canvas: {},
        events: {
            'click a': function(e){
                e.preventDefault();
                //console.log(e.target.pathname);
                Backbone.history.navigate(e.target.pathname, {trigger: true});
            }
        }/*,
        initialize : function(){
            // Pass in our Router module and call it's initialize function
           // Router.initialize();
        }*//*
        start: function(){
            console.log("hell yes!");
           // this.render();
           // Backbone.history.start({pushState: true});
        }*//*,
        render: function () {
            this.$el.html('<ul class="nav nav-pills pull-right">' +
                '<li><button>Home</button></li>' +
                '<li><button>About</button></li>' +
                '<li><button>Contact</button></li>' +
                '</ul>');
        }*/
    }))({el: document.body});
    window.MS = MeltedSpork;
    return MeltedSpork;
});