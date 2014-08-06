/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ZipcodeAPI = Backbone.Model.extend({
        url: function() { return this.defaults.api_url + this.defaults.country + '/' + this.id },

        initialize: function(models, options) {
            this.id = options.id;
            this.defaults.zipcode = this.id;
        },

        defaults: {
            api_url: "http://zip.getziptastic.com/v2/",
            country: "US"
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
    return ZipcodeAPI;
});
