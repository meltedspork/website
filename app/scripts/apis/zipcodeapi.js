/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ZipcodeAPI = Backbone.Model.extend({
        url: function() { return this.get('apiUrl') + this.get('apiCountry') + '/' + this.get('apiZipcode') },

        initialize: function(models, options) {
            this.set('apiZipcode', options.zipcode);
        },

        defaults: {
            apiUrl: 'http://zip.getziptastic.com/v2/',
            apiCountry: 'US'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
    return ZipcodeAPI;
});
