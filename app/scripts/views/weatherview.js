/*global define*/

define([
    'createjs'
    ,'movieclip'
    ,'jquery'
    ,'underscore'
    ,'backbone'
    ,'templates'
    ,'weathercanvas'
    ,'models/weathermodel'
    //,'easeljs' 
], function (CreateJS, MovieClip, $, _, Backbone, JST, WeatherCanvas, WeatherModel) {
//], function (CreateJS, $, _, Backbone, JST, WeatherCanvas, WeatherModel) {
    'use strict';
    var WeatherView = Backbone.View.extend({
        template: JST['app/scripts/templates/weather.ejs'],
/*
        tagName: 'div',

        id: '',

        className: '',

        events: {},
*/
        initialize: function () {
            var that = this;
            MeltedSpork.Views.Weather = this;
            MeltedSpork.Models.Weather = new WeatherModel();
            this.model = MeltedSpork.Models.Weather;

            //$.when(MeltedSpork.Models.weather.get_weather()).done(function(){
                //MeltedSpork.Weather.Model = this.model;
                that.render();
            //});

            //this.listenTo(this.model, 'change', this.render);
        }
        ,render: function () {
            var that = this;
            //this.$el.html('<canvas id="canvas" width="1366" height="768" style="background-color:#CCCCCC"></canvas>');
            this.$el.html(this.template(this.model.toJSON()));
            /*
            var container = document.getElementById('container');
            container.style.width = document.body.clientWidth;
            container.style.height = document.body.clientHeight;
            container.style.overflow = "hidden";
            */

            //console.log("lib:",lib);

            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", this.handleFileLoad);
            //loader.addEventListener("complete", this.handleComplete);
            loader.addEventListener("complete", function() {
                that.handleComplete(that);
            });
            loader.loadManifest(lib.properties.manifest);
        }
        ,handleFileLoad: function (evt) {
            if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
            //console.log("images",images);
        }
        ,handleComplete: function(that) {
            var exportRoot = new lib.weathercanvas();
            //console.log("export", exportRoot);

            var canvas = document.getElementById("canvas");
            var stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();
            //console.log("stage:",stage);

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);

            $.when(exportRoot).done(function(){
                that.model.getWeather(exportRoot);
            });

            that.exportRoot = exportRoot;
        }
        ,output: function (api) {
            console.log( api.toJSON());
        }

    });

    return WeatherView;
});
