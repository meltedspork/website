/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ZipcodeAPI = Backbone.Model.extend({
        //url: function() { return this.get('apiUrl') + this.get('apiCountry') + this.get('apiZipcode') },
        url: function() { return this.get('apiUrl') + this.get('apiZipcode') },

        initialize: function(models, options) {
            this.set('apiZipcode', options.zipcode);
        },

        defaults: {
            apiUrl: 'https://theeyestudio.com/zip/'
            //apiUrl: 'http://api.zippopotam.us/',
            //apiCountry: 'us/'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });
    return ZipcodeAPI;
});
