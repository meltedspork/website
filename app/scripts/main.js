window.MeltedSpork = {};

/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
        ,backbone: {
            deps: []
        }
        ,createjs: {
            exports:'createjs'
        }
        ,preloadjs:{
            exports:'createjs'
        }
        ,tweenjs: {
            exports: 'createjs'
        }
        ,movieclip: {
            deps:['createjs'],
            exports: 'createjs'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery'
        ,backbone: '../bower_components/backbone/backbone'
        ,underscore: '../bower_components/lodash/dist/lodash'
        ,bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
        ,createjs: '../bower_components/easeljs/lib/easeljs-0.7.1.combined'
        ,tweenjs: '../bower_components/createjs-tweenjs/lib/tweenjs-0.5.1.combined'
        ,movieclip: '../bower_components/easeljs/lib/movieclip-0.7.1.combined'
        ,preloadjs: '../bower_components/createjs-preloadjs/lib/preloadjs-0.4.1.combined'
        ,greensock: '../bower_components/greensock/src/minified/TweenMax.min'
    }
});
/*
require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
});*/

require(['meltedspork','routes/router'], function(MeltedSpork, Router) {
    var router = new Router();
    //console.log("root: "+App.root);
    Backbone.history.start({pushState: true, root: MeltedSpork.root});
});


