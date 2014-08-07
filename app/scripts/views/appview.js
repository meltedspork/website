/*global define*/

define([
    //'easeljs'
    'jquery'
    ,'underscore'
    ,'backbone'
    ,'templates'
    ,'createjs'
    ,'canvas/app'
    //,'appcanvas'
//], function (EaselJS, $, _, Backbone, JST, AppCanvas) {
], function ($, _, Backbone, JST, CreateJS, AppCanvas) {
    'use strict';
    var AppView = Backbone.View.extend({
        template: JST['app/scripts/templates/weather.ejs'],
/*
        tagName: 'div',

        id: '',

        className: '',

        events: {},
*/
        initialize: function () {

            this.render();

            //this.listenTo(this.model, 'change', this.render);
        }
        ,render: function () {
            var that = this;
            //this.$el.html('<canvas id="canvas" width="1366" height="768" style="background-color:#CCCCCC"></canvas>');
            this.$el.html(this.template());

            var canvas, stage, exportRoot;

            canvas = document.getElementById("canvas");
            exportRoot = new lib.app();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            this.exportRoot = exportRoot;
        }

    });

    return AppView;
});
