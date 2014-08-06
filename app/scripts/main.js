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
        ,weathercanvas:{
            deps:['createjs'],
            exports:'lib',
        }
        ,movieclip: {
            deps: ['createjs'],
            exports: 'movieclip'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery'
        ,backbone: '../bower_components/backbone/backbone'
        ,underscore: '../bower_components/lodash/dist/lodash'
        ,bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
        ,createjs: 'libs/createjs-2013.12.12.min'
        //,easeljs: '../bower_components/easeljs/lib/easeljs-0.7.1.min'
        ,movieclip: '../bower_components/easeljs/lib/movieclip-0.7.1.min'
        //,tweenjs: '../bower_components/createjs-tweenjs/lib/tween.min'
        //,preloadjs: '../bower_components/createjs-preloadjs/lib/preloadjs-0.4.1.min'
        //,createjs: '//code.createjs.com/createjs-2013.12.12.min'
        //,movieclip: '//code.createjs.com/movieclip-0.7.1.min'
        ,weathercanvas: 'canvas/weathercanvas'
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


