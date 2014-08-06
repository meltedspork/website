/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ZipcodeAPI = Backbone.Model.extend({
        url: function() { return this.defaults.staticData.url + this.defaults.staticData.country + '/' + this.id },

        initialize: function(models, options) {
            this.id = options.id;
            this.defaults.dynamicData.zipcode = this.id;
        },

        defaults: {
            staticData: {
                url: 'http://zip.getziptastic.com/v2/',
                country: 'US'
            },
            dynamicData: {}
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
    return ZipcodeAPI;
});
