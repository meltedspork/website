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

        getWeather : function(that) {
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
                            var weatherData = api.Weather.attributes,
                                weatherDynamic = weatherData.dynamicData,
                                weatherStatic = weatherData.staticData,
                                weatherIcon = weatherData.weather[0].icon;

                            weatherDynamic.condition = weatherStatic.conditions[weatherIcon.replace(/\D/g, "")];
                            weatherDynamic.period = weatherStatic.periods[weatherIcon.replace(/[^a-z]/gi, "")];

                            self.setWeather(that,api);
                            //self.output(api.Weather);
                        }
                    });
                }
            });
        },

        setWeather: function(that,api) {

            //console.log("show weather");
            var weatherAPI = api.Weather.attributes.dynamicData;/*,
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
