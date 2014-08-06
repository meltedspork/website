/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ZipcodeAPI = Backbone.Model.extend({
        url: function() { return this.defaults.static_data.api_url + this.defaults.static_data.country + '/' + this.id },

        initialize: function(models, options) {
            this.id = options.id;
            this.defaults.dynamic_data.zipcode = this.id;
        },

        defaults: {
            static_data: {
                api_url: "http://zip.getziptastic.com/v2/",
                country: "US"
            },
            dynamic_data: {}
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
    return ZipcodeAPI;
});