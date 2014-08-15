/*global define*/

define([
    'createjs'
    ,'movieclip'
    ,'jquery'
    ,'underscore'
    ,'bootstrap'
    ,'backbone'
    ,'templates'
    ,'canvas/weathercanvas'
    ,'models/weathermodel'
    //,'easeljs'
], function (CreateJS, MovieClip, $, _, Bootstrap, Backbone, JST, WeatherCanvas, WeatherModel) {
//], function ($, _, Backbone, JST, WeatherModel) {
    'use strict';
    var WeatherView = Backbone.View.extend({
        template: JST['app/scripts/templates/weather.ejs'],
/*
        tagName: 'div',

        id: '',

        className: '',

        events: {},
*/
        id: 'container',

        canvas: {},

        initialize: function () {
            var that = this;
            MS.Views.Weather = this;
            MS.Models.Weather = new WeatherModel();
            this.model = MS.Models.Weather;

            this.canvas.height = $(window).height();
            this.canvas.width = $(window).width();

            //$.when(MS.Models.weather.get_weather()).done(function(){
                //MS.Weather.Model = this.model;
                that.render();
            //});

            //this.listenTo(this.model, 'change', this.render);
        }
        ,render: function () {
            var that = this;

            this.$el.html(this.template(this.model.toJSON()));

            document.getElementById(this.id).style.height=this.canvas.height+"px";
            document.getElementById(this.id).style.width=this.canvas.width+"px";
            document.getElementById(this.id).style.overflow="hidden";

            weatherimages = weatherimages||{};

            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", this.handleFileLoad);
            //loader.addEventListener("complete", this.handleComplete);
            loader.addEventListener("complete", function() {
                that.handleComplete(that);
            });
            loader.loadManifest(weatherlib.properties.manifest);
        }
        ,handleFileLoad: function (evt) {
            if (evt.item.type == "image") { weatherimages[evt.item.id] = evt.result; }
        }
        ,handleComplete: function(that) {
            window.weatherimg = weatherimages;

            var exportRoot = new weatherlib.weathercanvas();
            //console.log("export", exportRoot);

            var canvas = document.getElementById("canvas");
            var stage = new createjs.Stage(canvas);


            canvas.width = this.canvas.width;
            canvas.height = this.canvas.height;

            stage.addChild(exportRoot);
            stage.update();
            //console.log("stage:",stage);

            createjs.Ticker.setFPS(weatherlib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);

            $.when(exportRoot).done(function(){
                that.model.getWeather(exportRoot,that.canvas);
            });
            window.stage = stage;

            MS.Canvas.Weather = exportRoot;

        }
        ,output: function (api) {
            console.log( api.toJSON());
        }
    });

    return WeatherView;
});
