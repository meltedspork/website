/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AppView = Backbone.View.extend({
        template: JST['app/scripts/templates/app.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            var that = this;
            //this.model = new WeatherModel();
            //APP.Models.weather = new WeatherModel();
            //this.listenTo(this.model, 'change', this.render);
            //this.model.get_weather();

            //$.when(this.model.get_weather()).done(function(){
            //$.when(APP.Models.weather.get_weather()).done(function(){
                //API.Weather.Model = this.model;
                that.render();
            //});

            /* var that = this;

            API.Zipcode = new ZipcodeAPI([],{id: 60302});
            API.Weather = new WeatherAPI();

            API.Zipcode.fetch({
                success: function () {
                    //that.output(API.Zipcode);
                    API.Weather.fetch({
                        data: { q: API.Zipcode.attributes.city },
                        success: function () {
                            //that.output(API.Weather);
                            that.render();
                        }
                    });
                }
            });
            */
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template());
        },

        output: function (api) {
            console.log( api.toJSON());
        }
    });

    return AppView;
});
