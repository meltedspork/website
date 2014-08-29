/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MoonAPI = Backbone.Model.extend({
        url: function() { return this.get('apiUrl') },

        initialize: function() {
        },

        defaults: {
            apiUrl : 'http://theeyestudio.com:8080/moon/lunarphase',
            staticData: {
                phase : {
                    _10:['NewMoon']
                    ,_15:['YoungMoon']
                    ,_20:['WaxingCrescent']
                    ,_30:['FirstQuarter']
                    ,_40:['WaxingGibbous']
                    ,_50:['FullMoon']
                    ,_60:['WaningGibbous']
                    ,_70:['LastQuarter']
                    ,_80:['WaningCrescent']
                    ,_85:['OldMoon']
                }
            }
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return MoonAPI;
});