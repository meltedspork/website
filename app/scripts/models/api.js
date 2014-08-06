/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var API = Backbone.Model.extend({
        url: function() { return  this.defaults.api_url },

        initialize: function() {
        },

        defaults: {
            api_url : "",
            static_data: {}
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return WeatherAPI;
});