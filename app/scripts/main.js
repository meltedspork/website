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
        /*,easeljs: {
            exports:'createjs'
        }*/
        /*,tweenjs: {
            deps: ['easeljs'],
            exports: 'createjs.Tween'
        }*/
        /*,weathercanvas:{
            deps:['createjs'],
            //deps:['easeljs'],
            exports:'lib'
        }*/
        /*,appcanvas:{
            deps:['easeljs'],
            //deps:['easeljs'],
            exports:'lib'
        }*/
        ,movieclip: {
            deps:['createjs'],
            //deps: ['easeljs','tweenjs'],
            exports: 'createjs.MovieClip'
        }
        /*,preloadjs:{
            deps:['easeljs','tweenjs','movieclip'],
            exports:'createjs.PreloadJS'
        }*/
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery'
        ,backbone: '../bower_components/backbone/backbone'
        ,underscore: '../bower_components/lodash/dist/lodash'
        ,bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
        ,createjs: '../libs/createjs-2013.12.12.min'
        ,movieclip: '../libs/movieclip-0.7.1.min'
        //,easeljs: '../bower_components/easeljs/lib/easeljs-0.7.1.min'
        //,tweenjs: '../bower_components/createjs-tweenjs/lib/tweenjs-0.5.1.min'
        //,movieclip: '../bower_components/easeljs/lib/movieclip-0.7.1.min'
        //,preloadjs: '../bower_components/createjs-preloadjs/lib/preloadjs-0.4.1.min'
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


