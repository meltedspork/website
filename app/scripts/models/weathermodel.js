/*global define*/

define([
    'underscore',
    'backbone',
    'apis/zipcodeapi',
    'apis/weatherapi'
], function (_, Backbone, ZipcodeAPI, WeatherAPI) {
    'use strict';

    var WeathermodelModel = Backbone.Model.extend({
        url: '',

        initialize: function() {

        },

        defaults: {
        },

        get_weather : function(that) {
            var self = this;
            var api = MeltedSpork.API;

            api.Zipcode = new ZipcodeAPI([],{id: 60302});

            api.Zipcode.fetch({
                success: function () {
                    //self.output(api.Zipcode);
                    var city = api.Zipcode.attributes.city;
                    var state = api.Zipcode.attributes.state_short;

                    api.Weather = new WeatherAPI([],{
                        city: city,
                        state: state
                    });

                    api.Weather.fetch({
                        data: { q: city + "," + state },
                        success: function () {
                            var weather_data = api.Weather.attributes,
                                weather_dynamic = weather_data.dynamic_data,
                                weather_static = weather_data.static_data,
                                weather_icon = weather_data.weather[0].icon;

                            weather_dynamic.condition = weather_static.conditions[weather_icon.replace(/\D/g, "")];
                            weather_dynamic.period = weather_static.periods[weather_icon.replace(/[^a-z]/gi, "")];

                            self.set_weather(that,api);
                            //self.output(api.Weather);
                        }
                    });
                }
            });
        },

        set_weather: function(that,api) {

            //console.log("show weather");
            var weatherAPI = api.Weather.attributes.dynamic_data;/*,
                weatherCanvas = MeltedSpork.Canvas.Weather;*/

            that[weatherAPI.condition[0]].visible = true;
            that[weatherAPI.period[0]].visible = true;
            if (weatherAPI.condition[1]) {
                    that[weatherAPI.period[1]].visible = true;
            }
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        output: function (api) {
            //console.log( api.toJSON());
        }
    });

    return WeathermodelModel;
});
