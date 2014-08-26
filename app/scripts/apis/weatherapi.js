/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var WeatherAPI = Backbone.Model.extend({
        url: function() { return this.get('apiUrl') },

        initialize: function(models, options) {
            this.set('apiCity', options.city);
            this.set('apiState', options.state);
        },

        defaults: {
            apiUrl : 'http://api.openweathermap.org/data/2.5/weather',
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
            staticData: {
                conditions : {
                    _01:['Clear']
                    ,_02:['SunnyCloudy']
                    ,_03:['Cloudy']
                    ,_04:['GrayCloudy']
                    ,_09:['Shower']
                    ,_10:['Rain']
                    ,_11:['Thunderstorm']
                    ,_13:['Snow']
                    ,_50:['Mist']
                },
                periods : {
                    d:['Day','Sun']
                    ,n:['Night','Moon']
                }
            }
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return WeatherAPI;
});