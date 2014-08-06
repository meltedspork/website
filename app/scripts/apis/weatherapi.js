/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var WeatherAPI = Backbone.Model.extend({
        url: function() { return this.defaults.static_data.api_url },

        initialize: function(models, options) {
            this.defaults.dynamic_data.city = options.city;
            this.defaults.dynamic_data.state = options.state;
        },

        defaults: {
            /*
            **********************
            weather conditions
            ----------------------
            01: clear sky
            02: few clouds
            03: scattered clouds
            04: broken clouds
            09: shower rain
            10: rain
            11: thunderstorm
            13: snow
            50: mist
            **********************
            */
            static_data: {
                api_url : "http://api.openweathermap.org/data/2.5/weather",
                conditions : {
                    "01":["Clear",true],
                    "02":["SunnyCloudy",true],
                    "03":["Cloudy",false],
                    "04":["GrayCloudy",true],
                    "09":["Shower",false],
                    "10":["Rain",true],
                    "11":["Thunderstorm",false],
                    "13":["Snow",false],
                    "50":["Mist",false]
                },
                periods : {
                    "d":["Day","Sun"],
                    "n":["Night","Moon"]
                }
            },
            dynamic_data: {}
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return WeatherAPI;
});